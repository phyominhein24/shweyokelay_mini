import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kbzpayToken: null,
};

const kbzInfoSlice = createSlice({
  name: "kbzInfo",
  initialState,
  reducers: {
    setKbzpayToken: (state, action) => {
      state.kbzpayToken = action.payload;
    },
  },
});

export const { setKbzpayToken } = kbzInfoSlice.actions;

export default kbzInfoSlice.reducer;
