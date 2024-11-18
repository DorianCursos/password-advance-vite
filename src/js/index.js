const buttonElement = document.getElementById('button');

const printClick = (event, name) => {
	console.log(name);
	console.log(event);
};

buttonElement.addEventListener('click', event => printClick(event, 'Dorian'));
