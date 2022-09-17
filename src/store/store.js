import { createStore } from 'redux';

const defaultState = { count: 0, showCount:true }
const counterReducer = (state = defaultState, action) => {
  if (action.type === 'increment') {
    return { 
      count: state.count +1,
      showCount: state.showCount
    }
  } else if (action.type === 'decrement') {
    return { 
      count: state.count -1,
      showCount: state.showCount
    }
  } else if (action.type === 'toggle') {
    return {
      count: state.count,
      showCount: !state.showCount
    }
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
