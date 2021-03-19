import React, {useState} from 'react';
// API Variables
import {
	POPULAR_BASE_URL,
	SEARCH_BASE_URL,
	POSTER_SIZE,
	IMAGE_BASE_URL,
} from '../../api/API';

// Components
//import HeroImage from './elements/HeroImage';
import SearchBar from '../../Components/Search/SearchBar';
import MovieWall from '../../Components/MovieWall/MovieWall';
import MovieCard from '../../Components/Card/MovieCard';
import Loader from '../../Components/Loader/Loader';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import {GlobalStyle} from './style';

// Custom Hook
import {useNowPlayingFetch} from '../../hooks/useNowPlayingFetch';

// Images
import NoImage from '../../assets/no_image.jpg';
import Hero from '../../Components/Hero/Hero';

export const Home = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [
		{
			state: {movies, currentPage, totalPages, heroImage},
			loading,
			error,
		},
		fetchMovies,
	] = useNowPlayingFetch(searchTerm);

	const searchMovies = (search) => {
		const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

		setSearchTerm(search);
		fetchMovies(endpoint);
	};

	if (error) return <div>Something went wrong ...</div>;
	if (!movies[0]) return <Loader />;
	return (
		<>
			<GlobalStyle />
			<Header />
			<Hero />

			<SearchBar callback={searchMovies} />

			<MovieWall header={searchTerm ? 'Search Result' : 'Now Playing  '}>
				{movies.map((movie) => (
					<>
						<MovieCard
							key={movie.id}
							clickable
							image={
								movie.poster_path
									? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
									: NoImage
							}
							movieId={movie.id}
							originalTitle={movie.original_title}
							releaseDate={movie.release_date}
							voteAverage={movie.vote_average}
						/>
					</>
				))}
			</MovieWall>

			<Footer />
		</>
	);
};

export default Home;
