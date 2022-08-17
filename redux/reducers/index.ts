import storage from "redux-persist/lib/storage";
import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/auth.slice";

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "/") {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem("persist:root");
    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
