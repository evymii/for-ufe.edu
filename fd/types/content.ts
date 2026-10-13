/**
 * Entity shapes returned by the bd/ content API (JSON-serialized: dates
 * arrive as ISO strings). Shared by public pages and the admin CMS.
 */

export type ExecutiveGroup =
  "OWNERSHIP" | "OPERATIONS" | "BUSINESS" | "COACHES";

export interface Executive {
  id: string;
  name: string;
  slug: string;
  group: ExecutiveGroup;
  title: string;
  photo: string | null;
  bio: string | null;
  bullets: string[];
  sortOrder: number;
}

export type GameStatus = "SCHEDULED" | "FINAL" | "CANCELLED";

export interface GameRow {
  id: string;
  competition: string;
  round: string | null;
  opponent: string;
  opponentShort: string | null;
  opponentLogo: string | null;
  isHome: boolean;
  tipsAt: string;
  venue: string;
  status: GameStatus;
  teamScore: number | null;
  opponentScore: number | null;
  note: string | null;
  streamUrl: string | null;
  ticketUrl: string | null;
}

export type AlbumCategory = "GAMES" | "COMMUNITY" | "EVENTS";

export interface AlbumImage {
  url: string;
  caption?: string | null;
}

export interface MediaAlbumRow {
  id: string;
  title: string;
  slug: string;
  category: AlbumCategory;
  coverImage: string | null;
  images: AlbumImage[];
  eventDate: string | null;
  sortOrder: number;
}

export type VideoCategory =
  "HIGHLIGHTS" | "INTERVIEWS" | "BEHIND_THE_SCENES" | "PRESS";

export interface VideoRow {
  id: string;
  title: string;
  slug: string;
  category: VideoCategory;
  thumbnail: string | null;
  videoUrl: string | null;
  youtubeId: string | null;
  durationSec: number | null;
  isFeatured: boolean;
  publishedAt: string;
}

export type ShopCategory =
  "JERSEYS" | "TEES" | "HOODIES" | "HATS" | "KIDS" | "GEAR";

export interface ShopProductRow {
  id: string;
  name: string;
  slug: string;
  category: ShopCategory;
  price: number;
  compareAtPrice: number | null;
  image: string | null;
  url: string | null;
  sizes: string[];
  badge: string | null;
}

/** One row of SiteContent.data for a page/section pair. */
export type PageCopy = Record<string, unknown>;

export interface NewsletterInterest {
  key: "recaps" | "tickets" | "community" | "shop";
  label: string;
}

export interface NewsletterCopy {
  kicker: string;
  title: string;
  benefits: string[];
  consent: string;
  cta: string;
  interests: NewsletterInterest[];
}
