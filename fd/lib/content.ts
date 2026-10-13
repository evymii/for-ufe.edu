import { env } from "@/lib/env";
import {
  frontOfficeFallback,
  photosFallback,
  scheduleFallback,
  shopFallback,
  videosFallback,
} from "@/content/pages";
import type {
  Executive,
  GameRow,
  MediaAlbumRow,
  PageCopy,
  ShopProductRow,
  VideoRow,
} from "@/types/content";

/**
 * Server-side reads from the bd/ content API. Every helper degrades to the
 * seeded fallback in content/pages.ts when the API is unreachable (build
 * time, backend down), so public pages always render.
 */

const BASE = `${env.apiUrl}/api/v1/content`;

interface Envelope<T> {
  success: boolean;
  data?: T;
}

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE}${path}`, {
      next: { revalidate: 60, tags: ["content"] },
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

export async function getExecutives(): Promise<Executive[]> {
  const data = await getJson<{ items: Executive[] }>("/executives");
  return data?.items?.length ? data.items : frontOfficeFallback;
}

export async function getGames(): Promise<GameRow[]> {
  const data = await getJson<{ items: GameRow[] }>("/games?limit=100");
  return data?.items?.length ? data.items : scheduleFallback;
}

export async function getAlbums(): Promise<MediaAlbumRow[]> {
  const data = await getJson<{ items: MediaAlbumRow[] }>("/media");
  if (!data?.items?.length) return photosFallback;
  return data.items.map((album) => ({
    ...album,
    images: albumImages(album.images),
  }));
}

export async function getVideos(): Promise<VideoRow[]> {
  const data = await getJson<{ items: VideoRow[] }>("/videos?limit=100");
  return data?.items?.length ? data.items : videosFallback;
}

export async function getShopProducts(): Promise<ShopProductRow[]> {
  const data = await getJson<{ items: ShopProductRow[] }>("/shop");
  return data?.items?.length ? data.items : shopFallback;
}

export async function getPageCopy(
  page: string,
  section = "page",
): Promise<PageCopy | null> {
  const data = await getJson<{
    page: string;
    sections: Record<string, PageCopy>;
  }>(`/site-content/${page}`);
  return data?.sections?.[section] ?? null;
}
