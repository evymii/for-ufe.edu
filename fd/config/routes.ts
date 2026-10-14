/** Central route map — never hardcode paths in pages or components. */
export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  site: {
    cityEdition: "/city-edition",
    contact: "/contact",
    fanClub: "/fan-club",
    frontOffice: "/front-office",
    history: "/history",
    management: "/staff",
    newsletter: "/newsletter",
    photos: "/photos",
    sponsors: "/sponsors",
    roster: "/players",
    schedule: "/schedule",
    videos: "/videos",
  },
  user: {
    dashboard: "/dashboard",
    profile: "/profile",
    settings: "/settings",
  },
  admin: {
    content: "/admin/content",
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
