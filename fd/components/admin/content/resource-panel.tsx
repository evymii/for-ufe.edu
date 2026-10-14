"use client";

import { useMemo, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FieldGrid,
  coerceField,
  initialFormValues,
  type FieldDef,
  type FormValues,
} from "@/components/admin/content/field-input";
import { ApiClientError } from "@/lib/api-client";
import { revalidatePublicTag } from "@/lib/admin/revalidate";
import { adminContentService } from "@/services/admin/content.service";
import { useContentResource } from "@/hooks/use-content-admin";

/**
 * Generic CMS panel: sortable-by-config table over one content resource,
 * with a create/edit dialog driven by FieldDefs and a delete confirm.
 *
 * Every successful write ends with the uniform mutation tail:
 * toast → refetch() → revalidatePublicTag(tag) so the public ISR cache is
 * purged and the next visitor sees the change immediately.
 */

export interface ColumnDef {
  key: string;
  label: string;
  render?: (row: Record<string, unknown>) => React.ReactNode;
}

export interface ResourceConfig {
  key: string;
  title: string;
  description: string;
  endpoint: string;
  singular: string;
  fields: FieldDef[];
  columns: ColumnDef[];
  /** Query params appended to the list request. */
  listQuery?: Record<string, string>;
  /** Fixed values merged into CREATE payloads only (e.g. group: "STAFF"). */
  defaults?: Record<string, unknown>;
  /**
   * Public cache tag purged after writes. Defaults to `key`; set
   * explicitly when the tab shares a collection with another tag (e.g. the
   * staff tab edits Executive rows → "executives").
   */
  revalidateTag?: string;
}

export function ResourcePanel({ config }: { config: ResourceConfig }) {
  const { data, isPending, isError, error, refetch } = useContentResource(
    config.key,
    config.endpoint,
    config.listQuery,
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Record<string, unknown> | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [values, setValues] = useState<FormValues>({});

  const rows = useMemo(
    () => (data?.items ?? []) as Array<Record<string, unknown>>,
    [data],
  );

  const openCreate = () => {
    setEditing(null);
    setValues(initialFormValues(config.fields, null));
    setDialogOpen(true);
  };

  const openEdit = (row: Record<string, unknown>) => {
    setEditing(row);
    setValues(initialFormValues(config.fields, row));
    setDialogOpen(true);
  };

  const submit = async () => {
    setSaving(true);
    try {
      const payload: Record<string, unknown> = {};
      for (const field of config.fields) {
        const value = coerceField(field, values[field.name] ?? "");
        if (value !== undefined) payload[field.name] = value;
      }
      if (editing) {
        await adminContentService.update(
          config.endpoint,
          String(editing.id),
          payload,
        );
        toast.success(`${config.singular} шинэчлэгдлээ`);
      } else {
        await adminContentService.create(config.endpoint, {
          ...config.defaults,
          ...payload,
        });
        toast.success(`${config.singular} нэмэгдлээ`);
      }
      setDialogOpen(false);
      void refetch();
      void revalidatePublicTag(config.revalidateTag ?? config.key);
    } catch (err) {
      toast.error(
        err instanceof ApiClientError
          ? err.message
          : "Хадгалах үед алдаа гарлаа",
      );
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleting) return;
    try {
      await adminContentService.remove(config.endpoint, deleting);
      toast.success(`${config.singular} устгагдлаа`);
      void refetch();
      void revalidatePublicTag(config.revalidateTag ?? config.key);
    } catch (err) {
      toast.error(
        err instanceof ApiClientError ? err.message : "Устгах үед алдаа гарлаа",
      );
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div>
      <PageHeader
        title={config.title}
        description={config.description}
        actions={
          <Button onClick={openCreate}>
            <Plus aria-hidden="true" /> Шинэ
          </Button>
        }
      />

      {isPending ? (
        <div className="space-y-2">
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : isError ? (
        <p className="text-destructive text-sm" role="alert">
          {error instanceof ApiClientError
            ? error.message
            : "Мэдээлэл ачаалахад алдаа гарлаа."}
        </p>
      ) : rows.length === 0 ? (
        <p className="text-muted-foreground py-10 text-center text-sm">
          Одоогоор бичлэг байхгүй — “Шинэ” товч дээр дарж нэмээрэй.
        </p>
      ) : (
        <div className="border-border/60 overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                {config.columns.map((column) => (
                  <TableHead key={column.key}>{column.label}</TableHead>
                ))}
                <TableHead className="text-right">Үйлдэл</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={String(row.id)}>
                  {config.columns.map((column) => (
                    <TableCell
                      key={column.key}
                      className="max-w-[240px] truncate"
                    >
                      {column.render ? (
                        column.render(row)
                      ) : (
                        <span className="text-sm">
                          {formatCell(row[column.key])}
                        </span>
                      )}
                    </TableCell>
                  ))}
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Засах"
                        onClick={() => openEdit(row)}
                      >
                        <Pencil className="size-4" aria-hidden="true" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Устгах"
                        onClick={() => setDeleting(String(row.id))}
                      >
                        <Trash2
                          className="text-destructive size-4"
                          aria-hidden="true"
                        />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Create / edit dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editing
                ? `${config.singular} засах`
                : `Шинэ ${config.singular.toLowerCase()}`}
            </DialogTitle>
            <DialogDescription>
              Өөрчлөлтүүд шууд нийтлэгдэж, нийтийн хуудас дээр тусна.
            </DialogDescription>
          </DialogHeader>
          <FieldGrid
            fields={config.fields}
            values={values}
            onChange={(name, value) =>
              setValues((current) => ({ ...current, [name]: value }))
            }
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Цуцах
            </Button>
            <Button onClick={() => void submit()} disabled={saving}>
              {saving ? "Хадгалж байна…" : "Хадгалах"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirm */}
      <Dialog
        open={deleting !== null}
        onOpenChange={(open) => !open && setDeleting(null)}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Устгах уу?</DialogTitle>
            <DialogDescription>
              Энэ үйлдлийг буцаах боломжгүй.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleting(null)}>
              Цуцах
            </Button>
            <Button variant="destructive" onClick={() => void confirmDelete()}>
              Устгах
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function formatCell(value: unknown): string {
  if (value === null || value === undefined) return "—";
  if (typeof value === "boolean") return value ? "Тийм" : "Үгүй";
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value).toLocaleDateString();
  }
  return String(value);
}

/** Small status badge helper reused by resource configs. */
export function StatusBadge({ value }: { value: unknown }) {
  const text = String(value ?? "—");
  return (
    <Badge
      variant={
        text === "FINAL" || text === "SCHEDULED" ? "secondary" : "outline"
      }
    >
      {text}
    </Badge>
  );
}
