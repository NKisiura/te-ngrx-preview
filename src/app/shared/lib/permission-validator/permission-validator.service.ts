import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectPermissions } from "@app/app.state";
import { Permission, PermissionsCheckMode } from "@shared/types/general";

@Injectable({
  providedIn: "root",
})
export class PermissionValidatorService {
  private readonly store = inject(Store);
  private readonly userPermissions = this.store.selectSignal(selectPermissions);

  public hasPermission(
    permissions: Permission[],
    permissionsCheckMode: PermissionsCheckMode = PermissionsCheckMode.REQUIRED_ALL,
  ): boolean {
    if (!permissions.length) {
      return true;
    }

    switch (permissionsCheckMode) {
      case PermissionsCheckMode.REQUIRED_ALL: {
        return permissions.every((permission) =>
          this.userPermissions()!.includes(permission),
        );
      }
      case PermissionsCheckMode.REQUIRED_ONE_OF: {
        return permissions.some((permission) =>
          this.userPermissions()!.includes(permission),
        );
      }
    }
  }
}
