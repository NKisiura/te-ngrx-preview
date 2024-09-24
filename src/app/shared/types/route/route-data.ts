import { Permission, PermissionsCheckMode } from "@shared/types/general";

export interface RouteData {
  readonly permissions?: Permission[];
  readonly permissionsCheckMode?: PermissionsCheckMode;
}
