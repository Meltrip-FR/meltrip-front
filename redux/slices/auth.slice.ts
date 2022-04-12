//Redux && Persist
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

//types
import { AuthSlice } from "types/auth";

export const initialState: AuthSlice = {
  isLoggingIn: false,
  user: {
    uid: "",
    email: "",
    first: "",
    last: "",
    status: "",
    photoURL: "",
  },
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const load = action.payload;
      state.isLoggingIn = load.isLoggingIn;
      state.user.uid = load.user.uid;
      state.user.email = load.user.email;
      state.user.first = load.user.first;
      state.user.last = load.user.last;
      state.user.status = load.user.status;
      state.user.photoURL = load.user.photoURL;
    },
    logout: (state) => {
      state.isLoggingIn = false;
      storage.removeItem("persist:root");
      console.log("logout");
    },
  },
});

const { actions, reducer } = authSlice;
export const { login, logout } = actions;
export default reducer;
