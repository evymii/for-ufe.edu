"use client";

import { useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { LucideIcon } from "lucide-react";
import { Image as ImageIcon, Loader2, Plus, Upload } from "lucide-react";
import { toast } from "sonner";

import {
  ConfirmDeleteDialog,
  EmptyCardState,
  EntityCard,
  NewCardTile,
  SkeletonCardGrid,
  type StatusTone,
} from "@/components/admin/entity-cards";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { YouTubeFrame } from "@/components/team/youtube-frame";
import { ApiClientError, api } from "@/lib/api-client";
import { revalidatePublicTag } from "@/lib/admin/revalidate";
import { tagForEndpoint } from "@/lib/cache-tags";
import { cn } from "@/lib/utils";
import {
  isYouTubeThumbUrl,
  parseYouTubeId,
  youTubeThumbUrl,
} from "@/lib/youtube";

// ─── Field schema ───────────────────────────────────────────────────────────

export type CollectionField =
  | {
      name: string;
      label: string;
      type: "text" | "number" | "textarea";
      required?: boolean;
      placeholder?: string;
      /** For number fields. */
      step?: number;
    }
  | {
      name: string;
      label: string;
      type: "select";
      options: ReadonlyArray<{ label: string; value: string }>;
      required?: boolean;
    }
  | {
      name: string;
      label: string;
      type: "checkbox";
      /** Initial state on CREATE (visibility flags usually start checked). */
      defaultChecked?: boolean;
    }
  | {
      name: string;
      label: string;
      type: "image";
      placeholder?: string;
    }
  | {
      name: string;
      label: string;
      type: "youtube";
      /** Field auto-filled with the standard YouTube poster (e.g. thumbnail). */
      autoPosterField?: string;
      placeholder?: string;
    }
  | {
      name: string;
      label: string;
      type: "list";
      /** Comma-separated in the editor, string[] over the wire. */
      placeholder?: string;
    }
  | {
      name: string;
      label: string;
      type: "images";
      /** One URL per line in the editor, [{ url }] over the wire. */
      placeholder?: string;
    };

type Row = Record<string, unknown> & { id: string };

export interface CollectionConfig {
  /** Page heading (Mongolian). */
  title: string;
  description?: string;
  /** REST base under /api/v1 — e.g. "/content/players". */
  endpoint: string;
  /** Extra query params appended to list reads (e.g. role=PLAYER). */
  listQuery?: Record<string, string>;
  fields: CollectionField[];
  /** Optional client-side filter applied to listed rows. */
  filter?: (row: Row) => boolean;
  /** Card visualization: media zone + title/meta + pills per row. */
  card: {
    aspect: "1/1" | "16/10" | "4/3" | "4/5";
    /** Field holding the media URL. */
    imageField: string;
    /** Icon shown when the media URL is empty (per-collection flavor). */
    fallbackIcon?: LucideIcon;
    /** Field for the big faded watermark (jersey number, year…). */
    watermarkField?: string;
    /** Small pills rendered on the media zone. */
    pills?: (row: Row) => React.ReactNode;
    title: (row: Row) => React.ReactNode;
    meta?: (row: Row) => React.ReactNode;
    /** Bottom-left status pill on the media zone. */
    status?: (row: Row) => null | { label: string; tone: StatusTone };
    /** Extra stat strip under the meta line. */
    extras?: (row: Row) => React.ReactNode;
  };
  /** Values merged into every create payload (e.g. fixed role). */
  createDefaults?: Record<string, unknown>;
  /** Hide the create button (read-mostly collections like orders). */
  canCreate?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function blankForm(config: CollectionConfig): Record<string, string | boolean> {
  const form: Record<string, string | boolean> = {};
  for (const field of config.fields) {
    form[field.name] =
      field.type === "checkbox"
        ? ("defaultChecked" in field && field.defaultChecked) === true
        : "";
  }
  return form;
}

function rowToForm(
  config: CollectionConfig,
  row: Row,
): Record<string, string | boolean> {
  const form: Record<string, string | boolean> = {};
  for (const field of config.fields) {
    const value = row[field.name];
    if (field.type === "checkbox") form[field.name] = Boolean(value);
    else if (field.type === "list")
      form[field.name] = Array.isArray(value) ? value.join(", ") : "";
    else if (field.type === "images")
      form[field.name] = Array.isArray(value)
        ? value
            .map((item) =>
              typeof item === "string"
                ? item
                : String((item as { url?: string })?.url ?? ""),
            )
            .join("\n")
        : "";
    else if (value === null || value === undefined) form[field.name] = "";
    else form[field.name] = String(value);
  }
  return form;
}

function formToPayload(
  config: CollectionConfig,
  form: Record<string, string | boolean>,
): Record<string, unknown> {
  const payload: Record<string, unknown> = {};
  for (const field of config.fields) {
    const value = form[field.name];
    if (field.type === "checkbox") {
      payload[field.name] = Boolean(value);
    } else if (field.type === "number") {
      const text = String(value).trim();
      payload[field.name] = text === "" ? null : Number(text);
    } else if (field.type === "list") {
      const text = String(value);
      payload[field.name] = text
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean);
    } else if (field.type === "images") {
      const text = String(value);
      payload[field.name] = text
        .split(/\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .map((url) => ({ url }));
    } else {
      const text = String(value);
      const required = "required" in field && field.required;
      payload[field.name] = required || text !== "" ? text : null;
    }
  }
  return payload;
}

function missingRequired(
  config: CollectionConfig,
  form: Record<string, string | boolean>,
): string | null {
  for (const field of config.fields) {
    if (
      field.type !== "checkbox" &&
      "required" in field &&
      field.required &&
      !String(form[field.name]).trim()
    ) {
      return field.label;
    }
  }
  return null;
}

// ─── Image upload (Cloudinary via /admin/media) ─────────────────────────────

function ImageField({
  id,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
}) {
  const [uploading, setUploading] = useState(false);

  const upload = async (file: File) => {
    setUploading(true);
    try {
      const body = new FormData();
      body.append("image", file);
      body.append("alt", `upload-${file.name}`);
      const result = await api.postForm<{
        media: { url: string };
      }>("/api/v1/admin/media", body);
      onChange(result.media.url);
      toast.success("Зураг хуулагдлаа");
    } catch (error) {
      toast.error(
        error instanceof ApiClientError
          ? error.message
          : "Зураг хуулахад алдаа гарлаа",
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder ?? "https://…"}
      />
      <Label
        htmlFor={`${id}-file`}
        className="flex h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-md border px-3 text-xs font-medium"
      >
        {uploading ? (
          <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
        ) : (
          <Upload className="size-3.5" aria-hidden="true" />
        )}
        Хуулах
        <input
          id={`${id}-file`}
          type="file"
          accept="image/*"
          className="hidden"
          disabled={uploading}
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void upload(file);
            event.target.value = "";
          }}
        />
      </Label>
    </div>
  );
}

// ─── YouTube link field (paste URL or ID → live brand-free preview) ─────────

function YouTubeField({
  id,
  value,
  onChange,
  onIdResolved,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (next: string) => void;
  /** Fires whenever the input resolves to a concrete video ID. */
  onIdResolved?: (id: string) => void;
  placeholder?: string;
}) {
  const resolvedId = parseYouTubeId(value);

  // A pasted URL collapses to its 11-char ID as soon as it parses.
  const handleChange = (raw: string) => {
    const parsed = parseYouTubeId(raw);
    onChange(parsed ?? raw);
    if (parsed) onIdResolved?.(parsed);
  };

  return (
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <Input
          id={id}
          value={value}
          onChange={(event) => handleChange(event.target.value)}
          placeholder={placeholder ?? "https://youtube.com/watch?v=… эсвэл ID"}
        />
        {resolvedId ? (
          <span className="text-muted-foreground shrink-0 font-mono text-[11px]">
            ✓ {resolvedId}
          </span>
        ) : null}
      </div>
      {resolvedId ? (
        <div className="border-line aspect-video w-full overflow-hidden rounded-md border">
          <YouTubeFrame videoId={resolvedId} title="Урьдчилан харах" />
        </div>
      ) : value.trim() ? (
        <p className="text-destructive text-xs">
          YouTube линк эсвэл 11 тэмдэгт ID оруулна уу.
        </p>
      ) : null}
    </div>
  );
}

// ─── Manager ────────────────────────────────────────────────────────────────

/**
 * Generic admin CRUD surface: a table of the collection plus a create/edit
 * dialog driven by a field schema, wired to the /api/v1 content endpoints
 * (public GETs, ADMIN-guarded writes).
 */
export function CollectionManager({ config }: { config: CollectionConfig }) {
  const queryClient = useQueryClient();
  const queryKey = useMemo(
    () => ["collections", config.endpoint, config.listQuery ?? {}],
    [config],
  );
  const listQuery = useQuery({
    queryKey,
    queryFn: async () => {
      const query = new URLSearchParams(config.listQuery).toString();
      return api.get<{ items: Row[] }>(
        `/api/v1${config.endpoint}${query ? `?${query}` : ""}`,
      );
    },
  });
  const rows = listQuery.data
    ? config.filter
      ? listQuery.data.items.filter(config.filter)
      : listQuery.data.items
    : null;
  const error =
    listQuery.error instanceof ApiClientError ? listQuery.error.message : null;
  const [editing, setEditing] = useState<null | Row>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState<Record<string, string | boolean>>(() =>
    blankForm(config),
  );
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const canCreate = config.canCreate !== false;

  const openCreate = () => {
    setEditing(null);
    setForm(blankForm(config));
    setCreating(true);
  };

  const openEdit = (row: Row) => {
    setEditing(row);
    setForm(rowToForm(config, row));
    setCreating(true);
  };

  const save = async () => {
    const missing = missingRequired(config, form);
    if (missing) {
      toast.error(`«${missing}» талбарыг бөглөнө үү`);
      return;
    }
    setSaving(true);
    try {
      const payload = formToPayload(config, form);
      if (editing) {
        await api.patch(`/api/v1${config.endpoint}/${editing.id}`, payload);
        toast.success("Хадгалагдлаа");
      } else {
        await api.post(`/api/v1${config.endpoint}`, {
          ...config.createDefaults,
          ...payload,
        });
        toast.success("Үүсгэгдлээ");
      }
      setCreating(false);
      void queryClient.invalidateQueries({ queryKey });
      // Uniform mutation tail: purge the public ISR cache for this
      // collection so the site shows the change on the next request.
      const tag = tagForEndpoint(config.endpoint);
      if (tag) void revalidatePublicTag(tag);
    } catch (err) {
      toast.error(
        err instanceof ApiClientError ? err.message : "Хадгалахад алдаа гарлаа",
      );
    } finally {
      setSaving(false);
    }
  };

  const [confirmRow, setConfirmRow] = useState<null | Row>(null);

  const remove = async (row: Row) => {
    setDeletingId(row.id);
    try {
      await api.delete(`/api/v1${config.endpoint}/${row.id}`);
      toast.success("Устгагдлаа");
      void queryClient.invalidateQueries({ queryKey });
      const tag = tagForEndpoint(config.endpoint);
      if (tag) void revalidatePublicTag(tag);
    } catch (err) {
      toast.error(
        err instanceof ApiClientError ? err.message : "Устгахад алдаа гарлаа",
      );
    } finally {
      setDeletingId(null);
      setConfirmRow(null);
    }
  };

  const visibleRows = useMemo(() => rows ?? [], [rows]);
  const nameOf = (row: Row) =>
    String(row.name ?? row.title ?? row.customerName ?? row.id);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">{config.title}</h2>
          {config.description ? (
            <p className="text-muted-foreground text-sm">
              {config.description}
            </p>
          ) : null}
        </div>
        {canCreate ? (
          <Button onClick={openCreate}>
            <Plus aria-hidden="true" />
            Нэмэх
          </Button>
        ) : null}
      </div>

      {rows === null ? (
        <SkeletonCardGrid aspect={config.card.aspect} />
      ) : error ? (
        <p className="text-destructive text-sm" role="alert">
          {error}
        </p>
      ) : visibleRows.length === 0 && canCreate ? (
        <EmptyCardState
          label={`Одоогоор ${config.title.toLowerCase()} байхгүй`}
          hint="Эхний бичлэгээ нэмээд нийтийн хуудсанд харагдуулна уу."
          actionLabel="Нэмэх"
          onAction={openCreate}
        />
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {canCreate ? (
            <NewCardTile
              label={`Шинэ ${config.title.toLowerCase()}`}
              hint="Картан дээрх товч дээр дарж нэмнэ үү"
              onClick={openCreate}
            />
          ) : null}
          {visibleRows.map((row) => (
            <EntityCard
              key={row.id}
              aspect={config.card.aspect}
              image={
                typeof row[config.card.imageField] === "string" &&
                row[config.card.imageField]
                  ? (row[config.card.imageField] as string)
                  : null
              }
              fallbackIcon={config.card.fallbackIcon ?? ImageIcon}
              watermark={
                config.card.watermarkField
                  ? row[config.card.watermarkField]
                    ? String(row[config.card.watermarkField])
                    : null
                  : null
              }
              pills={config.card.pills?.(row)}
              title={config.card.title(row)}
              meta={config.card.meta?.(row)}
              status={config.card.status?.(row) ?? null}
              onEdit={() => openEdit(row)}
              onDelete={() => setConfirmRow(row)}
            >
              {config.card.extras?.(row)}
            </EntityCard>
          ))}
        </div>
      )}

      <ConfirmDeleteDialog
        open={confirmRow !== null}
        onOpenChange={(open) => {
          if (!open) setConfirmRow(null);
        }}
        name={confirmRow ? nameOf(confirmRow) : null}
        busy={confirmRow !== null && deletingId === confirmRow.id}
        onConfirm={() => {
          if (confirmRow) void remove(confirmRow);
        }}
      />

      <Dialog open={creating} onOpenChange={setCreating}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{editing ? "Засах" : "Шинээр нэмэх"}</DialogTitle>
            <DialogDescription>{config.title}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            {config.fields.map((field) => (
              <div key={field.name} className="grid gap-1.5">
                {field.type === "checkbox" ? (
                  <label className="flex items-center gap-2 text-sm font-medium">
                    <input
                      type="checkbox"
                      checked={Boolean(form[field.name])}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          [field.name]: event.target.checked,
                        }))
                      }
                    />
                    {field.label}
                  </label>
                ) : (
                  <>
                    <Label htmlFor={`field-${field.name}`}>
                      {field.label}
                      {"required" in field && field.required ? " *" : ""}
                    </Label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={`field-${field.name}`}
                        className="border-input bg-background min-h-24 w-full rounded-md border px-3 py-2 text-sm"
                        value={String(form[field.name] ?? "")}
                        placeholder={
                          "placeholder" in field ? field.placeholder : undefined
                        }
                        onChange={(event) =>
                          setForm((prev) => ({
                            ...prev,
                            [field.name]: event.target.value,
                          }))
                        }
                      />
                    ) : field.type === "images" ? (
                      <textarea
                        id={`field-${field.name}`}
                        className="border-input bg-background min-h-24 w-full rounded-md border px-3 py-2 font-mono text-xs"
                        value={String(form[field.name] ?? "")}
                        placeholder={
                          "placeholder" in field
                            ? field.placeholder
                            : "https://… (нэг URL нэг мөр)"
                        }
                        onChange={(event) =>
                          setForm((prev) => ({
                            ...prev,
                            [field.name]: event.target.value,
                          }))
                        }
                      />
                    ) : field.type === "select" ? (
                      <select
                        id={`field-${field.name}`}
                        className="border-input bg-background h-9 w-full rounded-md border px-3 text-sm"
                        value={String(form[field.name] ?? "")}
                        onChange={(event) =>
                          setForm((prev) => ({
                            ...prev,
                            [field.name]: event.target.value,
                          }))
                        }
                      >
                        <option value="">—</option>
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "image" ? (
                      <ImageField
                        id={`field-${field.name}`}
                        value={String(form[field.name] ?? "")}
                        placeholder={
                          "placeholder" in field ? field.placeholder : undefined
                        }
                        onChange={(next) =>
                          setForm((prev) => ({ ...prev, [field.name]: next }))
                        }
                      />
                    ) : field.type === "youtube" ? (
                      <YouTubeField
                        id={`field-${field.name}`}
                        value={String(form[field.name] ?? "")}
                        placeholder={
                          "placeholder" in field ? field.placeholder : undefined
                        }
                        onChange={(next) =>
                          setForm((prev) => ({ ...prev, [field.name]: next }))
                        }
                        onIdResolved={
                          field.autoPosterField
                            ? (id) =>
                                setForm((prev) => {
                                  const current = String(
                                    prev[field.autoPosterField as string] ?? "",
                                  ).trim();
                                  // Fill the poster only when empty or when
                                  // it still holds a previous auto-fill —
                                  // never clobber a custom upload.
                                  if (current && !isYouTubeThumbUrl(current)) {
                                    return prev;
                                  }
                                  return {
                                    ...prev,
                                    [field.autoPosterField as string]:
                                      youTubeThumbUrl(id),
                                  };
                                })
                            : undefined
                        }
                      />
                    ) : (
                      <Input
                        id={`field-${field.name}`}
                        type={field.type === "number" ? "number" : "text"}
                        step={
                          field.type === "number"
                            ? "step" in field
                              ? field.step
                              : undefined
                            : undefined
                        }
                        value={String(form[field.name] ?? "")}
                        placeholder={
                          "placeholder" in field ? field.placeholder : undefined
                        }
                        onChange={(event) =>
                          setForm((prev) => ({
                            ...prev,
                            [field.name]: event.target.value,
                          }))
                        }
                      />
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreating(false)}>
              Болих
            </Button>
            <Button onClick={() => void save()} disabled={saving}>
              {saving ? (
                <Loader2 className="animate-spin" aria-hidden="true" />
              ) : null}
              Хадгалах
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/** Small helper for boolean-ish cells. */
/** Media-zone pill used by card configs. */
export function MediaPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-background/90 text-card-foreground rounded-full px-2 py-0.5 text-[11px] font-semibold shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

export function YesNo({ value }: { value: unknown }) {
  return (
    <span
      className={cn(
        "text-xs font-semibold",
        value ? "text-primary" : "text-muted-foreground",
      )}
    >
      {value ? "Тийм" : "Үгүй"}
    </span>
  );
}
