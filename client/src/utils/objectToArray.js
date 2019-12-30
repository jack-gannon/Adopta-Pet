export const objectToArray = obj => {
  let output = Object.keys(obj)
    .map(key => [key.replace("_", " "), obj[key]])
    .filter(pair => pair[1] !== null);
  return output;
};
