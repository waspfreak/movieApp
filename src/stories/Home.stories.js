import React from 'react';

import {Home} from '../../src/Pages/Home/Home';

export default {
	title: 'Example/Home',
	component: Home,
};

const Template = (args) => <Home {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};
