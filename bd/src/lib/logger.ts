import pino from 'pino';

import { env } from '../config/env.js';

// Secrets must never reach the logs: authorization headers, cookies and
// set-cookie responses are redacted centrally here.
export const logger = pino({
  level: env.isTest ? 'silent' : env.LOG_LEVEL,
  redact: {
    censor: '[REDACTED]',
    paths: [
      'req.headers.authorization',
      'req.headers.cookie',
      'req.headers["x-api-key"]',
      'res.headers["set-cookie"]',
      '*.req.headers.authorization',
      '*.req.headers.cookie',
      '*.res.headers["set-cookie"]',
    ],
  },
});
