import {
  Component,
  OnInit,
  ViewChild,
  Input,
  TemplateRef
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Validators, FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import * as fromVisitors from "../../store";


@Component({
  selector: "app-udpate-container",
  templateUrl: "./update-container.template.html",
  styleUrls: ["./update-container.styles.scss"],
})
export class AppUpdateContainerComponent implements OnInit {
  @ViewChild("tmplDialog", { static: false }) tmplDialog: TemplateRef<any>;
  @Input() visitor: fromVisitors.Visitor;

  udpateVisitorForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required]
  });

  temporyDialog: any;

  constructor(
    public store: Store<fromVisitors.State>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.udpateVisitorForm.controls["name"].setValue(this.visitor.name);
    this.udpateVisitorForm.controls["email"].setValue(this.visitor.email);
  }

  onUpdateVisitor() {
    this.temporyDialog = this.dialog.open(this.tmplDialog, {
      width: "90vw",
      maxWidth: "320px",
      data: {}
    });
  }

  onSubmit() {
    if (!this.udpateVisitorForm.valid) {
      this.snackBar.open(`Form is invalid!`, "OK", {
        duration: 1000
      });
      return;
    }

    const { name, email } = this.udpateVisitorForm.value;
    const { id } = this.visitor;
    this.store.dispatch(
      fromVisitors.UpdateVisitors({
        payload: {
          name,
          email,
          id
        }
      })
    );

    this.snackBar.open(`✅ Visitor was udpated!`, "OK", {
      duration: 1000
    });
    this.udpateVisitorForm.reset();
    this.temporyDialog.close();
  }
}
