import { resetTestDatabase } from './db.js';

/** Vitest global setup for the e2e suite: clean, migrated test DB before anything runs. */
export async function setup(): Promise<void> {
  await resetTestDatabase();
}

export function teardown(): void {
  // Nothing to do — each test cleans up its own rows via TRUNCATE-free design
  // (unique emails); the next run truncates everything anyway.
}
