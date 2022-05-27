import {ActionTypes} from "../constants/action-types";

export const loginUserAction = (payload) => {
  return {
    type: ActionTypes.LOGIN_USER,
    payload: payload
  };
};
