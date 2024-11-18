import '../css/styles.css';

import { buttonGenerateElement, optionsElement, rangeElement, lengthTextElement } from './dom';
import { checkPasswordOptions, generatePassword, setPasswordLenght } from './password-functions';
import { passwordOptions } from './password-options';

lengthTextElement.textContent = passwordOptions.passwordLength;

rangeElement.addEventListener('input', setPasswordLenght);

buttonGenerateElement.addEventListener('click', generatePassword);

optionsElement.addEventListener('click', event => {
	if (event.target.type !== 'checkbox') return;
	checkPasswordOptions();
});
