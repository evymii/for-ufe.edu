import type { Request, Response } from 'express';

import { SSE_HEARTBEAT_INTERVAL_MS, SSE_MAX_CONNECTIONS_PER_IP } from '../config/constants.js';
import { ApiError } from './ApiError.js';

const streams = new Set<Response>();
const streamsPerIp = new Map<string, number>();
let heartbeatTimer: NodeJS.Timeout | null = null;

/** Ends every open stream — graceful shutdown, so clients reconnect elsewhere. */
export function closeAllSseStreams(): void {
  for (const res of streams) {
    res.end();
  }
}

/**
 * Registers an SSE response: sets the standard stream headers, enforces the
 * per-IP connection cap (SSE connections are long-lived — an attacker must
 * not be able to hoard them) and keeps a heartbeat flowing so proxies do not
 * close idle streams.
 */
export function openSseStream(req: Request, res: Response): void {
  const ip = req.ip ?? 'unknown';
  const open = streamsPerIp.get(ip) ?? 0;
  if (open >= SSE_MAX_CONNECTIONS_PER_IP) {
    throw ApiError.tooManyRequests('Too many live-update streams from this address');
  }

  res.writeHead(200, {
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream; charset=utf-8',
    'X-Accel-Buffering': 'no', // nginx & friends: do not buffer the stream
  });
  res.write('retry: 3000\n\n'); // browser EventSource reconnect hint

  streams.add(res);
  streamsPerIp.set(ip, open + 1);
  startHeartbeat();

  res.on('close', () => {
    streams.delete(res);
    const remaining = (streamsPerIp.get(ip) ?? 1) - 1;
    if (remaining <= 0) {
      streamsPerIp.delete(ip);
    } else {
      streamsPerIp.set(ip, remaining);
    }
    if (streams.size === 0) {
      stopHeartbeat();
    }
  });
}

export function writeSseEvent(res: Response, event: string, data: unknown): void {
  if (!res.writableEnded) {
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
  }
}

function startHeartbeat(): void {
  if (heartbeatTimer) return;
  heartbeatTimer = setInterval(() => {
    for (const res of streams) {
      res.write(': heartbeat\n\n'); // SSE comment — keeps the wire warm, ignored by clients
    }
  }, SSE_HEARTBEAT_INTERVAL_MS);
  heartbeatTimer.unref();
}

function stopHeartbeat(): void {
  if (!heartbeatTimer) return;
  clearInterval(heartbeatTimer);
  heartbeatTimer = null;
}
