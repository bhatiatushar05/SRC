# Home Page Data Models & State Management

This folder contains the complete data models and real-time state management system for the home page.

## 📁 Folder Structure

```
src/pages/home/
├── components/              # Home-specific components
│   ├── MasterSlider.jsx    # Main slider component
│   ├── CounterSection.jsx  # Statistics counter component
│   └── LetterSlider.jsx    # Letter/document slider
├── services/               # Data services
│   ├── homeService.js      # Main home data service
│   └── rpc/                # RPC functions (ready for your implementation)
│       └── index.js        # RPC exports
├── hooks/                  # Custom React hooks
│   ├── useHomeData.js      # Home data management hook
│   ├── useBannerSlider.js  # Slider functionality hook
│   └── useRpc.js           # RPC hook (ready for your implementation)
├── store/                  # Redux state management
│   └── homeSlice.js        # Home page Redux slice
├── data/                   # Test data and mock data
│   └── mockHomeData.js     # Complete mock data
├── types/                  # Data type definitions
│   └── homeTypes.js        # TypeScript-like types
├── index.js                # Centralized exports
└── README.md               # This file
```

## 🚀 Quick Start

### 1. Import Home Page Components

```javascript
import { 
  MasterSlider, 
  CounterSection, 
  LetterSlider,
  useHomeData 
} from './pages/home'
```

### 2. Use in Your Home Component

```javascript
import { useHomeData } from './pages/home'

const Home = () => {
  const { homeData, loading, error, refreshData } = useHomeData()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <MasterSlider masterList={homeData.master_list} />
      <CounterSection />
      <LetterSlider title="Appreciation" path="appreciation" length={3} actual={3} />
    </div>
  )
}
```

## 🔧 Services

### HomeService
- `getHomeData()` - Get all home page data
- `getBanners()` - Get banner data
- `getMasterList()` - Get master list data
- `getMasterData()` - Get master data
- `updateBanner()` - Update banner (admin)
- `addMasterListItem()` - Add master list item (admin)

### RPC Functions (Ready for Your Implementation)
- `getHomeAnalytics()` - Analytics data
- `getHomeStats()` - Statistics data
- `getAggregatedHomeData()` - Aggregated data
- `getLiveCounters()` - Live counter updates
- `getUserEngagement()` - User engagement metrics

## 🎣 Custom Hooks

### useHomeData
```javascript
const { homeData, loading, error, refreshData } = useHomeData()
```

### useBannerSlider
```javascript
const { 
  currentSlide, 
  isAutoPlaying, 
  nextSlide, 
  prevSlide, 
  goToSlide, 
  toggleAutoPlay 
} = useBannerSlider(masterList)
```

### useRpc (Ready for Your Implementation)
```javascript
const { loading, error, callRpc } = useRpc()
```

## 🏪 Redux Store

### State Structure
```javascript
{
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
```

### Actions
- `setHomeData(data)` - Set home data
- `setLoading(boolean)` - Set loading state
- `setError(string)` - Set error state
- `setCurrentSlide(number)` - Set current slide
- `setCounters(object)` - Set counters
- `updateCounter({type, value})` - Update specific counter
- `updateBanner({id, updates})` - Update banner
- `addMasterListItem(item)` - Add master list item
- `updateMasterListItem({index, updates})` - Update master list item

### Selectors
- `selectHomeData(state)` - Get home data
- `selectHomeLoading(state)` - Get loading state
- `selectHomeError(state)` - Get error state
- `selectCurrentSlide(state)` - Get current slide
- `selectCounters(state)` - Get counters
- `selectBanners(state)` - Get banners
- `selectMasterList(state)` - Get master list
- `selectMasterData(state)` - Get master data

## 📊 Data Models

### Banner
```javascript
{
  id: number,
  title: string,
  image: string,
  creation_date: string,
  is_active: boolean,
  user: number
}
```

### Master List Item
```javascript
{
  image: string,
  title: string,
  description: string
}
```

### Counter
```javascript
{
  internship: number,
  volunteer: number,
  pledge: number
}
```

## 🔄 Real-time Updates

The system is ready for real-time updates:

1. **Redux Actions**: All update actions are available
2. **Supabase Integration**: Services ready for Supabase calls
3. **Real-time Subscriptions**: Hooks ready for real-time data
4. **Optimistic Updates**: State updates before API calls

## 🧪 Test Data

Complete mock data is available in `mockHomeData.js`:
- `mockBanners` - Banner test data
- `mockMasterList` - Master list test data
- `mockMasterData` - Master data test data
- `mockLetters` - Letter test data
- `mockCounters` - Counter test data
- `mockHomeData` - Complete home data

## 🔌 Integration with Supabase

### Ready for Supabase Integration
1. **Services**: All services have TODO comments for Supabase calls
2. **RPC Functions**: Dedicated folder for your RPC implementations
3. **Real-time**: Hooks ready for real-time subscriptions
4. **Error Handling**: Consistent error handling patterns

### Example Supabase Integration
```javascript
// In homeService.js
static async getBanners() {
  try {
    const { data, error } = await supabase
      .from('banners')
      .select('*')
      .eq('is_active', true)
      .order('creation_date', { ascending: false })

    if (error) throw error

    return {
      success: true,
      data,
      message: 'Banners retrieved successfully'
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: 'Failed to retrieve banners'
    }
  }
}
```

## 🎯 Benefits

1. **Clean Architecture**: Separated concerns with dedicated folders
2. **Real-time Ready**: Built for real-time data updates
3. **Type Safety**: Comprehensive type definitions
4. **Testable**: Complete mock data for testing
5. **Scalable**: Easy to extend and modify
6. **Performance**: Optimized with React hooks and Redux
7. **RPC Ready**: Dedicated space for your RPC functions

## 🚀 Next Steps

1. **Add Supabase Calls**: Replace TODO comments with real Supabase calls
2. **Implement RPC Functions**: Add your RPC functions in the rpc folder
3. **Add Real-time Subscriptions**: Implement real-time data updates
4. **Add Error Boundaries**: Implement error handling
5. **Add Loading States**: Enhance loading experiences
6. **Add Analytics**: Implement analytics tracking
