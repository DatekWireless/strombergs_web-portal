import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticationState = {
  isAuthenticated: null,
};

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthenticationState,
  reducers: {
    logOut: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { logOut } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
