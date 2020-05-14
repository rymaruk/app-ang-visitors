import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatListModule } from "@angular/material/list";

import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { AppVisitorsReducers } from "./store/app.reducer";

import { AppAddNewContainerComponent } from "./containers/add-new-container/add-new-container.component";
import { AppVisitorsContainerComponent } from "./containers/visitors-container/visitors-container.component";
import { AppUpdateContainerComponent } from "./containers/update-container/update-container.component";
import { AppVisitorsComponent } from "./components/visitors-component/visitors.components";

@NgModule({
  declarations: [
    AppComponent,
    AppVisitorsComponent,
    AppVisitorsContainerComponent,
    AppAddNewContainerComponent,
    AppUpdateContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,

    StoreModule.forRoot({ visitors: AppVisitorsReducers })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
