import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

export const initialState = {
  isLoggingIn: false,
  user: {
    uid: "",
    email: "",
    first: "",
    last: "",
    photoURL: "",
  },
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, payload) => {
      const load = payload.payload;
      state.isLoggingIn = load.isLoggingIn;
      state.user.uid = load.user.uid;
      state.user.email = load.user.email;
      state.user.first = load.user.first;
      state.user.last = load.user.last;
    },
    logout: (state) => {
      state.isLoggingIn = false;
      storage.removeItem("persist:root");
      console.log("logout");
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: any) => state;
export default authSlice.reducer;
