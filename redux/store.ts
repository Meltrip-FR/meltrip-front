import { configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

//Configure Persist
const persistConfig = {
  key: process.env.NEXT_PUBLIC_API_URL + "-root",
  storage,
  // blacklist: ["user"], //blacklisting a store attribute name, will not persist that store attribute.
  throttle: 500,
  version: 1
}

//Add persist for all reducers
const persistedReducer = persistReducer(persistConfig, rootReducer)

//Configure Store
const store = configureStore({
  //Init Reducer in store
  reducer: persistedReducer,
  //Configure by Default Middleware
  middleware: [thunk]
  // .concat(logger),
})

export default store
export const persistor = persistStore(store)
