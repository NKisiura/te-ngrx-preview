import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatButton, MatToolbar],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
