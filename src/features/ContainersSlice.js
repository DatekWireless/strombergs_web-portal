import { createSlice } from "@reduxjs/toolkit";

const initialContainersState = {
  containers: [],
};

export const ContainersSlice = createSlice({
  name: "containers",
  initialState: initialContainersState,
  reducers: {
    updateContainer: (state, action) => {
      state.containers = action.payload;
    },
    
  },
});

export const { updateContainer } = ContainersSlice.actions;

export default ContainersSlice.reducer;
