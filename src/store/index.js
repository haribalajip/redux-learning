import { configureStore } from '@reduxjs/toolkit';

import { counterSliceReducer } from './counterSlice';
import { themeSliceReducer } from './themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    theme: themeSliceReducer
  }
});

