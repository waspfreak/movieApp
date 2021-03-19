import React from 'react';

import {Header} from '../../src/Components/Header/Header';

export default {
	title: 'Example/Header',
	component: Header,
};

const Template = (args) => <Header {...args} />;

export const HeaderExample = Template.bind({});
HeaderExample.args = {};
