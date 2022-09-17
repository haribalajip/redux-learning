import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  let count = useSelector(state => state.count);
  let showCount = useSelector(state => state.showCount);
  let dispatch = useDispatch();
  const handleClick = (addition = true) => {
    if (addition) {
      dispatch({ type: 'increment' })
    } else {
      dispatch({ type: 'decrement' })
    }
  }
  
  const toggleView = () => dispatch({ type: 'toggle' })
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