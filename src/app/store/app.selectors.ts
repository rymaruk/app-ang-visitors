import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";
import * as fromVisitors from "./app.reducer";
import { Visitor } from "./app.models";

const VisitorsFeatureState: MemoizedSelector<
  object,
  fromVisitors.AppVisitorsState
> = createFeatureSelector<fromVisitors.AppVisitorsState>("visitors");

export const getAllVisitors: MemoizedSelector<
  object,
  Visitor[]
> = createSelector(
  VisitorsFeatureState,
  state => state.visitors
);

export const getError: MemoizedSelector<object, string> = createSelector(
  VisitorsFeatureState,
  state => state.error
);
