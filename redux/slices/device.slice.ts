import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  mode: "",
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    type: (state, action) => {
      const load = action.payload;
      state.mode = load.mode;
    },
  },
});

const { actions, reducer } = deviceSlice;
export const { type } = actions;
export default reducer;
