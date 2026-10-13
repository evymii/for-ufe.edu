"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

import { api, ApiClientError } from "@/lib/api-client";
import type { NewsletterCopy } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Newsletter signup: 640px split hero (ink benefits panel + 2×2 collage),
 * a 560px signup card overlapping by -72px with offset shadow, inline
 * validation (12px red, fades 150ms), interest pills and a success state
 * that cross-fades 240ms while the check draws in 400ms.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterSignup({
  copy,
  initialEmail = "",
}: {
  copy: NewsletterCopy;
  initialEmail?: string;
}) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState(initialEmail);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleInterest = (key: string) => {
    setInterests((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const candidate = email.trim();
    if (!EMAIL_RE.test(candidate)) {
      setEmailError("Зөв имэйл хаяг оруулна уу.");
      return;
    }
    setEmailError(null);
    setStatus("saving");
    setErrorMessage(null);
    try {
      await api.post("/api/v1/content/newsletter/subscribe", {
        email: candidate,
        firstName: firstName.trim() || undefined,
        interests: interests as NewsletterCopy["interests"][number]["key"][],
      });
      setStatus("done");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof ApiClientError && error.status > 0
          ? "Бүртгэл амжилтгүй боллоо. Дараа дахин оролдоно уу."
          : "Серверт холбогдож чадсангүй. Интернэт холболтоо шалгана уу.",
      );
    }
  };

  return (
    <>
      {/* Split hero: ink benefits + collage */}
      <section className="grid md:grid-cols-2">
        <div className="bg-ink text-paper flex min-h-[420px] flex-col justify-center gap-5 p-8 md:min-h-[640px] md:p-16">
          <p className="text-[12px] font-semibold tracking-[0.12em] text-white/50 uppercase">
            {copy.kicker}
          </p>
          <h1 className="font-display text-[clamp(40px,6vw,64px)] leading-[0.95] font-bold tracking-[0.02em] uppercase">
            {copy.title}
          </h1>
          <ul className="mt-2 space-y-3">
            {copy.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-lg">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-white text-[13px]">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-paper-soft grid grid-cols-2 gap-2 p-2">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              aria-hidden="true"
              className={cn(
                "flex min-h-24 items-center justify-center",
                index % 3 === 0 ? "bg-paper-soft" : "bg-[#BDBDB9]",
              )}
            >
              <span className="font-display text-mute/50 text-[11px] tracking-[0.12em] uppercase">
                Коллаж
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Signup card overlapping the hero */}
      <section
        aria-label="Бүртгэлийн маягт"
        className="relative z-10 mx-auto -mt-18 w-full max-w-[560px] px-4 md:-mt-18"
      >
        <div className="border-ink bg-paper flex flex-col gap-4 border p-8 shadow-[8px_8px_0_#E6E6E3] md:p-10">
          {status === "done" ? (
            <SuccessPanel />
          ) : (
            <form onSubmit={submit} noValidate className="flex flex-col gap-4">
              <h2 className="font-display text-ink text-[32px] leading-none font-bold tracking-[0.02em] uppercase">
                Бүртгүүлэх
              </h2>

              <label className="block">
                <span className="eyebrow">Нэр</span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="Таны нэр"
                  autoComplete="given-name"
                  className="border-ink text-ink placeholder:text-mute/60 focus:border-ink mt-1.5 flex h-13 w-full items-center border bg-transparent px-4 text-[15px] focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="eyebrow">Имэйл</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (emailError) setEmailError(null);
                  }}
                  placeholder="name@email.com"
                  autoComplete="email"
                  required
                  aria-invalid={emailError ? "true" : undefined}
                  aria-describedby={
                    emailError ? "newsletter-email-error" : undefined
                  }
                  className={cn(
                    "placeholder:text-mute/60 mt-1.5 flex h-13 w-full items-center border bg-transparent px-4 text-[15px] focus:outline-none",
                    emailError
                      ? "border-[#B3261E]"
                      : "border-ink focus:border-ink",
                  )}
                />
                {emailError ? (
                  <p
                    id="newsletter-email-error"
                    className="mt-1.5 text-[12px] text-[#B3261E] transition-opacity duration-150"
                  >
                    {emailError}
                  </p>
                ) : null}
              </label>

              <fieldset>
                <legend className="eyebrow">Сонирхол</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {copy.interests.map((interest) => {
                    const active = interests.includes(interest.key);
                    return (
                      <button
                        key={interest.key}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggleInterest(interest.key)}
                        className={cn(
                          "font-display team-focus inline-flex h-11 items-center rounded-full border px-4 text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors",
                          active
                            ? "border-ink bg-ink text-paper"
                            : "border-ink/25 text-mute hover:border-ink hover:text-ink",
                        )}
                      >
                        {interest.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <p className="text-mute text-[12px] leading-[1.5]">
                {copy.consent}
              </p>

              <button
                type="submit"
                disabled={status === "saving"}
                className="font-display team-focus bg-ink text-paper hover:bg-brand-2 mt-2 inline-flex h-13 items-center justify-center rounded-full text-sm font-semibold tracking-[0.06em] uppercase transition-colors disabled:opacity-60"
              >
                {status === "saving" ? "Бүртгэж байна…" : copy.cta}
              </button>

              {status === "error" && errorMessage ? (
                <p className="text-[12px] text-[#B3261E]" role="alert">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          )}
        </div>
      </section>
    </>
  );
}

/** Success state: 240ms crossfade + check that draws in 400ms. */
function SuccessPanel() {
  return (
    <div className="view-swap flex flex-col items-center gap-4 py-8 text-center">
      <svg viewBox="0 0 52 52" className="text-ink size-14" aria-hidden="true">
        <circle
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-25"
        />
        <path
          d="M15 27l7 7 15-16"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
          strokeDasharray="40"
          strokeDashoffset="40"
          style={{
            animation: "check-draw 0.4s ease-out 0.1s forwards",
          }}
        />
      </svg>
      <h2 className="font-display text-ink text-[28px] font-bold tracking-[0.02em] uppercase">
        Та бүртгэгдлээ!
      </h2>
      <p className="text-mute max-w-sm text-[14px] leading-[1.6]">
        Баярлалаа. Тоглолтын өдрийн мэдээ шууд имэйл хаягтань очих болно.
      </p>
      <style>{`@keyframes check-draw { to { stroke-dashoffset: 0; } }`}</style>
    </div>
  );
}
