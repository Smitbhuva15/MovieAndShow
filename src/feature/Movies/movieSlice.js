import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';


// Async Thunk to fetch movies
export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    try {
     
      const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`);
      return response.data.Search || []; // Return the Search array or an empty array if not found
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch movies');
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term) => {
    try {
    
      const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`);
      return response.data.Search || []; // Return the Search array or an empty array if not found
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch movies');
    }
  }
);

export const fetchAsyncMoviesorshowsdata = createAsyncThunk(
  'movies/fetchAsyncMoviesorshowsdata',
  async (id) => {
    try {
      const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
      return response.data || {}; // Return the full movie/show details
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch movie/show details');
    }
  }
);

// Initial state for movies slice
const initialState = {
  movies: [],
  shows: [],
  selectMoviesOrShow: {},
  error: null,
};
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload; // Directly updating movies with the fetched data
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    removeSelectedMovieOrShow :(state)=>{
      state.removeSelectedMovieOrShow={};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log("Fetching movies...");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
        console.log("Movies fetched successfully!");
        state.movies = action.payload; // Update the movies state with the payload
      })
      .addCase(fetchAsyncMovies.rejected, (state, action) => {
        console.log("Failed to fetch movies:", action.error.message);
        state.error = action.error.message; // Update error state on failure
      })
      .addCase(fetchAsyncShows.fulfilled, (state, action) => {
        console.log("shows fetched successfully!");
        state.shows = action.payload; 
      })
      .addCase(fetchAsyncMoviesorshowsdata.fulfilled, (state, action) => {
        console.log("Data fetched successfully!");
        state.selectMoviesOrShow = action.payload; // Update the selected movie/show data
      })
  },
});

export const { addMovies, setError,removeSelectedMovieOrShow } = movieSlice.actions;

export default movieSlice.reducer;
