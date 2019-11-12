export const formatSearchFilter = filterObject => {
  let newObject = { ...filterObject.filter };

  // Determine location based on provided information
  let { zip, city, state } = newObject;
  if (zip) {
    newObject.location = zip;
    delete newObject.zip;
  } else if (city && state) {
    newObject.location = `${city}, ${state}`;
  } else if (city === null && state) {
    newObject.location = state;
  } else {
    newObject.location = "Any";
  }

  let keys = Object.keys(newObject);
  keys.forEach(key =>
    newObject[key] === null
      ? delete newObject[key]
      : (newObject[key] = newObject[key].replace(/\s/g, "_").replace(/\//, "&"))
  );
  return newObject;
};

// const formatSearchParams = oldParams => {
//   let newParams = { ...oldParams };
//   let keys = Object.keys(newParams);

//   keys.forEach(key =>
//     newParams[key] === "null"
//       ? delete newParams[key] // Remove all parameters that weren't included
//       : (newParams[key] = newParams[key] // Format multi-word params & slashes
//           .replace(/_/g, " ")
//           .replace(/&/g, "/"))
//   );

//   newParams.location = "";
//   let { zip, city, state } = newParams;

//   // If zip-code wasn't provided, set location to city and/or state.
//   zip
//     ? (newParams.location = zip) // Zip
//     : city
//     ? (newParams.location = `${city}, ${state}`) // City, State
//     : (newParams.location = state); // State
//   delete newParams.zip;
//   delete newParams.city;
//   delete newParams.state;
//   return newParams;
// };
