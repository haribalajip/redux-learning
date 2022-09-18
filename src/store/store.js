import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterSliceA', // can be of any name, used by redux toolkit to name the action type. 
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

