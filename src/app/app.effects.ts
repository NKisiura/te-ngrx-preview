import { inject } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mapResponse } from "@ngrx/operators";
import { exhaustMap, forkJoin } from "rxjs";
import { CoreApiService } from "@core/api";
import { WindowConstantsService } from "@core/services";
import { AppInitActions } from "./app.state";

export const loadAppCoreData = createEffect(
  (
    actions$ = inject(Actions),
    windowConstantsService = inject(WindowConstantsService),
    coreApiService = inject(CoreApiService),
  ) => {
    return actions$.pipe(
      ofType(AppInitActions.appCoreDataRequested),
      exhaustMap(() => {
        return forkJoin({
          constants: windowConstantsService.getWindowConstants(),
          permissions: coreApiService.getPermissions(),
          sessionUser: coreApiService.getSessionUser(),
          sessionOrganization: coreApiService.getSessionOrganization(),
        }).pipe(
          mapResponse({
            next: ({
              constants,
              permissions,
              sessionUser,
              sessionOrganization,
            }) => {
              return AppInitActions.appCoreDataSucceeded({
                constants,
                permissions,
                sessionUser,
                sessionOrganization,
              });
            },
            error: ({ error }: HttpErrorResponse) => {
              return AppInitActions.appCoreDataFailed(error);
            },
          }),
        );
      }),
    );
  },
  { functional: true },
);
