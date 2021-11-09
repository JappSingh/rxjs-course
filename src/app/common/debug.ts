import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export enum RxJsLoggingLevel {
  TRACE,
  DEBUG,
  INFO,
  ERROR,
}

let rxjsLoggingLevel = RxJsLoggingLevel.INFO;

export function setRxJsLoggingLevel(level: RxJsLoggingLevel) {
  rxjsLoggingLevel = level;
}

// Custom oeprator:
// Higher-order fn that takes in 2 args and rets another fn
// that takes in source Obs as input and outputs another Obs (O/P of debug operator)
export const debug =
  (level: number, message: string) => (source: Observable<any>) =>
    source.pipe(
      tap((val) => {
        if (level >= rxjsLoggingLevel) {
          console.log(message + ": ", val);
        }
      })
    );
