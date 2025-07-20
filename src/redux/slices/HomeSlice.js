import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  starting_point: null,
  ending_point: null,
  selected_date: new Date().toDateString(),
  userType: "local",
  gender: "man",
  searchResults: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setStartingPoint: (state, action) => {
      state.starting_point = action.payload;
    },
    setEndingPoint: (state, action) => {
      state.ending_point = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selected_date = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    swapRoute: (state) => {
      const temp = state.starting_point;
      state.starting_point = state.ending_point;
      state.ending_point = temp;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const {
  setStartingPoint,
  setEndingPoint,
  setSelectedDate,
  setUserType,
  setGender,
  swapRoute,
  setSearchResults,
} = homeSlice.actions;

export default homeSlice.reducer;
