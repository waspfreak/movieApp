import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {StyledSearchBar, StyledSearchBarContent} from './style';
import RatingsFilter from '../RatingsFilter/RatingsFilter';
import {Search} from '@styled-icons/boxicons-regular';

const SearchBar = ({callback}) => {
	const [state, setState] = useState('');
	const timeOut = useRef(null);

	const doSearch = (event) => {
		const {value} = event.target;
		clearTimeout(timeOut.current);
		setState(value);

		timeOut.current = setTimeout(() => {
			callback(value);
		}, 500);
	};

	return (
		<>
			<StyledSearchBar>
				<StyledSearchBarContent>
					<Search className='icon' />
					<input
						type='text'
						placeholder='search keywords...'
						onChange={doSearch}
						value={state}
					/>
				</StyledSearchBarContent>
				{state === '' && <RatingsFilter />}
			</StyledSearchBar>
		</>
	);
};

SearchBar.propTypes = {
	callback: PropTypes.func,
};

export default SearchBar;
