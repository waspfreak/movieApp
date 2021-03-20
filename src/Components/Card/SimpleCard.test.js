import {snapshotTestFactory} from '../../utils/snapshotTestFactory';
//
import {SimpleCard} from './SimpleCard';
const props: SimpleCard[] = [
	{
		posterPath:
			'http://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
		originalTitle: 'Movie Title',
	},
];
snapshotTestFactory(SimpleCard, props);
