import bcrypt from 'bcrypt';

import { env } from '../config/env.js';

// Valid bcrypt hash of an unguessable random string. Compared against when a
// login email does not exist so response timing matches the "wrong password"
// path — prevents user enumeration via timing.
const DUMMY_BCRYPT_HASH = '$2b$12$YkyWbeywTZ8gEu.TaRpvRe2j7pXsi2114yGYJmOJN2RGg9wT49x/u';

export function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, env.BCRYPT_COST);
}

export function verifyDummyPassword(plain: string): Promise<boolean> {
  return bcrypt.compare(plain, DUMMY_BCRYPT_HASH);
}

export function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
