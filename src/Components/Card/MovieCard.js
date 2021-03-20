import React, {useState} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Moment from 'react-moment';

// Components
import Modal from '../Modal/Modal';
import MovieDetails from '../MovieDetail/MovieDetails';
import ProgressBar from '../ProgressBar/ProgressBar';

// Custom Hook
import {useMovieFetch} from '../../hooks/useMovieFetch';
// Styled Components
import {StyledMovieCard} from './style';

/**
 * Movie Card  UI component for user interaction
 */

export const MovieCard = ({
	image,
	movieId,
	clickable,
	originalTitle,
	releaseDate,
	voteAverage,
	overview,
}) => {
	const [isModal, setModal] = useState(false);

	const [movie] = useMovieFetch(movieId);

	return (
		<>
			<StyledMovieCard key={movieId} onClick={() => setModal(true)}>
				<>
					{clickable ? (
						<>
							<img className='clickable' src={image} alt={originalTitle} />
							<div className='content'>
								<div className='score'>
									<ProgressBar
										progress={voteAverage}
										size={50}
										strokeWidth={4}
										circleOneStroke='#3c0a0adb'
										circleTwoStroke='red'
									/>
								</div>
								<h2 className='content-title'>{originalTitle}</h2>
								<p className='content-data'>
									<Moment date={moment(releaseDate).format()} />
								</p>
							</div>
						</>
					) : (
						<img src={image} alt={originalTitle} />
					)}
				</>
			</StyledMovieCard>
			<Modal isVisible={isModal} onClose={() => setModal(false)}>
				<MovieDetails
					backdrop={movie.backdrop_path}
					modalOverview={overview}
					detailTitle={originalTitle}
					movie={movie}
					posterPath={image}
					voteAverage={voteAverage}
				/>
			</Modal>
		</>
	);
};

MovieCard.propTypes = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	clickable: PropTypes.bool,
	originalTitle: PropTypes.string,
	releaseDate: PropTypes.string,
};

export default MovieCard;
