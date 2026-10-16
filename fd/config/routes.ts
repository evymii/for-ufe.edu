/** Central route map — never hardcode paths in pages or components. */
export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  site: {
    fanClub: "/fan-club",
    game: (gameId: string) => `/schedule/${encodeURIComponent(gameId)}`,
    history: "/history",
    management: "/staff",
    media: "/media",
    roster: "/players",
    schedule: "/schedule",
    sponsors: "/sponsors",
  },
  user: {
    dashboard: "/dashboard",
    profile: "/profile",
    settings: "/settings",
  },
  admin: {
    dashboard: "/admin",
    content: "/admin/content",
    players: "/admin/players",
    staff: "/admin/staff",
    management: "/admin/management",
    gallery: "/admin/gallery",
    videos: "/admin/videos",
    shop: "/admin/shop",
    orders: "/admin/orders",
    news: "/admin/news",
    history: "/admin/history",
    general: "/admin/general",
    users: "/admin/users",
  },
} as const;

/** Route prefixes that require an authenticated session (see middleware.ts). */
export const PROTECTED_USER_PREFIXES = [
  "/dashboard",
  "/profile",
  "/settings",
] as const;

export const ADMIN_PREFIX = "/admin";
