import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {snapshotTestFactory} from './utils/snapshotTestFactory';

import {act} from 'react-dom/test-utils';
import App from './App';

const props: App[] = [{}];
snapshotTestFactory(App, props);

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('renders App component', () => {
	act(() => {
		render(<App />, container);
	});
	expect(container.textContent).toBeTruthy();
});
