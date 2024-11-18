import { rangeElement } from './dom';

const passwordOptions = {
	lowercase: 'abcdefghijklmnñopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
	numbers: '1234567890',
	symbols: '+-.,!"·$%&/()=?{}',
	passwordLength: rangeElement.value
};

export { passwordOptions };
