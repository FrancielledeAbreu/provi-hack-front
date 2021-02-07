import { combineReducers } from "redux";
import validLogin from "./login";
import challengeReducer from "./challenges";

export default combineReducers({ validLogin, challengeReducer });
