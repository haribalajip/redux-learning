import { configureStore } from '@reduxjs/toolkit';

import { counterSliceReducer } from './counterSlice';

export const store = configureStore({
  reducer: { counter: counterSliceReducer }
});

