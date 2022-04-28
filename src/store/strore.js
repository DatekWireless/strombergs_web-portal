import { configureStore } from "@reduxjs/toolkit";
import AdminsSlice from "../features/AdminsSlice";

export const store = configureStore({
  reducer: {
    adminsReducer: AdminsSlice,
  },
});
