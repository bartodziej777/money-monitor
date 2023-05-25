import { createSlice } from "@reduxjs/toolkit";

interface ThemesState {
  mode: "light" | "dark";
}

const initialState: ThemesState = { mode: "light" };

export const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.mode === "light") state.mode = "dark";
      else state.mode = "light";
    },
  },
});

export const { changeTheme } = themesSlice.actions;
export default themesSlice.reducer;
