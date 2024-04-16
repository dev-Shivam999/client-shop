import { configureStore } from '@reduxjs/toolkit';
import userSelector from './user';
export const store = configureStore({
  reducer: userSelector,
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;