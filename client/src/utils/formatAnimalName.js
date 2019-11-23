export const formatAnimalName = (animalName, charLimit) => {
  let newName = animalName;
  if (animalName.length >= charLimit) {
    newName = animalName.substr(0, charLimit - 3);
    return newName.toLowerCase() + "...";
  }
  return newName.toLowerCase();
};
