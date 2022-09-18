import { useSelector, useDispatch } from 'react-redux';
import { counterSliceActions } from '../store/store';
const Counter = () => {
  let count = useSelector(state => state.count);
  let showCount = useSelector(state => state.showCount);
  let dispatch = useDispatch();
  const handleClick = (addition = true) => {
    if (addition) {
      dispatch(counterSliceActions.increment())
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
      <button onClick={handleClick.bind(this, false)}>
        Decrement
      </button>
      <button onClick={toggleView}>Toggle view</button>
    </div>
  );
}

export default Counter;