import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Express } from 'express';
import helmet from 'helmet';

import { API_PREFIX } from './config/constants.js';
import { corsOptions } from './config/cors.js';
import { env } from './config/env.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';
import { apiLimiter } from './middleware/rateLimiter.js';
import { requestLogger } from './middleware/requestLogger.js';
import { healthRouter } from './routes/health.routes.js';
import { apiRouter } from './routes/index.js';

export function buildApp(): Express {
  const app = express();

  app.disable('x-powered-by');
  if (!env.isTest) {
    app.use(requestLogger);
  }
  app.use(helmet());
  app.use(cors(corsOptions));
  app.use(express.json({ limit: '1mb' }));
  app.use(cookieParser());

  // Liveness/readiness for docker & load balancers (outside the versioned API).
  app.use('/health', healthRouter);

  // Versioned API surface, rate limited as a whole.
  app.use(API_PREFIX, apiLimiter, apiRouter);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
