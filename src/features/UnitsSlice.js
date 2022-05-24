import { createSlice } from "@reduxjs/toolkit";

const initialUnitsState = {
  units: [],
};

export const UnitsSlice = createSlice({
  name: "units",
  initialState: initialUnitsState,
  reducers: {
    addUnit: (state, action) => {
      state.units = [...state.units, action.payload];
    },
  },
});

export const { addUnit } = UnitsSlice.actions;

export default UnitsSlice.reducer;
