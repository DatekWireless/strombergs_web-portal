import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admins: [],
};

export const AdminsSlice = createSlice({
  name: "admins",
  initialState: initialState,
  reducers: {
    addAdmin: (state, action) => {
      state.admins = [...state.admins, action.payload];
    },
    deleteAdmin: (state, action) => {
      state.admins = state.admins.filter(
        (admin, index) => index !== action.payload
      );
    },
  },
});

export const { addAdmin, deleteAdmin } = AdminsSlice.actions;

export default AdminsSlice.reducer;
