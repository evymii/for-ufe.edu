import type { AuthUser } from './index.js';

declare global {
  namespace Express {
    interface Request {
      /** Set by the authenticate middleware. */
      user?: AuthUser;
    }
  }
}

export {};
