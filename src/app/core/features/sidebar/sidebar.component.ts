import { ChangeDetectionStrategy, Component, output } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatAnchor, MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { APP_ROUTES, OPERATIONS_BOARD_PERMISSIONS } from "@shared/constants";

interface MenuLink {
  readonly route: APP_ROUTES;
  readonly label: string;
  readonly icon: string;
  readonly permissions?: string[];
  // readonly permissionsCheckMode?: PermissionsCheckMode;
}

// enum PermissionsCheckMode {
//   REQUIRED_ALL,
//   REQUIRED_ONE_OF,
// }

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [
    MatButton,
    MatIconButton,
    MatIcon,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public readonly APP_ROUTES = APP_ROUTES;
  public readonly close = output<void>();
  public readonly menuLinks = this.defineMenuLinks();

  private defineMenuLinks(): MenuLink[] {
    const menuLinks: MenuLink[] = [
      {
        route: this.APP_ROUTES.DASHBOARD,
        label: "Dashboard",
        icon: "dashboard",
      },
      {
        route: this.APP_ROUTES.OPERATIONS_BOARD,
        label: "Operations Board",
        icon: "bar_chart",
        permissions: [OPERATIONS_BOARD_PERMISSIONS.READ],
      },
    ];

    return menuLinks.filter(this.isMenuLinkAllowed);
  }

  private isMenuLinkAllowed(): boolean {
    return true;
  }
}
