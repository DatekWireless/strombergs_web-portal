import { createSlice } from "@reduxjs/toolkit";

const initialUnitsState = {
  units: [],
};

export const UnitsSlice = createSlice({
  name: "units",
  initialState: initialUnitsState,
  reducers: {
    updateUnit: (state, action) => {
      state.units = action.payload;
    },
    addUnit: (state, action) => {
      state.units = [...state.units, action.payload];
    },
  },
});

export const { addUnit, updateUnit } = UnitsSlice.actions;

export default UnitsSlice.reducer;
