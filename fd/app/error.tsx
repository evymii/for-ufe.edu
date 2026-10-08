"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function GlobalRouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        <p className="text-muted-foreground" role="alert">
          {error.message || "An unexpected error occurred."}
        </p>
      </div>
      <Button onClick={reset}>
        <RotateCcw aria-hidden="true" /> Try again
      </Button>
    </div>
  );
}
