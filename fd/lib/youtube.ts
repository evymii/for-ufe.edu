/**
 * YouTube link helpers shared by the admin editor (paste-a-link fields) and
 * the public player (poster fallbacks). IDs are exactly 11 chars of
 * [A-Za-z0-9_-].
 */

const ID = "([A-Za-z0-9_-]{11})";

const URL_PATTERNS = [
  new RegExp(`youtube\\.com\\/watch\\?[^#\\s]*\\bv=${ID}`, "i"),
  new RegExp(`youtu\\.be\\/${ID}`, "i"),
  new RegExp(`youtube-nocookie\\.com\\/embed\\/${ID}`, "i"),
  new RegExp(`youtube\\.com\\/embed\\/${ID}`, "i"),
  new RegExp(`youtube\\.com\\/shorts\\/${ID}`, "i"),
  new RegExp(`youtube\\.com\\/live\\/${ID}`, "i"),
];

/** Extract a video ID from a pasted URL (watch/shorts/embed/live) or raw ID. */
export function parseYouTubeId(input: string): string | null {
  const text = input.trim();
  if (!text) return null;
  if (new RegExp(`^${ID}$`).test(text)) return text;
  for (const pattern of URL_PATTERNS) {
    const match = text.match(pattern);
    if (match) return match[1];
  }
  return null;
}

/** True when a thumbnail URL is one we generated from a YouTube ID. */
export function isYouTubeThumbUrl(url: string): boolean {
  return url.includes("ytimg.com/vi/");
}

/**
 * Standard thumbnail sizes. `hq` always exists for every video; `maxres` is
 * 16:9 HD but missing on some uploads (probe before use).
 */
export function youTubeThumbUrl(
  id: string,
  quality: "hq" | "maxres" | "mq" = "hq",
): string {
  const file =
    quality === "maxres"
      ? "maxresdefault"
      : quality === "mq"
        ? "mqdefault"
        : "hqdefault";
  return `https://i.ytimg.com/vi/${id}/${file}.jpg`;
}

/** Probe a URL with the browser image cache; resolves false on error. */
export function probeImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = url;
  });
}
