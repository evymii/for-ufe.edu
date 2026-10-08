"use client";

import { useEffect, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";
import { toast } from "sonner";

import { PageHeader } from "@/components/shared/page-header";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useProfile, useUpdateProfile } from "@/hooks/use-user";
import { ApiClientError } from "@/lib/api-client";
import {
  updateProfileSchema,
  type UpdateProfileValues,
} from "@/lib/validators/auth";

export default function ProfilePage() {
  const { data, isPending, isError, error } = useProfile();
  const update = useUpdateProfile();

  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: { name: "" },
  });

  // Hydrate the form once the profile arrives from the API.
  useEffect(() => {
    if (data?.user) {
      form.reset({ name: data.user.name ?? "" });
    }
  }, [data, form]);

  function onSubmit(values: UpdateProfileValues): void {
    update.mutate(values, {
      onSuccess: ({ user }) =>
        toast.success(`Profile saved — hello, ${user.name}!`),
      onError: (mutationError) =>
        toast.error(
          mutationError instanceof ApiClientError
            ? mutationError.message
            : "Could not save your profile",
        ),
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    void form.handleSubmit(onSubmit)(event);
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Profile"
        description="How the rest of the app sees you."
      />

      {isPending ? (
        <Skeleton
          className="h-80 w-full rounded-xl"
          aria-label="Loading profile"
        />
      ) : isError ? (
        <Card>
          <CardHeader>
            <CardTitle>Could not load your profile</CardTitle>
            <CardDescription>
              {error instanceof ApiClientError
                ? error.message
                : "Please try again in a moment."}
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <Card className="max-w-lg">
          <CardHeader>
            <CardTitle>Display name</CardTitle>
            <CardDescription>
              Your email ({data?.user.email}) cannot be changed.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit} noValidate>
            <CardContent>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        autoComplete="name"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Shown on your dashboard and account menu.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="mt-4">
              <Button type="submit" disabled={update.isPending}>
                {update.isPending ? (
                  <Loader2 className="animate-spin" aria-hidden="true" />
                ) : (
                  <Save aria-hidden="true" />
                )}
                Save changes
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </div>
  );
}
