import { Routes } from "@angular/router";
import { APP_ROUTES } from "@shared/constants";

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
