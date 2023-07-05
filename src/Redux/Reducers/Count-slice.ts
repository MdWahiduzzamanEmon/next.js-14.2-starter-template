import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type INITIAL_STATE = {
  count: number;
};

const initialState = {
  count: 0,
} as INITIAL_STATE;

export const countSlice = createSlice({
  name: "count",
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<any>) => {
      state.count = state.count + action.payload.amount;
    },
    decrement: (state, action: PayloadAction<any>) => {
      state.count = state.count - action.payload.amount;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;
