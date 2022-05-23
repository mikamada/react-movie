import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	movie: {},
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovie: (state, { payload }) => {
			state.movie = payload;
		},
	},
});

export const { addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
