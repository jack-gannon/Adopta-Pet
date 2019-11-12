const formatSearchParams = oldParams => {
  let newParams = { ...oldParams };
  let keys = Object.keys(newParams);

  // Get page number from search pararms
  newParams.page = oldParams.page;

  keys.forEach(key =>
    newParams[key] === "Any" ||
    newParams[key] === "All" ||
    newParams[key] === "Everywhere"
      ? delete newParams[key] // Remove all parameters that weren't included
      : (newParams[key] = newParams[key] // Format multi-word params & slashes
          .replace(/_/g, " ")
          .replace(/-/g, "/"))
  );

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
