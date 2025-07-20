import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: "",
  bookerName: "",
  phone: "",
  nrcRegion: "",
  nrcTownship: "",
  nrcCitizen: "",
  nrcNumber: "",
  nrc: "",
  specialRequest: "",
  selectedSeat: [],
  bookedSeats: [],
  seatsToShow: null,
  selectedRoute: null,
};

// const bookingInformationSlice = createSlice({
//   name: "bookingInformation",
//   initialState,
//   reducers: {
//     updateBookingInformation: (state, action) => {
//       Object.assign(state, action.payload); // Dynamic updates
//     },
//     setSelectedRoute: (state, action) => {
//       state.selectedRoute = action.payload;
//     },
//   },
// });

const bookingInformationSlice = createSlice({
  name: "bookingInformation",
  initialState,
  reducers: {
    updateBookingInformation: (state, action) => {
      // Explicitly update only the properties present in the payload
      if (action.payload.selectedDate !== undefined)
        state.selectedDate = action.payload.selectedDate;
      if (action.payload.bookerName !== undefined)
        state.bookerName = action.payload.bookerName;
      if (action.payload.phone !== undefined)
        state.phone = action.payload.phone;
      if (action.payload.nrcRegion !== undefined)
        state.nrcRegion = action.payload.nrcRegion;
      if (action.payload.nrcTownship !== undefined)
        state.nrcTownship = action.payload.nrcTownship;
      if (action.payload.nrcCitizen !== undefined)
        state.nrcCitizen = action.payload.nrcCitizen;
      if (action.payload.nrcNumber !== undefined)
        state.nrcNumber = action.payload.nrcNumber;
      if (action.payload.nrc !== undefined) state.nrc = action.payload.nrc;
      if (action.payload.specialRequest !== undefined)
        state.specialRequest = action.payload.specialRequest;
      if (action.payload.selectedSeat !== undefined)
        state.selectedSeat = action.payload.selectedSeat;
      if (action.payload.selectedRoute !== undefined)
        state.selectedRoute = action.payload.selectedRoute;
      if (action.payload.bookedSeats !== undefined)
        state.bookedSeats = action.payload.bookedSeats;
    },
    setSelectedRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
  },
});

export const { updateBookingInformation, setSelectedRoute } =
  bookingInformationSlice.actions;
export default bookingInformationSlice.reducer;