import { configureStore } from "@reduxjs/toolkit";
import AdminsSlice from "../features/AdminsSlice";
import UnitsSlice from "../features/UnitSlice";

export const store = configureStore({
  reducer: {
    adminsReducer: AdminsSlice,
    unitsReducer: UnitsSlice,
  },
});
