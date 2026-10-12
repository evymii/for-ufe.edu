"use client";

import { useRouter } from "next/navigation";
import { CalendarDays, LogOut } from "lucide-react";
import { toast } from "sonner";

import { FadeIn } from "@/components/motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/providers/auth-provider";

export default function SettingsPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  async function onLogout(): Promise<void> {
    await logout();
    toast.success("Logged out. See you soon!");
    router.push("/");
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Settings"
        description="Preferences for your account."
      />

      <FadeIn className="grid max-w-2xl gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Session details straight from the API.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <CalendarDays
                className="text-muted-foreground size-4"
                aria-hidden="true"
              />
              Member since{" "}
              {user
                ? new Date(user.createdAt).toLocaleDateString(undefined, {
                    dateStyle: "long",
                  })
                : "—"}
            </p>
            <p className="text-muted-foreground">
              Role: {user?.role ?? "—"} ·{" "}
              {user?.isActive ? "active" : "inactive"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Session</CardTitle>
            <CardDescription>End your session on this device.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" onClick={() => void onLogout()}>
              <LogOut aria-hidden="true" /> Log out
            </Button>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
