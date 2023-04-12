import { combineReducers } from "redux";

import authReducer from "./authReducer";
import appDataReducer from "./appDataReducer";

const reducersContainer = {
  authState: authReducer,
  appDataState: appDataReducer,
};

const reducers = combineReducers(reducersContainer);

export default reducers;
