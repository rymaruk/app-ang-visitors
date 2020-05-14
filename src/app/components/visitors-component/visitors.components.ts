import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";
import { Visitor } from "../../store";

@Component({
  selector: "app-visitors",
  templateUrl: "./visitors.template.html",
  styleUrls: ["./visitors.styles.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppVisitorsComponent {
  @Input() visitors: Visitor[];
  @Output() remove = new EventEmitter<number>();

  onRemoveVisitor(id: number) {
    this.remove.next(id);
  }
}
