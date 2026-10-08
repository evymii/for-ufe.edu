import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { RegisterForm } from "@/components/user/register-form";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: "Бүртгүүлэх",
};

export default function RegisterPage() {
  return (
    <div className="bg-paper-soft flex flex-col items-center justify-center gap-6 px-4 py-16">
      <FadeIn className="flex flex-col items-center gap-2 text-center">
        <p className="eyebrow">СЭЗИС баскетбол</p>
        <h1 className="font-display text-ink text-2xl font-semibold tracking-[0.02em] uppercase">
          Бүртгэл үүсгэх
        </h1>
        <p className="text-mute text-sm">
          Бүртгэлтэй юу?{" "}
          <Link
            href={routes.login}
            className="text-brand-2 hover:text-brand font-semibold underline-offset-4 hover:underline"
          >
            Нэвтрэх
          </Link>
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <RegisterForm />
      </FadeIn>
    </div>
  );
}
