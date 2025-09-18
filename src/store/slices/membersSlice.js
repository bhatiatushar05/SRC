import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [],
  loading: false,
  error: null,
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMembers: (state, action) => {
      state.members = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
    removeMember: (state, action) => {
      state.members = state.members.filter(member => member.id !== action.payload);
    },
  },
});

export const {
  setLoading,
  setMembers,
  setError,
  addMember,
  removeMember,
} = membersSlice.actions;

export const selectMembers = (state) => state.members.members;
export const selectMembersLoading = (state) => state.members.loading;
export const selectMembersError = (state) => state.members.error;

export default membersSlice.reducer;

