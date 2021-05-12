import { AnyAction } from "redux";
import { SET_SEARCH_INPUT_VALUE } from "../actions/appActions";
//npm install --save react-redux @types/react-redux

export interface AppState {
  searchInputValue: string;
}

const initialState = {
  searchInputValue: "",
}


export const appReducer = (state: AppState = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SEARCH_INPUT_VALUE:
      return {...state, searchInputValue: action.payload};
    default:
      return state;
  }
};
