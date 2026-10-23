/**
 * Cloudinary delivery-URL tweak for transparent cutouts: `e_trim` strips the
 * transparent padding around the figure at render time (the stored asset is
 * untouched), so contain-fitted portraits all render at a consistent size no
 * matter how much padding the upload carried. Only Cloudinary URLs are
 * rewritten; opaque photos pass through effectively unchanged because trim
 * has no transparency to remove.
 */
export function trimmedCutout(url: null | string): null | string {
  if (!url) return url;
  const marker = "/image/upload/";
  if (
    !url.startsWith("https://res.cloudinary.com/") ||
    !url.includes(marker) ||
    url.includes("e_trim")
  ) {
    return url;
  }
  return url.replace(marker, "/image/upload/e_trim/");
}
