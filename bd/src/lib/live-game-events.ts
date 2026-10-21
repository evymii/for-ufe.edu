import { logger } from './logger.js';

export interface LiveGameChangedEvent {
  gameId: string;
  type: 'state_changed';
}

type Listener = (event: LiveGameChangedEvent) => void;
const listeners = new Set<Listener>();

export function emitLiveGameChanged(gameId: string): void {
  for (const listener of listeners) {
    try {
      listener({ gameId, type: 'state_changed' });
    } catch (error) {
      logger.warn({ err: error }, 'Live game listener threw — dropped');
    }
  }
}

export function subscribeLiveGameEvents(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
