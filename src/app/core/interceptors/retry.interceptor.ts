import {
  HttpContextToken,
  HttpErrorResponse,
  HttpInterceptorFn,
} from "@angular/common/http";
import { retry, throwError, timer } from "rxjs";

export interface RetryInterceptorConfig {
  skipRetry?: boolean;
  retryCount?: number;
  delay?: number;
  retryCodes?: number[];
}

export const RETRY_CONFIG = new HttpContextToken<RetryInterceptorConfig>(
  () => ({}),
);

const defaultConfig: Required<RetryInterceptorConfig> = {
  skipRetry: false,
  retryCount: 2,
  delay: 1000,
  retryCodes: [429, 500, 502, 504],
};

/**
 * An HttpInterceptor that retries failed requests.
 *
 * @description
 * The interceptor retries the request if the response status code matches the `retryCodes` array.
 * Allows you to configure behavior of the interceptor for specific requests by providing the `RETRY_CONFIG` token.
 *
 * @example
 * this.httpClient.get(`my-url`, {
 *   context: new HttpContext().set(RETRY_CONFIG, {
 *     skipRetry: true,
 *   }),
 * });
 *
 * @example
 * this.httpClient.get(`my-url`, {
 *   context: new HttpContext().set(RETRY_CONFIG, {
 *     delay: 2000,
 *     retryCount: 5,
 *     retryCodes: [502],
 *   }),
 * });
 */
export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  const { skipRetry, retryCount, delay, retryCodes } = {
    ...defaultConfig,
    ...req.context.get(RETRY_CONFIG),
  };

  if (skipRetry) {
    return next(req);
  }

  return next(req).pipe(
    retry({
      count: retryCount,
      delay: (error: HttpErrorResponse) => {
        if (retryCodes.includes(error.status)) {
          return timer(delay);
        }

        return throwError(() => error);
      },
    }),
  );
};
