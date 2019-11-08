const formatSearchParams = oldParams => {
  let newParams = { ...oldParams };
  let keys = Object.keys(newParams);

  keys.forEach(key =>
    newParams[key] === "null"
      ? delete newParams[key] // Remove all parameters that weren't included
      : (newParams[key] = newParams[key] // Format multi-word params & slashes
          .replace(/_/g, " ")
          .replace(/-/g, "/"))
  );

  newParams.location = "";
  let { zip, city, state } = newParams;

  // If zip-code wasn't provided, set location to city and/or state.
  zip
    ? (newParams.location = zip) // Zip
    : city
    ? (newParams.location = `${city}, ${state}`) // City, State
    : (newParams.location = state); // State
  delete newParams.zip;
  delete newParams.city;
  delete newParams.state;
  return newParams;
};

module.exports = formatSearchParams;

// else if (newParams.zip === "null") {
//   // If ZIP was not included, set city + state as location
//   newParams.location = `${newParams.city}, ${newParams.state}`;
// } else if (newParams.city === "null" && newParams.state === "null") {
//   newParams.location = newParams.zip;
// } else if (newParams.city) {
// }
// });
