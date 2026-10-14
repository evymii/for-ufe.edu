import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { FadeIn } from "@/components/motion";
import { BallMark } from "@/components/team/photo-slot";
import { Skeleton } from "@/components/ui/skeleton";
import { LoginForm } from "@/components/user/login-form";

export const metadata: Metadata = {
  title: "Нэвтрэх",
};

/**
 * Login — editorial split: photo panel (login image + 60% black overlay,
 * "UFE BASKETBALL" display wordmark, logo mark) + paper form panel. Desktop
 * is a full-height two-column
 * split (below the 112px header); mobile stacks the photo as a band above
 * the form.
 */
export default function LoginPage() {
  return (
    <div className="bg-paper lg:grid lg:min-h-[calc(100svh-112px)] lg:grid-cols-2">
      {/* Photo panel — band on mobile, full-height panel on desktop */}
      <FadeIn className="bg-ink relative isolate min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[calc(100svh-112px)]">
        <Image
          src="/images/login/login.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="absolute inset-0 -z-10 object-cover"
        />
        {/* 60% black overlay to settle the photo */}
        <div
          className="absolute inset-0 -z-10 bg-black/60"
          aria-hidden="true"
        />
        <p className="font-display absolute inset-0 flex items-center justify-center text-[clamp(28px,3.5vw,48px)] font-bold tracking-[0.02em] text-white uppercase">
          UFE BASKETBALL
        </p>
        <span className="absolute top-6 left-6 flex size-12 items-center justify-center rounded-full border border-white/25 sm:top-10 sm:left-10">
          <BallMark className="size-6" />
        </span>
      </FadeIn>

      {/* Form panel */}
      <div className="bg-paper flex items-center justify-center px-4 py-12 sm:px-10 lg:py-14">
        <h1 className="sr-only">Нэвтрэх</h1>
        <Suspense
          fallback={
            <Skeleton className="h-[420px] w-full max-w-sm rounded-none" />
          }
        >
          <FadeIn delay={0.05} className="w-full max-w-sm">
            <LoginForm />
          </FadeIn>
        </Suspense>
      </div>
    </div>
  );
}
