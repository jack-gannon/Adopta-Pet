export const formatAnimalName = (animalName, charLimit) => {
  let newName = animalName.substr(0, charLimit);
  return newName.toLowerCase() + "...";
};
