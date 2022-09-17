import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  let count = useSelector(state => {
    return state.count;
  });
  let dispatch = useDispatch();
  const handleClick = (addition = true) => {
    if (addition) {
      dispatch({ type: 'increment' })
    } else {
      dispatch({ type: 'decrement' })
    }
  }
  
  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={handleClick}>
        Increment
      </button>
      <button onClick={handleClick.bind(this, false)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;