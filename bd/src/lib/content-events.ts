import { logger } from './logger.js';

/** Payload broadcast to every SSE stream after a content write commits.
 * Clients refetch the page — the payload stays deliberately tiny. */
export interface ContentChangedEvent {
  createdCount?: number;
  event: 'ensured' | 'updated';
  key?: string;
  locale: string;
  page: string;
  type?: string;
}

type Listener = (event: ContentChangedEvent) => void;

const listeners = new Set<Listener>();

/** Broadcasts one committed change to all live streams. Never throws. */
export function emitContentChanged(event: ContentChangedEvent): void {
  for (const listener of listeners) {
    try {
      listener(event);
    } catch (error) {
      logger.warn({ err: error }, 'Content event listener threw — dropped');
    }
  }
}

/** Kept for API compatibility with the LISTEN-based transport: starting the
 *  listener is now a no-op (events are emitted in-process). */
export async function startContentListener(): Promise<void> {
  if (listeners.size === 0) {
    logger.debug('Content event bus ready (in-process)');
  }
}

/** Clears listeners — graceful shutdown. */
export async function stopContentListener(): Promise<void> {
  listeners.clear();
}

/**
 * Content-change fan-out. The API runs as a single process, so an in-process
 * emitter is the transport: writers call emitContentChanged() after their
 * transaction commits and every subscribed SSE stream receives the event.
 * (The previous PostgreSQL LISTEN/NOTIFY transport was needed only for
 * multi-process deployments.)
 */
export function subscribeContentEvents(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
