import { breedSelectElement, breedsContainerElement } from './dom';

let allBreeds;
let breedSelected;
let subBreedSelected;

const fillSelect = () => {
	const onlyBreeds = Object.keys(allBreeds);
	breedSelectElement.innerHTML = '';
	const newOption = document.createElement('option');
	newOption.textContent = 'Select dog breed';
	newOption.value = 'default';
	breedSelectElement.append(newOption);

	onlyBreeds.forEach(breed => {
		const newOption = document.createElement('option');
		newOption.textContent = breed;
		newOption.value = breed;
		breedSelectElement.append(newOption);
	});
};

const getBreeds = async () => {
	const response = await fetch('https://dog.ceo/api/breeds/list/all');
	const data = await response.json();
	allBreeds = data.message;
	fillSelect();
};

const generateSelectSubBreeds = () => {
	breedsContainerElement.innerHTML = '';
	if (subBreedSelected) return;

	const subBreeds = allBreeds[breedSelected];
	if (subBreeds && subBreeds.length > 0) {
		const newSelect = document.createElement('select');
		subBreeds.forEach(subBreed => {
			const newOption = document.createElement('option');
			newOption.textContent = subBreed;
			newOption.value = subBreed;
			newSelect.append(newOption);
		});

		newSelect.addEventListener('change', saveSubBreed);
		breedsContainerElement.append(newSelect);
	}
};

const getSubBreeds = event => {
	breedSelected = event.target.value;
	subBreedSelected = undefined;
	if (breedSelected === 'default') {
		breedsContainerElement.innerHTML = '';
		return;
	}
	generateSelectSubBreeds();
};

const saveSubBreed = event => {
	subBreedSelected = event.target.value;
};

export { getBreeds, getSubBreeds, allBreeds, breedSelected, subBreedSelected };
