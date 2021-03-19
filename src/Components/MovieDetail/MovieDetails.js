import React from 'react';
import PropTypes from 'prop-types';

// Components
import ProgressBar from '../ProgressBar/ProgressBar';
import SimpleCard from '../Card/SimpleCard';

// Images
import NoImage from '../../assets/no_image.jpg';

// Environment Variables
//import {IMAGE_BASE_URL, POSTER_SIZE} from '../../api/API';

// Styled Components
import {StyledMovieDetails} from './style';

export const MovieDetails = ({
	movie,
	detailTitle,
	posterPath,
	modalOverview,
	voteAverage,
}) => (
	<StyledMovieDetails backdrop={movie.backdrop_path}>
		<div className='movie_details-content'>
			<div className='movie_details-thumb'>
				<SimpleCard image={posterPath} alt={detailTitle} />
			</div>
			<div className='movie_details-text'>
				<h3 className='movie_details_title'>{detailTitle}</h3>
				<p className='movie_details_description'>{modalOverview}</p>
				<div className='rating'>
					<div className='score'>
						<ProgressBar
							progress={voteAverage}
							//progress={parseFloat({voteAverage}).toFixed(1) * 10}
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
