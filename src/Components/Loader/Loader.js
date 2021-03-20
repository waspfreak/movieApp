import React from 'react';
import {Container, SpinnerIcon} from './style';

/**
 * Loader UI component for user interaction
 */

export const Loader = () => {
	return (
		<Container>
			<SpinnerIcon />
			<h1>Loading Results</h1>
		</Container>
	);
};

export default Loader;
