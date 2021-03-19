import React from 'react';

import {MovieWall} from '../Components/MovieWall/MovieWall';

export default {
	title: 'Example/MovieWall',
	component: MovieWall,
};

const Template = (args) => <MovieWall {...args} />;

export const ExampleMovieWall = Template.bind({});
ExampleMovieWall.args = {};
