import { z } from 'zod';

import { emailSchema, passwordSchema } from '../shared.js';

export const registerSchema = z.object({
  email: emailSchema,
  name: z.string().trim().min(1).max(100).optional(),
  password: passwordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required').max(72),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
