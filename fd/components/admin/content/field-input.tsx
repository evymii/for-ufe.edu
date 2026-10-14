"use client";

import { ImageUploadField } from "@/components/admin/image-upload-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/**
 * Declarative form field for the CMS panels. Values are kept as strings /
 * booleans and coerced on submit via FieldDef.toPayload — one renderer
 * covers every content model without per-resource form components.
 */

export type FieldDef = {
  name: string;
  label: string;
  type:
    | "text"
    | "textarea"
    | "number"
    | "url"
    | "image"
    | "datetime"
    | "select"
    | "checkbox"
    | "tags"
    | "json";
  required?: boolean;
  placeholder?: string;
  help?: string;
  options?: Array<{ value: string; label: string }>;
  /** Wide fields (textarea/json) span the full dialog width. */
  full?: boolean;
};

export type FormValues = Record<string, string | boolean>;

export function FieldGrid({
  fields,
  values,
  onChange,
}: {
  fields: FieldDef[];
  values: FormValues;
  onChange: (name: string, value: string | boolean) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {fields.map((field) => (
        <div
          key={field.name}
          className={cn(
            "flex flex-col gap-1.5",
            (field.full ||
              field.type === "textarea" ||
              field.type === "image" ||
              field.type === "json") &&
              "sm:col-span-2",
          )}
        >
          {field.type === "checkbox" ? (
            <label className="flex cursor-pointer items-center gap-2.5 pt-6">
              <input
                type="checkbox"
                checked={values[field.name] === true}
                onChange={(event) => onChange(field.name, event.target.checked)}
                className="accent-primary size-4"
              />
              <span className="text-sm font-medium">{field.label}</span>
            </label>
          ) : (
            <>
              <Label htmlFor={`field-${field.name}`}>
                {field.label}
                {field.required ? (
                  <span className="text-destructive"> *</span>
                ) : null}
              </Label>
              <FieldControl
                field={field}
                value={values[field.name] ?? ""}
                onChange={(value) => onChange(field.name, value)}
              />
              {field.help ? (
                <p className="text-muted-foreground text-xs">{field.help}</p>
              ) : null}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function FieldControl({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: string | boolean;
  onChange: (value: string) => void;
}) {
  const shared = "placeholder:text-muted-foreground/60 bg-background text-sm";

  switch (field.type) {
    case "image":
      return (
        <ImageUploadField
          id={`field-${field.name}`}
          value={String(value)}
          placeholder={field.placeholder}
          onChange={onChange}
        />
      );
    case "textarea":
      return (
        <textarea
          id={`field-${field.name}`}
          value={String(value)}
          required={field.required}
          placeholder={field.placeholder}
          rows={3}
          onChange={(event) => onChange(event.target.value)}
          className={cn(
            shared,
            "border-input focus-visible:ring-ring min-h-20 rounded-md border px-3 py-2 focus-visible:outline-none",
          )}
        />
      );
    case "json":
      return (
        <textarea
          id={`field-${field.name}`}
          value={String(value)}
          placeholder='{ "key": "value" }'
          rows={6}
          spellCheck={false}
          onChange={(event) => onChange(event.target.value)}
          className={cn(
            shared,
            "border-input focus-visible:ring-ring rounded-md border px-3 py-2 font-mono text-xs focus-visible:outline-none",
          )}
        />
      );
    case "select":
      return (
        <select
          id={`field-${field.name}`}
          value={String(value)}
          required={field.required}
          onChange={(event) => onChange(event.target.value)}
          className={cn(
            shared,
            "border-input focus-visible:ring-ring h-9 rounded-md border px-2.5 focus-visible:outline-none",
          )}
        >
          <option value="">—</option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    case "checkbox":
      return null; // handled by the wrapper
    default:
      return (
        <Input
          id={`field-${field.name}`}
          type={
            field.type === "number"
              ? "number"
              : field.type === "datetime"
                ? "datetime-local"
                : field.type === "url"
                  ? "url"
                  : "text"
          }
          value={String(value)}
          required={field.required}
          placeholder={field.placeholder}
          onChange={(event) => onChange(event.target.value)}
          className={shared}
        />
      );
  }
}

/** String form value → API payload value for a field. */
export function coerceField(field: FieldDef, raw: string | boolean): unknown {
  switch (field.type) {
    case "checkbox":
      return raw === true || raw === "true";
    case "number":
      return raw === "" ? undefined : Number(raw);
    case "tags":
      return String(raw)
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean);
    case "json":
      return JSON.parse(String(raw || "null"));
    case "datetime": {
      const iso = new Date(String(raw));
      return Number.isNaN(iso.getTime()) ? undefined : iso.toISOString();
    }
    default:
      return String(raw);
  }
}

/** API row → initial string/boolean form values. */
export function initialFormValues(
  fields: FieldDef[],
  row?: Record<string, unknown> | null,
): FormValues {
  const values: FormValues = {};
  for (const field of fields) {
    const raw = row?.[field.name];
    switch (field.type) {
      case "checkbox":
        values[field.name] = raw === true;
        break;
      case "number":
        values[field.name] =
          raw === null || raw === undefined ? "" : String(raw);
        break;
      case "tags":
        values[field.name] = Array.isArray(raw) ? raw.join(", ") : "";
        break;
      case "json":
        values[field.name] =
          raw === null || raw === undefined
            ? ""
            : typeof raw === "string"
              ? raw
              : JSON.stringify(raw, null, 2);
        break;
      case "datetime":
        values[field.name] = raw ? toDatetimeLocal(new Date(String(raw))) : "";
        break;
      default:
        values[field.name] =
          raw === null || raw === undefined ? "" : String(raw);
    }
  }
  return values;
}

function toDatetimeLocal(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
