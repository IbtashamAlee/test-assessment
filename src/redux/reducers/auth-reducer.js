import {ActionTypes} from "../constants/action-types";

export const setLoggedInUser = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
