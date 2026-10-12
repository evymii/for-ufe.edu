/**
 * Stable key derived from a Mongolian staff name ("Б.Пүрэвдорж" →
 * "бпүрэвдорж"): lower-case, dots and spaces stripped. Used both by the
 * /udirdlaga page (cutout filename resolution) and the staff card (DOM ids),
 * so it lives outside the client component.
 */
export function staffKey(name: string): string {
  return name.toLowerCase().replace(/[^a-z\u0400-\u04FF]/g, "");
}
