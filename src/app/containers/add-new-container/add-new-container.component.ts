import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Validators, FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import * as fromVisitors from "../../store";

@Component({
  selector: "app-add-new-container",
  templateUrl: "./add-new-container.template.html"
})
export class AppAddNewContainerComponent implements OnInit {
  @ViewChild("tmplDialog", { static: false }) tmplDialog: TemplateRef<any>;

  newVisitorForm = this.fb.group({
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

  ngOnInit() {}

  onAddNewVisitor() {
    this.temporyDialog = this.dialog.open(this.tmplDialog, {
      width: "90vw",
      maxWidth: "320px",
      data: {}
    });
  }

  onSubmit() {
    if (!this.newVisitorForm.valid) {
      this.snackBar.open(`Form is invalid!`, "OK", {
        duration: 1000
      });
      return;
    }

    const { name, email } = this.newVisitorForm.value;
    this.store.dispatch(
      fromVisitors.AddNewVisitor({
        payload: {
          name,
          email,
          id: Date.now()
        }
      })
    );

    this.snackBar.open(`✅ New visitor added!`, "OK", {
      duration: 1000
    });
    this.newVisitorForm.reset();
    this.temporyDialog.close();
  }
}
