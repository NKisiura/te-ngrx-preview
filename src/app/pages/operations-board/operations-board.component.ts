import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-operations-board",
  standalone: true,
  imports: [],
  templateUrl: "./operations-board.component.html",
  styleUrl: "./operations-board.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperationsBoardComponent {}
