import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import movieApi from '../../common/api/movieApi';
import APIKEY from '../../common/api/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../features/movies/movieSlice';
const Home = () => {
	const movieText = 'Harry';
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchMovies = async () => {
			const response = await movieApi
				.get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)
				.catch((err) => {
					console.log('Error: ', err);
				});
			dispatch(addMovie(response.data));
		};
		fetchMovies();
	}, []);

	return (
		<div>
			<div className="banner-img"></div>
			<MovieList />
		</div>
	);
};

export default Home;
