import { useDispatch, useSelector } from "react-redux";
import { themeSliceActions } from '../store/themeSlice';

const Theme = () => {
  let dispatch = useDispatch();
  let darkMode = useSelector(state => state.theme.darkMode);

  const toggleDarkMode = () => dispatch(themeSliceActions.toggleDarkMode());
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