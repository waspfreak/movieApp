import React from 'react';

import {SimpleCard} from '../../src/Components/Card/SimpleCard';
import {Home} from '../../src/Pages/Home/Home';

export default {
	title: 'Example/Card',
	component: SimpleCard,
};

const Template = (args) => <SimpleCard {...args} />;

export const Card = Template.bind({});
Card.args = {
	posterPath: 'http://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
};
