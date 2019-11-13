export const formatAnimalName = (animalName, charLimit) => {
  let newName = animalName;
  if (animalName.length > charLimit) {
    newName = newName.replace(newName.slice(charLimit, newName.length), "...");
  }
  return newName.toLowerCase();
};
