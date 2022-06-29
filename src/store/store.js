import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import AdminsSlice from "../features/AdminsSlice";
import UnitsSlice from "../features/UnitsSlice";
import AuthenticationSlice from "../features/AuthenticationSlice";
import { Api } from "../features/api/ApiSlice";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    adminsReducer: AdminsSlice,
    unitsReducer: UnitsSlice,
    authenticationReducer: AuthenticationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
