import { createSlice } from "@reduxjs/toolkit";

const shareSlice = createSlice({
  name: "share",
  initialState: {
    notification: [],
    errors: null,
    mobileMenu: false,
    language: "en",
    user: {},
  },
  reducers: {
    updateNotification: (state, action) => {
      state.notification.push({
        id: Date.now(),
        variant: action.payload.variant,
        message: action.payload.message,
      });
      return state;
    },
    removeNotification: (state, action) => {
      state.notification = state.notification.filter(
        (notification) => notification.id !== action.payload
      );
    },
    updateError: (state, action) => {
      state.errors = { ...action.payload };
      return state;
    },
    mobileMenuOpen: (state) => {
      state.mobileMenu = true;
      return state;
    },
    mobileMenuClose: (state) => {
      state.mobileMenu = false;
      return state;
    },
    mobileMenuToggle: (state) => {
      state.mobileMenu = !state.mobileMenu;
      return state;
    },
    languageToggle: (state) => {
      state.language = state.language === "en" ? "mm" : "en";
    },
  },
});

export const {
  updateNotification,
  removeNotification,
  updateError,
  mobileMenuOpen,
  mobileMenuToggle,
  languageToggle,
} = shareSlice.actions;
export default shareSlice.reducer;
