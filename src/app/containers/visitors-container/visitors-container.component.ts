import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import * as fromVisitors from "../../store";
import { distinctUntilChanged } from "rxjs/operators";
import * as _ from "lodash";

@Component({
  selector: "app-visitors-container",
  templateUrl: "./visitors-container.template.html"
})
export class AppVisitorsContainerComponent implements OnInit {
  visitors$: Observable<fromVisitors.Visitor[]>;
  constructor(private store: Store<fromVisitors.State>) {}

  ngOnInit() {
    this.visitors$ = this.store.pipe(
      select(fromVisitors.getAllVisitors),
      distinctUntilChanged((prev, next) => _.isEqual(prev, next))
    );
  }

  onRemoveVisitor(id: number) {
    this.store.dispatch(fromVisitors.RemoveVisitors({ payload: { id } }));
  }

  onUpdateVisitor(visitor: fromVisitors.Visitor) {
    this.store.dispatch(fromVisitors.UpdateVisitors({ payload: visitor }));
  }
}
