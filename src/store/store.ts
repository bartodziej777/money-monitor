import { configureStore } from "@reduxjs/toolkit";
import themesReducer from "./slices/themesSlice";

export const store = configureStore({
  reducer: {
    themes: themesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
