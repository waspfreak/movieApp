import React from 'react';

import {SearchBar} from './SearchBar';

export default {
	title: 'Example/SearchBar',
	component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const SearchBarexample = Template.bind({});
SearchBarexample.args = {};
