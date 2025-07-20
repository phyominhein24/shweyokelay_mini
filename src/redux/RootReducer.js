import bookingInformationSlice from "./slices/BookingInfromationSlice";
import { combineReducers } from "@reduxjs/toolkit";
import countdownSlice from "./slices/countdownSlice";
import homeSlice from "./slices/HomeSlice";
import kbzInfoSlice from "./slices/KbzInfoSlice";
import shareSlice from "./ShareSlice";

export const rootReducer = combineReducers({
  share: shareSlice,
  bookingInformation: bookingInformationSlice,
  home: homeSlice,
  countdown: countdownSlice,
  kbzpayInfo: kbzInfoSlice,
});
