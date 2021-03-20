import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {Svg, CircleBg, Circle, CircleText, Container} from './style';

/**
 * Progress Bar UI component for user interaction
 */

export const ProgressBar = (props) => {
	const [offset, setOffset] = useState(0);
	const circleRef = useRef(null);
	const {size, progress, strokeWidth, circleOneStroke, circleTwoStroke} = props;

	const center = size / 2;
	const radius = size / 2 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;

	useEffect(() => {
		const progressOffset = ((100 - progress) / 100) * circumference;
		setOffset(progressOffset);

		circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';
	}, [setOffset, progress, circumference, offset]);

	return (
		<Container>
			<Svg width={size} height={size}>
				<CircleBg
					stroke={circleOneStroke}
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
				/>
				<Circle
					ref={circleRef}
					stroke={circleTwoStroke}
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
				/>
				<CircleText x={`${center}`} y={`${center}`}>
					{progress}%
				</CircleText>
			</Svg>
		</Container>
	);
};

ProgressBar.propTypes = {
	size: PropTypes.number.isRequired,
	progress: PropTypes.string.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	circleOneStroke: PropTypes.string.isRequired,
	circleTwoStroke: PropTypes.string.isRequired,
};

export default ProgressBar;
