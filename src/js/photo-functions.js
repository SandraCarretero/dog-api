import { breedSelected, subBreedSelected } from "./breeds-functions";
import { dogPhotoElement } from "./dom";

const printPhoto = photo => {
	dogPhotoElement.src = photo;
};

const getPhoto = async () => {
	if (!breedSelected) return;

	let url;
	if (subBreedSelected) {
		url = `https://dog.ceo/api/breed/${breedSelected}/${subBreedSelected}/images/random`;
	} else {
		url = `https://dog.ceo/api/breed/${breedSelected}/images/random`;
	}

	const response = await fetch(url);
	const data = await response.json();
	printPhoto(data.message);
};

export {getPhoto}