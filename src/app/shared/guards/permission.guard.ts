import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { PermissionValidatorService } from "@shared/lib/permission-validator";
import { PermissionsCheckMode } from "@shared/types/general";
import { RouteData } from "@shared/types/route";

export const permissionGuard: CanActivateFn = (route) => {
  const permissionValidator = inject(PermissionValidatorService);

  const { permissions, permissionsCheckMode } = route.data as RouteData;

  if (!permissions?.length) {
    return true;
  }

  return permissionValidator.hasPermission(
    permissions,
    permissionsCheckMode || PermissionsCheckMode.REQUIRED_ALL,
  );
};
