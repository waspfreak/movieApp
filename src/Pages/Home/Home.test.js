import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import {snapshotTestFactory} from '../../utils/snapshotTestFactory';
import {Home} from './Home';
import {Header} from '../../Components/Header/Header';

const props: Home[] = [{}];
snapshotTestFactory(Home, props);

let container = null;
let headerContent = null;

beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
	headerContent = document.createElement('Header');
	document.body.appendChild(headerContent);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('renders Home page', () => {
	act(() => {
		render(<Home />, container);
	});
	expect(container.textContent).toBeTruthy();
});
