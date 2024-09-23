import { HttpInterceptorFn } from "@angular/common/http";
import { random } from "lodash-es";
import { delay } from "rxjs";

/**
 * A temporary HttpInterceptor that delays http request in order to simulate production behaviour.
 */
export const delayInterceptor: HttpInterceptorFn = (req, next) => {
  const randomDelay = random(200, 1000);
  return next(req).pipe(delay(randomDelay));
};
