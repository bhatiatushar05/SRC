import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ventures: [],
  currentVenture: null,
  loading: false,
  error: null,
};

const venturesSlice = createSlice({
  name: 'ventures',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setVentures: (state, action) => {
      state.ventures = action.payload;
    },
    setCurrentVenture: (state, action) => {
      state.currentVenture = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addVenture: (state, action) => {
      state.ventures.push(action.payload);
    },
    updateVenture: (state, action) => {
      const index = state.ventures.findIndex(venture => venture.id === action.payload.id);
      if (index !== -1) {
        state.ventures[index] = action.payload;
      }
    },
    removeVenture: (state, action) => {
      state.ventures = state.ventures.filter(venture => venture.id !== action.payload);
    },
  },
});

export const {
  setLoading,
  setVentures,
  setCurrentVenture,
  setError,
  addVenture,
  updateVenture,
  removeVenture,
} = venturesSlice.actions;

export const selectVentures = (state) => state.ventures.ventures;
export const selectCurrentVenture = (state) => state.ventures.currentVenture;
export const selectVenturesLoading = (state) => state.ventures.loading;
export const selectVenturesError = (state) => state.ventures.error;

export default venturesSlice.reducer;

