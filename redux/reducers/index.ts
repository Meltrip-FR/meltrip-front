import { AnyAction, combineReducers, Reducer } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import authReducer from "../slices/auth.slice"
import devicesReducer from "../slices/device.slice"

const appReducer = combineReducers({
  auth: authReducer,
  device: devicesReducer
})

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "/") {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem("persist:root")
    state = {} as RootState
  }
  return appReducer(state, action)
}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
