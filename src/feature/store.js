// feature/store.js

import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './Movies/movieSlice'; // Import your movie slice reducer

export const store = configureStore({
  reducer: {
    movies: movieReducer, // Associate the 'movies' state with the movieReducer
  },
});
