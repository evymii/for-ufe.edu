export type ApiErrorDetails = Array<{ message: string; path: string }> | Record<string, unknown>;

/**
 * Operational error carrying an HTTP status, a stable machine-readable code
 * and an optional `details` payload. The central errorHandler maps it to the
 * standard error envelope: { success: false, error: { code, message, details? } }.
 */
export class ApiError extends Error {
  constructor(
    readonly statusCode: number,
    readonly code: string,
    message: string,
    readonly details?: ApiErrorDetails,
  ) {
    super(message);
    this.name = 'ApiError';
  }

  static badRequest(message = 'Bad request', details?: ApiErrorDetails): ApiError {
    return new ApiError(400, 'BAD_REQUEST', message, details);
  }

  static conflict(message = 'Conflict with existing data'): ApiError {
    return new ApiError(409, 'CONFLICT', message);
  }

  static forbidden(message = 'You do not have permission to perform this action'): ApiError {
    return new ApiError(403, 'FORBIDDEN', message);
  }

  static notFound(message = 'Resource not found'): ApiError {
    return new ApiError(404, 'NOT_FOUND', message);
  }

  static serviceUnavailable(message = 'Service temporarily unavailable'): ApiError {
    return new ApiError(503, 'SERVICE_UNAVAILABLE', message);
  }

  static unauthorized(message = 'Unauthorized'): ApiError {
    return new ApiError(401, 'UNAUTHORIZED', message);
  }
}
