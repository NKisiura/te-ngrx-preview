import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AppConstants } from "@shared/types/general";
import { EldType } from "@shared/types/eld";

interface WindowConstants {
  readonly APP_MAIN_LINK: string;
  readonly ELD_SERVER_TYPE: EldType;
}

@Injectable({
  providedIn: "root",
})
export class WindowConstantsService {
  public getWindowConstants(): Observable<AppConstants> {
    const { APP_MAIN_LINK, ELD_SERVER_TYPE } = window as Window &
      typeof globalThis &
      WindowConstants;

    return of({
      APP_MAIN_LINK,
      ELD_TYPE: ELD_SERVER_TYPE,
    });
  }
}
