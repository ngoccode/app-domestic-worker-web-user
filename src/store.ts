import { configureStore } from '@reduxjs/toolkit';
import wrapperSlice from './components/wrapper/slice';

export const store = configureStore({
  reducer: {
    wrapper: wrapperSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
