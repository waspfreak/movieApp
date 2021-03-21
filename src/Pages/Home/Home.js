import React, {useState} from 'react';
// API Variables
import {
	POPULAR_BASE_URL,
	SEARCH_BASE_URL,
	POSTER_SIZE,
	IMAGE_BASE_URL,
} from '../../api/API';

// Components
import SearchBar from '../../Components/Search/SearchBar';
import MovieWall from '../../Components/MovieWall/MovieWall';
import MovieCard from '../../Components/Card/MovieCard';
import Loader from '../../Components/Loader/Loader';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';

// styled-components
import {GlobalStyle} from './style';

// Custom Hook
import {useNowPlayingFetch} from '../../hooks/useNowPlayingFetch';
// Images
import NoImage from '../../assets/no_image.jpg';

export const Home = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [
		{
			state: {movies},
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

	return (
		<>
			<GlobalStyle />
			<Header getByTestId='app-header' title='App Movies' />
			<Hero />
			<SearchBar callback={searchMovies} />
			{error && <p>something went wrong</p>}

			<MovieWall header={searchTerm ? 'Search Result' : 'Now Playing  '}>
				{loading ? <Loader /> : undefined}

				{movies.map((movie, index) => (
					<>
						<div key={index}>
							<MovieCard
								clickable
								image={
									movie.poster_path
										? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
										: NoImage
								}
								movieId={movie.id}
								overview={movie.overview}
								originalTitle={movie.original_title}
								releaseDate={movie.release_date}
								voteAverage={parseFloat(movie.vote_average).toFixed(1) * 10}
							/>
						</div>
					</>
				))}
			</MovieWall>

			<Footer />
		</>
	);
};

export default Home;
