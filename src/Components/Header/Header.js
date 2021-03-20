import React from 'react';
import {StyledNavbar, Logo} from './style';

/**
 *Header UI component for user interaction
 */

export const Header = () => {
	return (
		<StyledNavbar>
			<Logo>
				<h1>App Movies</h1>
			</Logo>
		</StyledNavbar>
	);
};

export default Header;
