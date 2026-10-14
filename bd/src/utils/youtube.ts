/**
 * YouTube link helpers for the video library. Admins paste a watch/shorts/
 * embed/live URL (or a bare ID) into `youtubeId`; we store the 11-char ID
 * and derive the standard poster when no thumbnail came along.
 */

const ID = '([A-Za-z0-9_-]{11})';

const URL_PATTERNS = [
  new RegExp(`youtube\\.com\\/watch\\?[^#\\s]*\\bv=${ID}`, 'i'),
  new RegExp(`youtu\\.be\\/${ID}`, 'i'),
  new RegExp(`youtube-nocookie\\.com\\/embed\\/${ID}`, 'i'),
  new RegExp(`youtube\\.com\\/embed\\/${ID}`, 'i'),
  new RegExp(`youtube\\.com\\/shorts\\/${ID}`, 'i'),
  new RegExp(`youtube\\.com\\/live\\/${ID}`, 'i'),
];

/** Extract a video ID from a pasted URL (watch/shorts/embed/live) or raw ID. */
export function extractYouTubeId(input: string): null | string {
  const text = input.trim();
  if (!text) return null;
  if (new RegExp(`^${ID}$`).test(text)) return text;
  for (const pattern of URL_PATTERNS) {
    const match = text.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

/**
 * Standard thumbnail sizes. `hq` always exists for every video; `maxres` is
 * 16:9 HD but missing on some uploads.
 */
export function youTubeThumbUrl(id: string, quality: 'hq' | 'maxres' | 'mq' = 'hq'): string {
  const file =
    quality === 'maxres' ? 'maxresdefault' : quality === 'mq' ? 'mqdefault' : 'hqdefault';
  return `https://i.ytimg.com/vi/${id}/${file}.jpg`;
}
