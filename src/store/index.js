import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './slices/mainSlice';
import membersReducer from './slices/membersSlice';
import pledgeReducer from './slices/pledgeSlice';
import venturesReducer from './slices/venturesSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    members: membersReducer,
    pledge: pledgeReducer,
    ventures: venturesReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

// TypeScript types would go here if using TypeScript
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
