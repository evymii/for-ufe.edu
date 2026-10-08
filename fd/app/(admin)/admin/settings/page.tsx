import type { Metadata } from "next";

import { FadeIn } from "@/components/motion";
import { PageHeader } from "@/components/shared/page-header";
import { ThemeSettings } from "@/components/admin/theme-settings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Admin · Settings",
};

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Admin settings"
        description="Console-wide preferences. Per-user settings live in the user area."
      />

      <FadeIn className="grid max-w-2xl gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Applies to the admin console on this device.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ThemeSettings />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About this console</CardTitle>
            <CardDescription>
              {siteConfig.name} admin area — guarded by the API (role re-checked
              against the database) and by the Next.js middleware.
            </CardDescription>
          </CardHeader>
        </Card>
      </FadeIn>
    </div>
  );
}
