import React from 'react';
import {SimpleCardStyles} from './style';
import PropTypes from 'prop-types';

/**
 * Simple Card  UI component for user interaction
 */

export const SimpleCard = ({originalTitle, posterPath, ...props}) => {
	return (
		<SimpleCardStyles {...props}>
			<img className='image' src={posterPath} alt={originalTitle} />
		</SimpleCardStyles>
	);
};

SimpleCard.propTypes = {
	originalTitle: PropTypes.string.isRequired,
	posterPath: PropTypes.string.isRequired,
};

export default SimpleCard;
