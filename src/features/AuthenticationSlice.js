import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticationState = {
  isAuthenticated: null,
};

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthenticationState,
  reducers: {
    logging: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { logging } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
