import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar/ProgressBar';
import moment from 'moment';

// Components
import Modal from '../Modal/Modal';
import MovieDetails from '../MovieDetail/MovieDetails';

// Custom Hook
import {useMovieFetch} from '../../hooks/useMovieFetch';
// Styled Components
import {StyledMovieCard} from './style';

// Images
import NoImage from '../../assets/no_image.jpg';

// Environment Variables
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../api/API';

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

	const [movie, error] = useMovieFetch(movieId);

	if (error) return <div>Something went wrong ...</div>;

	return (
		<>
			<StyledMovieCard onClick={() => setModal(true)}>
				<>
					{clickable ? (
						<>
							<Modal isVisible={isModal} onClose={() => setModal(false)}>
								<img src={image} alt={originalTitle} />
								<MovieDetails
									modalOverview={overview}
									detailTitle={originalTitle}
									movie={movie}
									posterPath={
										movie.poster_path
											? `${IMAGE_BASE_URL}${POSTER_SIZE}${image}`
											: NoImage
									}
									voteAverage={voteAverage}
								/>
							</Modal>

							<img className='clickable' src={image} alt={originalTitle} />
							<div className='content'>
								<div className='score'>
									<ProgressBar
										progress={parseFloat(voteAverage).toFixed(1) * 10}
										size={50}
										strokeWidth={4}
										circleOneStroke='#3c0a0adb'
										circleTwoStroke='red'
									/>
								</div>

								<h2 className='content-title'>{originalTitle}</h2>
								<p className='content-data'>
									{moment(releaseDate).format('LL')}
								</p>
							</div>
						</>
					) : (
						<img src={image} alt={originalTitle} />
					)}
				</>
			</StyledMovieCard>
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
