import { createSlice } from "@reduxjs/toolkit";
import { ADMINS } from "../components/const";

const initialAdminsState = {
  admins: [],
};

export const AdminsSlice = createSlice({
  name: "admins",
  initialState: initialAdminsState,
  reducers: {
    addAdmin: (state, action) => {
      state.admins.push(action.payload);
    },
    deleteAdmin: (state, action) => {
      state.admins = state.admins.filter(
        (admin, index) => index !== action.payload
      );
    },
  },
});

export const { addAdmin, deleteAdmin, fetchAdmins } = AdminsSlice.actions;

export default AdminsSlice.reducer;
