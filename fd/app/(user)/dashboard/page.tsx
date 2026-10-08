import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck, UserCircle } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { routes } from "@/config/routes";
import { UserAreaGreeting } from "@/components/user/user-greeting";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function UserDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Your account at a glance."
        actions={
          <Button variant="outline" asChild>
            <Link href={routes.user.profile}>
              Edit profile <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        }
      />

      <UserAreaGreeting />

      <FadeIn delay={0.05}>
        <Card>
          <CardHeader>
            <CardTitle>What is in here?</CardTitle>
            <CardDescription>
              This starter wires the full flow: register, log in, session
              refresh, role guards — both in the Next.js middleware and in the
              API.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Stagger className="grid gap-3 sm:grid-cols-3">
              <StaggerItem>
                <div className="rounded-lg border p-4">
                  <UserCircle className="mb-2 size-5" aria-hidden="true" />
                  <p className="text-sm font-medium">Profile</p>
                  <p className="text-muted-foreground text-xs">
                    Update your display name — persisted through the real API.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-lg border p-4">
                  <ShieldCheck className="mb-2 size-5" aria-hidden="true" />
                  <p className="text-sm font-medium">Guards</p>
                  <p className="text-muted-foreground text-xs">
                    Try /admin — you will be bounced. Cookies and middleware
                    agree.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-lg border p-4">
                  <Mail className="mb-2 size-5" aria-hidden="true" />
                  <p className="text-sm font-medium">Sessions</p>
                  <p className="text-muted-foreground text-xs">
                    Access tokens refresh silently via an httpOnly rotating
                    cookie.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
