import { createSlice } from "@reduxjs/toolkit";

const countdownSlice = createSlice({
  name: "countdown",
  initialState: {
    timeLeft: 600, // 10 minutes in seconds
    isRunning: false,
  },
  reducers: {
    startCountdown: (state) => {
      state.isRunning = true;
    },
    decrementTime: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      } else {
        state.isRunning = false;
        alert("Time is up!");
      }
    },
    resetTimer: (state) => {
      state.timeLeft = 600;
      state.isRunning = false;
    },
  },
});

export const { startCountdown, decrementTime, resetTimer } =
  countdownSlice.actions;
export default countdownSlice.reducer;
