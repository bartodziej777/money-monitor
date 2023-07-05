import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StateType {
  email: string | null;
  uid: string | null;
  displayName: string | null;
  photoURL: string | null;
}

const initialState = <StateType>{
  email: null,
  uid: null,
  displayName: null,
  photoURL: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (_, action: PayloadAction<StateType>) => action.payload,
    logout: () => initialState,
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
