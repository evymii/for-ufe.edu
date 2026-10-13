import type { Metadata } from "next";
import { Suspense } from "react";

import { FadeIn } from "@/components/motion";
import { LoginForm } from "@/components/user/login-form";
import { Skeleton } from "@/components/ui/skeleton";

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
