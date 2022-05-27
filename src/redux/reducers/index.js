import {combineReducers} from "redux";
import {setLoggedInUser} from "./auth-reducer";

const reducers = combineReducers({
  user: setLoggedInUser
});

export default reducers;
