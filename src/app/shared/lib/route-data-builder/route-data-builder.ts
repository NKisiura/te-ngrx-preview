import { Permission, PermissionsCheckMode } from "@shared/types/general";
import { RouteData } from "@shared/types/route";

export interface RouteDataBuilderConfig {
  readonly permissions?: Permission[];
  readonly permissionsCheckMode?: PermissionsCheckMode;
}

export const routeDataBuilder = ({
  permissions,
  permissionsCheckMode,
}: RouteDataBuilderConfig): RouteData => ({
  permissions,
  permissionsCheckMode,
});
