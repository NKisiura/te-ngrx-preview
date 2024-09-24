import {
  createActionGroup,
  createFeature,
  createReducer,
  emptyProps,
  on,
  props,
} from "@ngrx/store";

import { AppCoreData } from "@core/types";
import { BackendErrorResponse } from "@shared/types/http";
import { AppConstants, Permission } from "@shared/types/general";
import { User } from "@entities/user/model";
import { Organization } from "@entities/organization/model";

export const AppInitActions = createActionGroup({
  source: "App Init",
  events: {
    "App Core Data Requested": emptyProps(),
    "App Core Data Succeeded": props<AppCoreData>(),
    "App Core Data Failed": props<BackendErrorResponse>(),
  },
});

interface AppState {
  readonly constants: AppConstants | null;
  readonly permissions: Permission[] | null;
  readonly sessionUser: User | null;
  readonly sessionOrganization: Organization | null;
  readonly appCoreDataLoaded: boolean;
}

const initialState: AppState = {
  constants: null,
  permissions: null,
  sessionUser: null,
  sessionOrganization: null,
  appCoreDataLoaded: false,
};

export const appFeature = createFeature({
  name: "app",
  reducer: createReducer(
    initialState,
    on(
      AppInitActions.appCoreDataSucceeded,
      (
        state,
        { constants, permissions, sessionUser, sessionOrganization },
      ): AppState => ({
        ...state,
        constants,
        permissions,
        sessionUser,
        sessionOrganization,
        appCoreDataLoaded: true,
      }),
    ),
  ),
});

export const {
  selectConstants,
  selectPermissions,
  selectSessionUser,
  selectSessionOrganization,
  selectAppCoreDataLoaded,
} = appFeature;
