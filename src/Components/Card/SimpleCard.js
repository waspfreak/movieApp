import React from 'react';
import {SimpleCardStyles} from './style';
import PropTypes from 'prop-types';

const SimpleCard = ({originalTitle, posterPath}) => {
	return (
		<SimpleCardStyles>
			<img className='image' src={posterPath} alt={originalTitle} />
		</SimpleCardStyles>
	);
};

SimpleCard.propTypes = {
	originalTitle: PropTypes.string.isRequired,
	posterPath: PropTypes.string.isRequired,
};

export default SimpleCard;
