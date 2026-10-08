export interface AdminStats {
  registrations: DailyCount[];
  users: {
    active: number;
    admins: number;
    total: number;
  };
}

/** Authenticated principal attached by the `authenticate` middleware. */
export interface AuthUser {
  email: string;
  id: string;
  role: Role;
}

export interface DailyCount {
  count: number;
  date: string; // YYYY-MM-DD
}

export interface Paginated<T> {
  items: T[];
  meta: PaginationMeta;
}

export interface PaginationMeta {
  hasNext: boolean;
  hasPrev: boolean;
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export type Role = 'ADMIN' | 'USER';

/** User shape safe to send to clients — never includes passwordHash. */
export interface SafeUser {
  createdAt: Date;
  email: string;
  id: string;
  isActive: boolean;
  name: null | string;
  role: Role;
  updatedAt: Date;
}
