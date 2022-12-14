import { useSelector, useDispatch } from 'react-redux';
import { counterSliceActions } from '../store/counterSlice';
const Counter = () => {
  let count = useSelector(state => {
    return state.counter.count
  }); // because in configStore 'counter' is the key
  let showCount = useSelector(state => state.counter.showCount);
  let dispatch = useDispatch();
  const handleClick = (addition = true, value) => {
    if (addition) {
      if (value) {
        dispatch(counterSliceActions.increment({ count: 10 }))
      } else {
        dispatch(counterSliceActions.increment())
      }
    } else {
      dispatch(counterSliceActions.decrement())
    }
  }
  
  const toggleView = () => dispatch(counterSliceActions.toggleView()); // toggleView() will return { type: 'counterSlice/toggleView', payload: undefined }
  return (
    <div>
      { showCount &&
        <div>
          <h1>{count}</h1>
        </div>
      }
      <button onClick={handleClick}>
        Increment
      </button>
      <button onClick={handleClick.bind(this, true, 10)}>
        Increment by 10
      </button>
      <button onClick={handleClick.bind(this, false)}>
        Decrement
      </button>
      <button onClick={toggleView}>Toggle view</button>
    </div>
  );
}

export default Counter;