import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterSlice', // can be of any name
  initialState: { count: 0, showCount:true },
  reducers: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    },

    toggleView(state) {
      state.showCount = !state.showCount;
    }
  }
})

export const counterSliceActions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer
});

