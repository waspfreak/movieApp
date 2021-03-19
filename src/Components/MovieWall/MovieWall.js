import React from 'react';
import PropTypes from 'prop-types';

import {StyledMovieWall, StyledMovieWallContent, Style} from './style';

export const MovieWall = ({header, children}) => (
	<Style>
		<h2 className='title'>{header}</h2>
		<StyledMovieWall>
			<StyledMovieWallContent>{children}</StyledMovieWallContent>
		</StyledMovieWall>
	</Style>
);

MovieWall.propTypes = {
	header: PropTypes.string,
};

export default MovieWall;
