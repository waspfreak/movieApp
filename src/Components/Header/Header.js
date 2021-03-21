import React from 'react';
import {StyledNavbar, Logo} from './style';

/**
 *Header UI component for user interaction
 */

export const Header = ({title}) => {
	return (
		<StyledNavbar>
			<Logo>
				<h1>{title}</h1>
			</Logo>
		</StyledNavbar>
	);
};

export default Header;
