import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatMiniFabButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from "@angular/material/sidenav";
import { HeaderComponent, SidebarComponent } from "@core/features";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatMiniFabButton,
    MatIcon,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly isSidenavOpened = signal(false);

  public toggleSidenav(): void {
    this.isSidenavOpened.set(!this.isSidenavOpened());
  }
}
