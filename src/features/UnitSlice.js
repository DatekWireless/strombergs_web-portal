import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  units: [],
};

export const AdminsSlice = createSlice({
  name: "units",
  initialState: initialState,
  reducers: {
    addUnit: (state, action) => {
      state.units = [...state.units, action.payload];
    },
    deleteUnit: (state, action) => {
      state.admins.splice(action.payload);
    },
  },
});

export const { addAdmin, deleteAdmin } = AdminsSlice.actions;

export default AdminsSlice.reducer;
