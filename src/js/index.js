import { getBreeds, getSubBreeds } from "./breeds-functions";
import { breedSelectElement, buttonElement } from "./dom";
import { getPhoto } from "./photo-functions";


getBreeds();

breedSelectElement.addEventListener('change', getSubBreeds);
buttonElement.addEventListener('click', getPhoto);
