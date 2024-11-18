import { buttonGenerateElement, lengthTextElement, passwordElement } from './dom';
import { passwordOptions } from './password-options';

let allowedCharacters = '';

const setPasswordLenght = event => {
	passwordOptions.passwordLength = event.target.value;
	lengthTextElement.textContent = passwordOptions.passwordLength;
};

const printPassword = password => {
	passwordElement.value = password;
};

const setDisabledButton = () => {
	buttonGenerateElement.disabled = !allowedCharacters.length;
};

const checkPasswordOptions = () => {
	allowedCharacters = '';
	const allCheckbox = document.querySelectorAll("input[type='checkbox']:checked");
	allCheckbox.forEach(checkbox => {
		allowedCharacters += passwordOptions[checkbox.id];
	});

	setDisabledButton();
};

const generatePassword = () => {
	let newPassword = '';
	let newPasswordLength = passwordOptions.passwordLength;

	for (let index = 0; index < newPasswordLength; index++) {
		const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
		const randomCharacter = allowedCharacters.charAt(randomNumber);
		newPassword += randomCharacter;
	}

	printPassword(newPassword);
};

export { setPasswordLenght, generatePassword, checkPasswordOptions };
