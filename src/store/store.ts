import { configureStore } from "@reduxjs/toolkit";
import themesReducer from "./slices/themesSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    themes: themesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
