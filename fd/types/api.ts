export type Role = "USER" | "ADMIN";

/** Mirrors bd/src/queries/user/user.queries.ts SAFE_USER_SELECT. */
export interface User {
  id: string;
  email: string;
  name: string | null;
  role: Role;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface Paginated<T> {
  items: T[];
  meta: PaginationMeta;
}

export interface DailyCount {
  date: string;
  count: number;
}

export interface AdminStats {
  users: {
    total: number;
    active: number;
    admins: number;
  };
  registrations: DailyCount[];
}

export interface AuthPayload {
  user: User;
  accessToken: string;
}

/** The one error shape the API ever returns: { success: false, error: {...} } */
export interface ApiErrorBody {
  code: string;
  message: string;
  details?: Array<{ path: string; message: string }>;
}

export interface ListQuery {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  search?: string;
}
