import { pinoHttp } from 'pino-http';

import { logger } from '../lib/logger.js';

export const requestLogger = pinoHttp({
  autoLogging: {
    ignore: (req) => req.url !== undefined && req.url.startsWith('/health'),
  },
  logger,
  redact: {
    censor: '[REDACTED]',
    paths: ['req.headers.authorization', 'req.headers.cookie', 'res.headers["set-cookie"]'],
  },
});
