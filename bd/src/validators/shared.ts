import { z } from 'zod';

/** Route param schemas */
export const idParamSchema = z.object({
  // MongoDB ObjectId (24 hex chars) — Prisma generates these for every model.
  id: z.string().regex(/^[0-9a-f]{24}$/, 'id must be a valid id'),
});

/** Shared password policy (mirrored by the frontend forms in spirit). */
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(72, 'Password must be at most 72 characters'); // bcrypt input limit

export const emailSchema = z
  .email('Please provide a valid email address')
  .max(254)
  .transform((value) => value.toLowerCase());
