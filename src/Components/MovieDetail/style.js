import styled from 'styled-components';
import {IMAGE_BASE_URL, BACKDROP_SIZE} from '../../api/API';

export const StyledMovieDetails = styled.div`
	background: ${(props) =>
		props.backdrop
			? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
			: 'rgba(0,0,0,.5)'};
	background-size: cover !important;
	background-position: center !important;
	width: 100%;
	padding: 40px 20px;
	box-sizing: border-box;
	animation: animateMovieinfo 1s;

	.movie_details-content {
		max-width: 1280px;
		display: flex;
		margin: 0 auto;
		background: rgb(0, 0, 0, 0.8);
		position: relative;
	}

	.movie_details-thumb {
		margin-top: 20px;

		/* @media screen and (max-width: 768px) {
			width: 100% !important;
		} */
	}

	.movie_details-text {
		color: rgba(239, 235, 231, 0.9);
		overflow: hidden;
		padding: 16px;
		.movie_details_title {
			font-size: 48px;
		}
		.movie_details_description {
			font-size: 18px;
			line-height: 26px;
			padding-top: 16px;
			padding-bottom: 16px;
		}
	}

	.rating {
		display: flex;
		justify-content: flex-start;
	}

	.score {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		border-radius: 50%;
		margin: 0 0 0 0;
	}

	@media screen and (max-width: 768px) {
		min-height: 600px;
		height: auto;
	}

	@keyframes animateMovieinfo {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
