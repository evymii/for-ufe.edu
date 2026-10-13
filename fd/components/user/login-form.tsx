"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LogIn } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, type LoginValues } from "@/lib/validators/auth";
import { ApiClientError } from "@/lib/api-client";
import { routes } from "@/config/routes";
import { useAuth } from "@/providers/auth-provider";

export function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { identifier: "", password: "" },
  });

  async function onSubmit(values: LoginValues): Promise<void> {
    setSubmitting(true);
    try {
      const user = await login(values.identifier, values.password);
      toast.success(
        `Тавтай морил, ${user.username ?? user.name ?? user.email}!`,
      );
      const next = searchParams.get("next");
      const target =
        next && next.startsWith("/") && !next.startsWith("//")
          ? next
          : user.role === "ADMIN"
            ? routes.admin.dashboard
            : routes.user.dashboard;
      router.push(target);
      router.refresh();
    } catch (error) {
      const message =
        error instanceof ApiClientError
          ? error.message
          : "Алдаа гарлаа. Дахин оролдоно уу.";
      toast.error(message);
      setSubmitting(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    void form.handleSubmit(onSubmit)(event);
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Нэвтрэх</CardTitle>
        <CardDescription>
          СЭЗИС БАСКЕТБОЛ дансаараа үргэлжлүүлнэ үү.
        </CardDescription>
      </CardHeader>
      {/* FormProvider — FormItem/FormLabel/FormControl read the form context
          (getFieldState); without it they crash at render. */}
      <Form {...form}>
        <form onSubmit={handleSubmit} noValidate>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Нэвтрэх нэр</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      autoComplete="username"
                      placeholder="Хэрэглэгчийн нэр"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Нууц үг</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="mt-4 flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? (
                <Loader2 className="animate-spin" aria-hidden="true" />
              ) : (
                <LogIn aria-hidden="true" />
              )}
              {submitting ? "Нэвтэрч байна…" : "Нэвтрэх"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
