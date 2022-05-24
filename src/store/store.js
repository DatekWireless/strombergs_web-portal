import { configureStore } from "@reduxjs/toolkit";
import AdminsSlice from "../features/AdminsSlice";
import UnitsSlice from "../features/UnitsSlice";
import AuthenticationSlice from "../features/AuthenticationSlice";

export const store = configureStore({
  reducer: {
    adminsReducer: AdminsSlice,
    unitsReducer: UnitsSlice,
    authenticationReducer: AuthenticationSlice,
  },
});
