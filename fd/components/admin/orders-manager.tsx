"use client";

import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ApiClientError, api } from "@/lib/api-client";
import { cn } from "@/lib/utils";

interface OrderRow {
  id: string;
  customerName: string;
  phone: string;
  email: null | string;
  note: null | string;
  items: Array<{ name?: string; price?: number; qty?: number }>;
  total: number;
  status: string;
  createdAt: string;
}

const STATUS_LABELS: Record<string, string> = {
  NEW: "Шинэ",
  CONFIRMED: "Баталгаажсан",
  SHIPPED: "Илгээгдсэн",
  DONE: "Дууссан",
  CANCELLED: "Цуцлагдсан",
};

const STATUS_STYLES: Record<string, string> = {
  NEW: "bg-primary/10 text-primary",
  CONFIRMED: "bg-blue-500/10 text-blue-600",
  SHIPPED: "bg-amber-500/10 text-amber-600",
  DONE: "bg-emerald-500/10 text-emerald-600",
  CANCELLED: "bg-muted text-muted-foreground",
};

const ORDERS_KEY = ["admin", "orders"] as const;

/** Захиалгууд — list + inline status change + delete (no manual create). */
export function OrdersManager() {
  const queryClient = useQueryClient();
  const [busyId, setBusyId] = useState<string | null>(null);
  const listQuery = useQuery({
    queryKey: ORDERS_KEY,
    queryFn: () =>
      api.get<{ items: OrderRow[] }>("/api/v1/admin/orders?limit=100"),
  });
  const rows = listQuery.data?.items ?? null;
  const error =
    listQuery.error instanceof ApiClientError ? listQuery.error.message : null;

  const setStatus = async (row: OrderRow, status: string) => {
    setBusyId(row.id);
    try {
      await api.patch(`/api/v1/admin/orders/${row.id}/status`, { status });
      toast.success(`Захиалга → ${STATUS_LABELS[status] ?? status}`);
      void queryClient.invalidateQueries({ queryKey: ORDERS_KEY });
    } catch (err) {
      toast.error(
        err instanceof ApiClientError ? err.message : "Шинэчлэхэд алдаа гарлаа",
      );
    } finally {
      setBusyId(null);
    }
  };

  const remove = async (row: OrderRow) => {
    if (!window.confirm("Захиалгыг устгах уу?")) return;
    setBusyId(row.id);
    try {
      await api.delete(`/api/v1/admin/orders/${row.id}`);
      toast.success("Устгагдлаа");
      void queryClient.invalidateQueries({ queryKey: ORDERS_KEY });
    } catch (err) {
      toast.error(
        err instanceof ApiClientError ? err.message : "Устгахад алдаа гарлаа",
      );
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Захиалгууд</h2>
        <p className="text-muted-foreground text-sm">
          Дэлгүүрийн захиалгууд — төлөв шинэчлэх, устгах.
        </p>
      </div>

      {rows === null ? (
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-12 w-full" />
          ))}
        </div>
      ) : error ? (
        <p className="text-destructive text-sm" role="alert">
          {error}
        </p>
      ) : (
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 text-left">
                <th className="px-3 py-2 font-medium">Захиалагч</th>
                <th className="px-3 py-2 font-medium">Утас</th>
                <th className="px-3 py-2 font-medium">Бүтээгдэхүүн</th>
                <th className="px-3 py-2 font-medium">Нийт</th>
                <th className="px-3 py-2 font-medium">Огноо</th>
                <th className="px-3 py-2 font-medium">Төлөв</th>
                <th className="px-3 py-2 text-right">Үйлдэл</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="text-muted-foreground px-3 py-8 text-center"
                  >
                    Захиалга байхгүй
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.id} className="border-t">
                    <td className="px-3 py-2 font-medium">
                      {row.customerName}
                    </td>
                    <td className="px-3 py-2">{row.phone}</td>
                    <td className="max-w-64 truncate px-3 py-2 text-xs">
                      {row.items
                        .map((item) => `${item.name ?? "?"} ×${item.qty ?? 1}`)
                        .join(", ")}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {row.total.toLocaleString()} ₮
                    </td>
                    <td className="px-3 py-2 text-xs whitespace-nowrap">
                      {new Date(row.createdAt).toLocaleDateString("mn-MN")}
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-semibold",
                          STATUS_STYLES[row.status] ?? "bg-muted",
                        )}
                      >
                        {STATUS_LABELS[row.status] ?? row.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-right whitespace-nowrap">
                      <select
                        aria-label="Төлөв солих"
                        className="border-input bg-background mr-2 h-8 rounded-md border px-2 text-xs"
                        value={row.status}
                        disabled={busyId === row.id}
                        onChange={(event) =>
                          void setStatus(row, event.target.value)
                        }
                      >
                        {Object.entries(STATUS_LABELS).map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Устгах"
                        disabled={busyId === row.id}
                        onClick={() => void remove(row)}
                      >
                        {busyId === row.id ? (
                          <Loader2
                            className="size-4 animate-spin"
                            aria-hidden="true"
                          />
                        ) : (
                          <Trash2 className="size-4" aria-hidden="true" />
                        )}
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
