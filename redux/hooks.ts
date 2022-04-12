import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`

//UseDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//UseSelector
export type AppState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
