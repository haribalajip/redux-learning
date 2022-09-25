import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'theme',
  initialState: { darkMode: false },
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
    }
  }
});

// async logic action creators (thunks)
export const fetchAndToggleDarkMode = (dispatch) => {
  return async () => {
    const hasThemeURL = 'https://run.mocky.io/v3/53dc6352-b202-4831-b234-7384461c4f0e';
    try {
      const response = await fetch(hasThemeURL);
      if (response.ok && response.status === 200) {
        dispatch(themeSliceActions.toggleDarkMode())
      } else {
        throw new Error('something went wrong')
      }
    } catch(e) {
      alert('Something went wrong');
    }
    
  }
}

export const themeSliceReducer = themeSlice.reducer;
export const themeSliceActions = themeSlice.actions;