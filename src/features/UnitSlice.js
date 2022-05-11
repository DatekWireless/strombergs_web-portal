import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  units: [],
};

export const UnitsSlice = createSlice({
  name: "units",
  initialState: initialState,
  reducers: {
    addUnit: (state, action) => {
      state.units = [...state.units, action.payload];
    },
  },
});

export const { addUnit } = UnitsSlice.actions;

export default UnitsSlice.reducer;
