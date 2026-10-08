/** Strips `undefined`-valued keys so a PATCH only touches sent fields. */
export function compact<T extends Record<string, unknown>>(payload: T): T {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined),
  ) as T;
}
