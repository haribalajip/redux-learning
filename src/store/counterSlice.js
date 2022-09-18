import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counterSliceA', // can be of any name, used by redux toolkit to name the action type. 
  initialState: { count: 0, showCount:true },
  reducers: {
    increment(state, { payload }) { // payload is the key provided by redux toolkit
      if (payload) {
        state.count += payload.count;
      } else {
        state.count++;
      }
    },

    decrement(state) {
      state.count--;
    },

    toggleView(state) {
      state.showCount = !state.showCount;
    }
  }
})

export const counterSliceReducer = counterSlice.reducer;
export const counterSliceActions = counterSlice.actions;