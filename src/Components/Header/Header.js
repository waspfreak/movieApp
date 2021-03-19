import React from 'react';
import {StyledNavbar, Logo} from './style';

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
