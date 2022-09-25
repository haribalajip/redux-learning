import { useDispatch, useSelector } from "react-redux";
import { fetchAndToggleDarkMode, themeSliceActions } from '../store/themeSlice';

const Theme = () => {
  let dispatch = useDispatch();
  let darkMode = useSelector(state => state.theme.darkMode);

  // dispatch support functions as well
  const toggleDarkMode = () => dispatch(fetchAndToggleDarkMode(dispatch, themeSliceActions));
  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle darkMode</button>
      <div>
        Dark mode: {darkMode.toString()}
      </div>
    </div>
  )
};

export default Theme;