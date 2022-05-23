import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import movieApi from '../../common/api/movieApi';
import APIKEY from '../../common/api/movieApiKey';
const Home = () => {
	const movieText = 'Harry';
	useEffect(() => {
		const fetchMovies = async () => {
			const response = await movieApi
				.get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)
				.catch((err) => {
					console.log('Error: ', err);
				});
			console.log('API:', response);
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
