import React from 'react';
import PropTypes from 'prop-types';

// Components
import ProgressBar from '../ProgressBar/ProgressBar';

// Styled Components
import {StyledMovieDetails} from './style';

/**
 * Movie Detail UI component for user interaction
 */

export const MovieDetails = ({
	movie,
	detailTitle,
	posterPath,
	modalOverview,
	voteAverage,
}) => (
	<StyledMovieDetails>
		<div className='movie_details-content'>
			<div className='movie_details-thumb'>
				<img className='image-thumb' src={posterPath} alt={detailTitle} />
			</div>
			<div className='movie_details-text'>
				<h3 className='movie_details_title'>{detailTitle}</h3>
				<p className='movie_details_description'>{modalOverview}</p>
				<div className='rating'>
					<div className='score'>
						<ProgressBar
							progress={voteAverage}
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
