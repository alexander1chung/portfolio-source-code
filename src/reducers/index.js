import { combineReducers } from "redux";

const initialState = {
  selected: [],
};

const mainstate = function (state = initialState, action) {
  switch (action.type) {
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({ mainstate });
