// Home Page Index - Centralized exports
// Main entry point for home page functionality

// Components
export { default as MasterSlider } from './components/MasterSlider.jsx'
export { default as CounterSection } from './components/CounterSection.jsx'
export { default as LetterSlider } from './components/LetterSlider.jsx'

// Services
export { HomeService } from './services/homeService.js'

// Hooks
export { useHomeData } from './hooks/useHomeData.js'
export { useBannerSlider } from './hooks/useBannerSlider.js'
export { useRpc } from './hooks/useRpc.js'

// Store
export {
  setHomeData,
  setLoading,
  setError,
  setCurrentSlide,
  setCounters,
  updateCounter,
  updateBanner,
  addMasterListItem,
  updateMasterListItem,
  selectHomeData,
  selectHomeLoading,
  selectHomeError,
  selectCurrentSlide,
  selectCounters,
  selectBanners,
  selectMasterList,
  selectMasterData
} from './store/homeSlice.js'

// Data
export {
  mockHomeData,
  mockBanners,
  mockMasterList,
  mockMasterData,
  mockLetters,
  mockCounters
} from './data/mockHomeData.js'

// Types
export {
  BannerType,
  MasterListItemType,
  LetterType,
  CounterType,
  HomeDataType,
  HomeStateType
} from './types/homeTypes.js'

// RPC Functions (ready for your implementation)
export {
  HomeRpcFunctions,
  getHomeAnalytics,
  getHomeStats,
  getAggregatedHomeData,
  getLiveCounters,
  getUserEngagement
} from './services/rpc/index.js'
