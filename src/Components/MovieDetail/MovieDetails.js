import React from 'react';
import PropTypes from 'prop-types';

// Components
import MovieCard from '../Card/MovieCard';
import ProgressBar from '../ProgressBar/ProgressBar';
import SimpleCard from '../Card/SimpleCard';

// Images
import NoImage from '../../assets/no_image.jpg';

// Environment Variables
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../api/API';

// Styled Components
import {StyledMovieDetails} from './style';

const MovieDetails = ({movie}) => (
	<StyledMovieDetails backdrop={movie.backdrop_path}>
		<div className='movie_details-content'>
			<div className='movie_details-thumb'>
				<SimpleCard
					posterPath={
						movie.poster_path
							? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
							: NoImage
					}
					alt={movie.title}
				/>
			</div>
			<div className='movie_details-text'>
				<h3 className='movie_details_title'>{movie.title}</h3>
				<p className='movie_details_description'>{movie.overview}</p>
				<div className='rating'>
					<div className='score'>
						<ProgressBar
							progress={parseFloat(movie.vote_average).toFixed(1) * 10}
							size={50}
							strokeWidth={4}
							circleOneStroke='#3c0a0adb'
							circleTwoStroke='red'
						/>
					</div>
				</div>
			</div>
		</div>
	</StyledMovieDetails>
);

MovieDetails.propTypes = {
	movie: PropTypes.object,
};

export default MovieDetails;
