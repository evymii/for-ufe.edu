import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { FadeIn } from "@/components/motion";
import { LoginForm } from "@/components/user/login-form";
import { Skeleton } from "@/components/ui/skeleton";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: "Нэвтрэх",
};

export default function LoginPage() {
  return (
    <div className="bg-paper-soft flex flex-col items-center justify-center gap-6 px-4 py-16">
      <FadeIn className="flex flex-col items-center gap-2 text-center">
        <p className="eyebrow">СЭЗИС баскетбол</p>
        <h1 className="font-display text-ink text-2xl font-semibold tracking-[0.02em] uppercase">
          Эргэн ирээд баярлалаа
        </h1>
        <p className="text-mute text-sm">
          Бүртгэлгүй юу?{" "}
          <Link
            href={routes.register}
            className="text-brand-2 hover:text-brand font-semibold underline-offset-4 hover:underline"
          >
            Бүртгүүлэх
          </Link>
        </p>
      </FadeIn>
      <Suspense
        fallback={<Skeleton className="h-97 w-full max-w-sm rounded-xl" />}
      >
        <FadeIn delay={0.05}>
          <LoginForm />
        </FadeIn>
      </Suspense>
    </div>
  );
}
