"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

import { ApiClientError, api } from "@/lib/api-client";

/**
 * Public contact form on /contact — posts straight to the bd/ contact
 * endpoint, which files it into the admin inbox (Admin → Агуулга → Холбоо).
 */
export function ContactForm() {
  const [values, setValues] = useState({
    email: "",
    message: "",
    name: "",
    phone: "",
    subject: "",
  });
  const [sending, setSending] = useState(false);

  const set =
    (key: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((current) => ({ ...current, [key]: event.target.value }));

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSending(true);
    try {
      await api.post("/api/v1/content/contact", {
        email: values.email,
        message: values.message,
        name: values.name,
        phone: values.phone || undefined,
        subject: values.subject || undefined,
      });
      toast.success("Зурвас илгээгдлээ — баярлалаа!");
      setValues({ email: "", message: "", name: "", phone: "", subject: "" });
    } catch (err) {
      toast.error(
        err instanceof ApiClientError
          ? err.message
          : "Илгээх үед алдаа гарлаа. Дахин оролдоно уу.",
      );
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "border-input focus-visible:ring-ring bg-background team-focus h-11 w-full rounded-md border px-3 text-sm focus-visible:outline-none";

  return (
    <form
      onSubmit={submit}
      className="border-line bg-paper space-y-4 border p-6 md:p-8"
      aria-label="Зурвас илгээх"
    >
      <p className="text-ink text-[12px] font-semibold tracking-[0.14em] uppercase">
        Бидэнд зурвас илгээх
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5">
          <span className="text-mute text-[11px] font-semibold tracking-[0.12em] uppercase">
            Нэр *
          </span>
          <input
            required
            value={values.name}
            onChange={set("name")}
            maxLength={80}
            className={inputClass}
          />
        </label>
        <label className="space-y-1.5">
          <span className="text-mute text-[11px] font-semibold tracking-[0.12em] uppercase">
            Имэйл *
          </span>
          <input
            required
            type="email"
            value={values.email}
            onChange={set("email")}
            maxLength={254}
            className={inputClass}
          />
        </label>
        <label className="space-y-1.5">
          <span className="text-mute text-[11px] font-semibold tracking-[0.12em] uppercase">
            Утас
          </span>
          <input
            value={values.phone}
            onChange={set("phone")}
            maxLength={30}
            className={inputClass}
          />
        </label>
        <label className="space-y-1.5">
          <span className="text-mute text-[11px] font-semibold tracking-[0.12em] uppercase">
            Сэдэв
          </span>
          <input
            value={values.subject}
            onChange={set("subject")}
            maxLength={140}
            className={inputClass}
          />
        </label>
      </div>
      <label className="block space-y-1.5">
        <span className="text-mute text-[11px] font-semibold tracking-[0.12em] uppercase">
          Зурвас *
        </span>
        <textarea
          required
          value={values.message}
          onChange={set("message")}
          rows={5}
          maxLength={4000}
          className="border-input focus-visible:ring-ring bg-background team-focus w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none"
        />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="font-display team-focus bg-ink text-paper hover:bg-mute hover:text-ink inline-flex min-h-11 items-center gap-2 px-6 text-sm font-semibold tracking-[0.06em] uppercase transition-colors disabled:opacity-60"
      >
        <Send className="size-4" aria-hidden="true" />
        {sending ? "Илгээж байна…" : "Илгээх"}
      </button>
    </form>
  );
}
