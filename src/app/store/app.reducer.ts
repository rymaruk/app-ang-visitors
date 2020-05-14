import { createReducer, on } from "@ngrx/store";
import * as _ from "lodash";
import { Visitor } from "./app.models";
import * as visitorsActions from "./app.actions";

export interface AppVisitorsState {
  visitors: Visitor[];
  error: string | null;
}

export const initialState: AppVisitorsState = {
  visitors: [],
  error: null
};

const reducer = createReducer(
  initialState,
  on(visitorsActions.AddNewVisitor, (state, { payload }) => {
    let currentVisitors = [...state.visitors];

    // (!) Let's check if there aren't users with the same ID
    const isVisitor = _.some(currentVisitors, ["id", payload.id]);

    if (!isVisitor) {
      // Add new visitor
      currentVisitors.push(payload);

      // Update store
      return {
        ...state,
        visitors: currentVisitors,
        error: null
      };
    }

    return {
      ...state,
      error: "We have visitor with the same ID already!"
    };
  }),

  on(visitorsActions.RemoveVisitors, (state, { payload }) => {
    return {
      ...state,
      visitors: _.filter(
        [...state.visitors],
        (visitor: Visitor) => visitor.id !== payload.id
      )
    };
  }),

  on(visitorsActions.UpdateVisitors, (state, { payload }) => {
    return {
      ...state,
      visitors: _.map([...state.visitors], (visitor: Visitor) => {
        if (visitor.id === payload.id) {
          visitor = payload;
        }

        return visitor;
      })
    };
  })
);

export function AppVisitorsReducers(
  state: AppVisitorsState,
  action: visitorsActions.AppVisitorsActions
) {
  return reducer(state, action);
}
