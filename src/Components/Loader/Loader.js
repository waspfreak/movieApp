import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Spinner} from '@styled-icons/fa-solid/Spinner';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const scale = keyframes`
   0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
`;

const Container = styled.div`
	position: fixed;
	animation: ${scale} 1.5s linear infinite;
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	color: red;
`;

const SpinnerIcon = styled(Spinner)`
	animation: ${rotate} 1.25s linear infinite;
	height: 4rem;
	width: 4rem;
`;

export const Loader = () => {
	return (
		<Container>
			<SpinnerIcon />
			<h1>Loading Results</h1>
		</Container>
	);
};

export default Loader;
