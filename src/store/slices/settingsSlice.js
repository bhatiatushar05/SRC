import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  language: 'en',
  notifications: true,
  cookieConsent: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setCookieConsent: (state, action) => {
      state.cookieConsent = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const {
  setTheme,
  setLanguage,
  setNotifications,
  setCookieConsent,
  toggleTheme,
} = settingsSlice.actions;

export const selectTheme = (state) => state.settings.theme;
export const selectLanguage = (state) => state.settings.language;
export const selectNotifications = (state) => state.settings.notifications;
export const selectCookieConsent = (state) => state.settings.cookieConsent;

export default settingsSlice.reducer;

