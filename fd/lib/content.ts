import { env } from "@/lib/env";
import { CONTENT_TAG } from "@/lib/cache-tags";
import {
  frontOfficeFallback,
  photosFallback,
  scheduleFallback,
  shopFallback,
  videosFallback,
} from "@/content/pages";
import type {
  ContactInfo,
  Executive,
  GameRow,
  MediaAlbumRow,
  NewsPostRow,
  PageCopy,
  PlayerRow,
  ShopProductRow,
  VideoRow,
} from "@/types/content";

/**
 * Server-side reads from the bd/ content API. Every helper is tagged for
 * on-demand revalidation (POST /api/revalidate) and degrades to the seeded
 * fallback when the API is unreachable (build time, backend down), so public
 * pages always render.
 */

const BASE = `${env.apiUrl}/api/v1/content`;

interface Envelope<T> {
  success: boolean;
  data?: T;
}

async function getJson<T>(path: string, tag: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE}${path}`, {
      next: { revalidate: 60, tags: [CONTENT_TAG, tag] },
    });
    if (!res.ok) return null;
    const body = (await res.json()) as Envelope<T>;
    return body.success && body.data !== undefined ? body.data : null;
  } catch {
    return null; // backend down — caller falls back to static content
  }
}

/** MediaAlbum.images is a Json column: normalize to AlbumImage[]. */
function albumImages(raw: unknown): MediaAlbumRow["images"] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (item): item is MediaAlbumRow["images"][number] =>
      typeof item === "object" && item !== null && typeof item.url === "string",
  );
}

/** Player.profile is a Json column: normalize to the extras shape. */
function playerExtras(raw: unknown): PlayerRow["profile"] {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw))
    return null;
  return raw as PlayerRow["profile"];
}

export async function getExecutives(): Promise<Executive[]> {
  // STAFF-group rows belong to /staff, not the front-office directory.
  const data = await getJson<{ items: Executive[] }>(
    "/executives",
    "executives",
  );
  const items = (data?.items ?? []).filter((item) => item.group !== "STAFF");
  return items.length ? items : frontOfficeFallback;
}

/** Team-staff cards for /staff — Executive rows in the STAFF group. */
export async function getStaff(): Promise<Executive[]> {
  const data = await getJson<{ items: Executive[] }>(
    "/executives?group=STAFF",
    "executives",
  );
  return data?.items ?? [];
}

export async function getGames(): Promise<GameRow[]> {
  const data = await getJson<{ items: GameRow[] }>("/games?limit=100", "games");
  return data?.items?.length ? data.items : scheduleFallback;
}

export async function getAlbums(): Promise<MediaAlbumRow[]> {
  const data = await getJson<{ items: MediaAlbumRow[] }>("/media", "albums");
  if (!data?.items?.length) return photosFallback;
  return data.items.map((album) => ({
    ...album,
    images: albumImages(album.images),
  }));
}

export async function getVideos(): Promise<VideoRow[]> {
  const data = await getJson<{ items: VideoRow[] }>(
    "/videos?limit=100",
    "videos",
  );
  return data?.items?.length ? data.items : videosFallback;
}

export async function getShopProducts(): Promise<ShopProductRow[]> {
  const data = await getJson<{ items: ShopProductRow[] }>("/shop", "shop");
  return data?.items?.length ? data.items : shopFallback;
}

export async function getNews(
  filter: { featured?: boolean; limit?: number } = {},
): Promise<NewsPostRow[]> {
  const params = new URLSearchParams();
  if (filter.featured !== undefined) {
    params.set("featured", String(filter.featured));
  }
  if (filter.limit !== undefined) {
    params.set("limit", String(filter.limit));
  }
  const suffix = params.toString() ? `?${params.toString()}` : "";
  const data = await getJson<{ items: NewsPostRow[] }>(
    `/news${suffix}`,
    "news",
  );
  return data?.items ?? [];
}

/**
 * The public roster (and the home-page teaser): PLAYER rows only — coaches
 * and staff never mix into the roster grid; the server filters by role.
 */
export async function getPlayers(): Promise<PlayerRow[]> {
  const data = await getJson<{ items: PlayerRow[] }>(
    "/players?role=PLAYER",
    "players",
  );
  return (data?.items ?? []).map((player) => ({
    ...player,
    profile: playerExtras(player.profile),
  }));
}

export async function getPageCopy(
  page: string,
  section = "page",
): Promise<PageCopy | null> {
  const data = await getJson<{
    page: string;
    sections: Record<string, PageCopy>;
  }>(`/site-content/${page}`, "site-content");
  return data?.sections?.[section] ?? null;
}

/**
 * Contact details for the site footer: the contact/info copy blob merged
 * over the static defaults so missing keys keep rendering.
 */
export async function getContactInfo(
  fallback: ContactInfo,
): Promise<ContactInfo> {
  const copy = await getPageCopy("contact", "info");
  return { ...fallback, ...pickStrings(copy, fallback) };
}

function pickStrings(
  copy: PageCopy | null,
  base: ContactInfo,
): Partial<ContactInfo> {
  if (!copy) return {};
  const picked: Partial<ContactInfo> = {};
  for (const key of Object.keys(base) as Array<keyof ContactInfo>) {
    const value = copy[key];
    if (key === "phones" || key === "footerPhones") {
      if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
        picked[key] = value as string[];
      }
    } else if (typeof value === "string" && value.length > 0) {
      picked[key] = value;
    }
  }
  return picked;
}
