import React, {useState} from 'react';
import SimpleCard from '../Card/SimpleCard';
import {HeroStyles, HeroItemStyles, HeroTitle, Container} from './style';
import {useHomeFetch} from '../../hooks/useHomeFetch';

// Environment Variables
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../api/API';

// Images
import NoImage from '../../assets/no_image.jpg';

export const Hero = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [
		{
			state: {movies},
		},
	] = useHomeFetch(searchTerm);

	return (
		<HeroStyles>
			<HeroTitle>Popular Movies</HeroTitle>
			<Container>
				{movies.map((movie) => (
					<>
						<HeroItemStyles>
							<SimpleCard
								id={movie.id}
								originalTitle={movie.originalTitle}
								posterPath={
									movie.poster_path
										? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
										: NoImage
								}
							/>
						</HeroItemStyles>
					</>
				))}
			</Container>
		</HeroStyles>
	);
};

export default Hero;
