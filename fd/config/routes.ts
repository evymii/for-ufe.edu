/** Central route map — never hardcode paths in pages or components. */
export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  site: {
    contact: "/holboo-barih",
    history: "/tuuh",
    management: "/udirdlaga",
    roster: "/toglogchid",
  },
  user: {
    dashboard: "/dashboard",
    profile: "/profile",
    settings: "/settings",
  },
  admin: {
    dashboard: "/admin",
    users: "/admin/users",
    settings: "/admin/settings",
  },
} as const;

/** Route prefixes that require an authenticated session (see middleware.ts). */
export const PROTECTED_USER_PREFIXES = [
  "/dashboard",
  "/profile",
  "/settings",
] as const;

export const ADMIN_PREFIX = "/admin";
