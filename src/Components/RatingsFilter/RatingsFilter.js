import React, {useEffect, useState} from 'react';

// Components
import MovieCard from '../Card/MovieCard';
import MovieWall from '../MovieWall/MovieWall';

// Environment Variables
import {FILTER_BASE_URL, IMAGE_BASE_URL, POSTER_SIZE} from '../../api/API';

// Styled Components
import {StyledRatingsFilter} from './style';

const RatingsFilter = () => {
	const [selected, setSelected] = useState(false);
	const [ratings, setRatings] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(FILTER_BASE_URL);
			const data = await response.json();

			setRatings(data.results);
		}
		fetchData();
	}, []);

	const handleInputChange = (e) => {
		setSelected(e.target.id);
	};

	const filteredFiveStars = (
		<MovieWall children>
			{ratings
				.filter((movie) => movie.vote_average > 8)
				.map((movie) => (
					<>
						<MovieCard
							key={movie.id}
							clickable
							image={
								movie.poster_path
									? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
									: null
							}
							movieId={movie.id}
							originalTitle={movie.original_title}
							voteAverage={movie.vote_average}
						/>
					</>
				))}
		</MovieWall>
	);

	const filteredFourStars = (
		<div className={selected ? 'BOX' : ''}>
			<MovieWall children>
				{ratings
					.filter((movie) => movie.vote_average <= 8 && movie.vote_average >= 6)
					.map((movie) => (
						<>
							<MovieCard
								key={movie.id}
								clickable
								image={
									movie.poster_path
										? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
										: null
								}
								movieId={movie.id}
								originalTitle={movie.original_title}
								voteAverage={movie.vote_average}
							/>
						</>
					))}
			</MovieWall>
		</div>
	);

	const filteredThreeStars = (
		<div className={selected ? 'BOX' : ''}>
			<MovieWall children>
				{ratings
					.filter((movie) => movie.vote_average <= 6 && movie.vote_average >= 4)
					.map((movie) => (
						<>
							<MovieCard
								key={movie.id}
								clickable
								image={
									movie.poster_path
										? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
										: null
								}
								movieId={movie.id}
								originalTitle={movie.original_title}
								voteAverage={movie.vote_average}
							/>
						</>
					))}
			</MovieWall>
		</div>
	);

	const filteredTwoStars = (
		<MovieWall children>
			{ratings
				.filter((movie) => movie.vote_average <= 4 && movie.vote_average >= 2)
				.map((movie) => (
					<>
						<MovieCard
							key={movie.id}
							clickable
							image={
								movie.poster_path
									? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
									: null
							}
							movieId={movie.id}
							originalTitle={movie.original_title}
							voteAverage={movie.vote_average}
						/>
					</>
				))}
		</MovieWall>
	);

	const filteredOneStar = (
		<MovieWall children>
			{ratings
				.filter((movie) => movie.vote_average <= 2 && movie.vote_average >= 0)
				.map((movie) => (
					<>
						<MovieCard
							clickable
							key={movie.id}
							image={
								movie.poster_path
									? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
									: null
							}
							movieId={movie.id}
							originalTitle={movie.original_title}
							voteAverage={movie.vote_average}
						/>
					</>
				))}
		</MovieWall>
	);

	return (
		<>
			<StyledRatingsFilter>
				<label className='label'>Filter movie ratings</label>
				<section className='star-wrapper'>
					<span className='star-group'>
						<input
							onClick={handleInputChange}
							type='radio'
							id='rating-5'
							name='rating'
						/>
						<label htmlFor='rating-5'>5</label>

						<input
							onClick={handleInputChange}
							type='radio'
							id='rating-4'
							name='rating'
						/>
						<label htmlFor='rating-4'>4</label>

						<input
							onClick={handleInputChange}
							type='radio'
							id='rating-3'
							name='rating'
						/>
						<label htmlFor='rating-3'>3</label>

						<input
							onClick={handleInputChange}
							type='radio'
							id='rating-2'
							name='rating'
						/>
						<label htmlFor='rating-2'>2</label>

						<input
							onClick={handleInputChange}
							type='radio'
							id='rating-1'
							name='rating'
						/>
						<label htmlFor='rating-1'>1</label>

						<input
							type='radio'
							id='default'
							name='rating'
							className='star-empty'
						/>
						<label htmlFor='default-state'>empty</label>
					</span>
				</section>
			</StyledRatingsFilter>
			<div>
				{selected === 'rating-5'
					? filteredFiveStars
					: selected === 'rating-4'
					? filteredFourStars
					: selected === 'rating-3'
					? filteredThreeStars
					: selected === 'rating-2'
					? filteredTwoStars
					: selected === 'rating-1'
					? filteredOneStar
					: null}
			</div>
		</>
	);
};

export default RatingsFilter;
