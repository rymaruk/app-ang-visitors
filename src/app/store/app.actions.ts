import { props, createAction, union } from "@ngrx/store";
import { Visitor, IdVisitor } from "./app.models";

export enum AppActionTypes {
  GetAllVisitors = "[AppActions] Get all visitors",
  AddNewVisitor = "[AppActions] Add new visitors",
  UpdateVisitors = "[AppActions] Update visitor",
  RemoveVisitors = "[AppActions] Remove visitor"
}

export const GetAllVisitors = createAction(
  AppActionTypes.GetAllVisitors,
  props<{ payload: Visitor[] }>()
);
export const AddNewVisitor = createAction(
  AppActionTypes.AddNewVisitor,
  props<{ payload: Visitor }>()
);
export const UpdateVisitors = createAction(
  AppActionTypes.UpdateVisitors,
  props<{ payload: Visitor }>()
);
export const RemoveVisitors = createAction(
  AppActionTypes.RemoveVisitors,
  props<{ payload: IdVisitor }>()
);

const allActions = union({
  AddNewVisitor,
  UpdateVisitors,
  RemoveVisitors,
  GetAllVisitors
});
export type AppVisitorsActions = typeof allActions;
