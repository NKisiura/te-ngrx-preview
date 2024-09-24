import { Routes } from "@angular/router";
import { APP_ROUTES, OPERATIONS_BOARD_PERMISSIONS } from "@shared/constants";
import { PermissionsCheckMode } from "@shared/types/general";
import { permissionGuard } from "@shared/guards";
import { routeDataBuilder } from "@shared/lib/route-data-builder";

export const routes: Routes = [
  {
    path: APP_ROUTES.DASHBOARD,
    loadComponent: () =>
      import("@pages/dashboard/dashboard.component").then(
        (m) => m.DashboardComponent,
      ),
    title: "Dashboard",
  },
  {
    path: APP_ROUTES.OPERATIONS_BOARD,
    loadComponent: () =>
      import("@pages/operations-board/operations-board.component").then(
        (m) => m.OperationsBoardComponent,
      ),
    title: "Operations Board",
    canActivate: [permissionGuard],
    data: routeDataBuilder({
      permissions: [OPERATIONS_BOARD_PERMISSIONS.READ],
      permissionsCheckMode: PermissionsCheckMode.REQUIRED_ALL,
    }),
  },
  {
    path: "",
    redirectTo: APP_ROUTES.DASHBOARD,
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: APP_ROUTES.DASHBOARD,
  },
];
