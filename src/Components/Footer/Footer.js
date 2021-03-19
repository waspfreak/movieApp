import React from 'react';
// Styled Components
import {StyledFooter, StyledTMDBLogo} from './style';

import TMDBLogo from '../../assets/tmdb_logo.svg';

const Footer = () => {
	return (
		<StyledFooter>
			<div className='footer'>
				<a className='link' href='https://www.themoviedb.org/'>
					<StyledTMDBLogo src={TMDBLogo} alt='tmdb-logo' target='_blank' />
				</a>
				Crafted by{' '}
				<a className='link' href='https://github.com/waspfreak' target='_blank'>
					Juliana Leon
				</a>{' '}
				with{' '}
				<a className='link' href='https://reactjs.org/' target='_blank'>
					{' '}
					React
				</a>
			</div>
		</StyledFooter>
	);
};

export default Footer;
