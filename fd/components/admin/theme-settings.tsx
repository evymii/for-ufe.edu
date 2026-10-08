"use client";

import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function ThemeSettings() {
  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="admin-theme-toggle">Theme</Label>
      <ThemeToggle />
    </div>
  );
}
