import {snapshotTestFactory} from '../../utils/snapshotTestFactory';
//
import {Modal} from './Modal';
const props: Modal[] = [
	{
		isVisible: false,
		children: 'content for modal',
		onClose: true,
	},
];
snapshotTestFactory(Modal, props);
