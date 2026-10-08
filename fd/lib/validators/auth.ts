import { z } from "zod";

/**
 * Frontend mirror of bd/src/validators — same rules in spirit so users get
 * instant feedback and the server remains the source of truth.
 */
export const emailField = z
  .string()
  .min(1, "Имэйл хаяг заавал шаардлагатай")
  .email("Зөв имэйл хаяг оруулна уу");

export const passwordField = z
  .string()
  .min(8, "Нууц үг дор хаяж 8 тэмдэгт байх ёстой")
  .max(72, "Нууц үг хамгийн ихдээ 72 тэмдэгт байна");

export const loginSchema = z.object({
  email: emailField,
  password: z.string().min(1, "Нууц үг заавал шаардлагатай").max(72),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, "Нэр заавал шаардлагатай")
      .max(100, "Нэр хэт урт байна"),
    email: emailField,
    password: passwordField,
    confirmPassword: z.string(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Нууц үгүүд таарахгүй байна",
  });

export type RegisterValues = z.infer<typeof registerSchema>;

export const updateProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Нэр хоосон байж болохгүй")
    .max(100, "Нэр хэт урт байна"),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;
