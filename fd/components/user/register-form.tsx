"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, UserPlus } from "lucide-react";
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
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ApiClientError } from "@/lib/api-client";
import { registerSchema, type RegisterValues } from "@/lib/validators/auth";
import { routes } from "@/config/routes";
import { useAuth } from "@/providers/auth-provider";

export function RegisterForm() {
  const { register } = useAuth();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  async function onSubmit(values: RegisterValues): Promise<void> {
    setSubmitting(true);
    try {
      const user = await register({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      toast.success(`Тавтай морил, ${user.name ?? user.email}!`);
      router.push(routes.user.dashboard);
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
        <CardTitle className="text-xl">Бүртгэл үүсгэх</CardTitle>
        <CardDescription>Хэдхэн мэдээлэл оруулаад дуусгана.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} noValidate>
        <CardContent className="grid gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Нэр</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="name"
                    placeholder="Таны нэр"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имэйл</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder="ta@imeil.mn"
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
                    autoComplete="new-password"
                    placeholder="Дор хаяж 8 тэмдэгт"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Нууц үг давтах</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    autoComplete="new-password"
                    placeholder="Нууц үгээ давтана уу"
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
              <UserPlus aria-hidden="true" />
            )}
            {submitting ? "Бүртгэл үүсгэж байна…" : "Бүртгэл үүсгэх"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
