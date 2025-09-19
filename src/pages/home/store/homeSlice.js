// Redux slice for home page state management
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  homeData: {
    banner: [],
    upcoming_activity: [],
    twitter_data: [],
    master_data: {},
    master_list: []
  },
  loading: false,
  error: null,
  currentSlide: 0,
  counters: {
    internship: 0,
    volunteer: 0,
    pledge: 0
  }
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHomeData: (state, action) => {
      state.homeData = action.payload
      state.loading = false
      state.error = null
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    setCurrentSlide: (state, action) => {
      state.currentSlide = action.payload
    },
    setCounters: (state, action) => {
      state.counters = action.payload
    },
    updateCounter: (state, action) => {
      const { type, value } = action.payload
      state.counters[type] = value
    },
    // Real-time update actions
    updateBanner: (state, action) => {
      const { id, updates } = action.payload
      const bannerIndex = state.homeData.banner.findIndex(banner => banner.id === id)
      if (bannerIndex !== -1) {
        state.homeData.banner[bannerIndex] = { ...state.homeData.banner[bannerIndex], ...updates }
      }
    },
    addMasterListItem: (state, action) => {
      state.homeData.master_list.push(action.payload)
    },
    updateMasterListItem: (state, action) => {
      const { index, updates } = action.payload
      if (state.homeData.master_list[index]) {
        state.homeData.master_list[index] = { ...state.homeData.master_list[index], ...updates }
      }
    }
  }
})

export const {
  setHomeData,
  setLoading,
  setError,
  setCurrentSlide,
  setCounters,
  updateCounter,
  updateBanner,
  addMasterListItem,
  updateMasterListItem
} = homeSlice.actions

// Selectors
export const selectHomeData = (state) => state.home.homeData
export const selectHomeLoading = (state) => state.home.loading
export const selectHomeError = (state) => state.home.error
export const selectCurrentSlide = (state) => state.home.currentSlide
export const selectCounters = (state) => state.home.counters
export const selectBanners = (state) => state.home.homeData.banner
export const selectMasterList = (state) => state.home.homeData.master_list
export const selectMasterData = (state) => state.home.homeData.master_data

export default homeSlice.reducer
