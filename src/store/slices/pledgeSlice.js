import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pledges: [],
  currentPledge: null,
  loading: false,
  error: null,
};

const pledgeSlice = createSlice({
  name: 'pledge',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPledges: (state, action) => {
      state.pledges = action.payload;
    },
    setCurrentPledge: (state, action) => {
      state.currentPledge = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addPledge: (state, action) => {
      state.pledges.push(action.payload);
    },
    updatePledge: (state, action) => {
      const index = state.pledges.findIndex(pledge => pledge.id === action.payload.id);
      if (index !== -1) {
        state.pledges[index] = action.payload;
      }
    },
    removePledge: (state, action) => {
      state.pledges = state.pledges.filter(pledge => pledge.id !== action.payload);
    },
  },
});

export const {
  setLoading,
  setPledges,
  setCurrentPledge,
  setError,
  addPledge,
  updatePledge,
  removePledge,
} = pledgeSlice.actions;

export const selectPledges = (state) => state.pledge.pledges;
export const selectCurrentPledge = (state) => state.pledge.currentPledge;
export const selectPledgeLoading = (state) => state.pledge.loading;
export const selectPledgeError = (state) => state.pledge.error;

export default pledgeSlice.reducer;

