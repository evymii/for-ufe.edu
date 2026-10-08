import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div
      className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8 sm:px-6"
      aria-busy="true"
      aria-label="Loading page"
    >
      <Skeleton className="h-9 w-56" />
      <Skeleton className="h-5 w-96 max-w-full" />
      <div className="grid gap-4 pt-4 sm:grid-cols-3">
        <Skeleton className="h-28 rounded-xl" />
        <Skeleton className="h-28 rounded-xl" />
        <Skeleton className="h-28 rounded-xl" />
      </div>
      <Skeleton className="h-72 rounded-xl" />
    </div>
  );
}
