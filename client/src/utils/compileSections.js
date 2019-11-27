export const compileSections = arr => {
  let newArr = [
    { title: "Details", items: [] },
    { title: "Attributes", items: [] },
    { title: "Medical", items: [] },
    { title: "Behavior", items: [] }
  ];

  const detailsItems = newArr[0].items;
  const attributesItems = newArr[1].items;
  const medicalItems = newArr[2].items;
  const behaviorItems = newArr[3].items;

  // Sort section items into appropriate category
  arr.forEach(item => {

    
    const keys = Object.keys(item);
    keys
      .filter(key => item[key] !== null)
      .forEach(filteredKey => {
        switch (filteredKey) {

          // Medical Category
          case "spayed_neutered":
          case "declawed":
          case "special_needs":
          case "shots_current":
            medicalItems.push({ [filteredKey]: item[filteredKey] });
            break;
          // Behavior Category
          case "house_trained":
          case "children":
          case "dogs":
          case "cats":
            behaviorItems.push({ [filteredKey]: item[filteredKey] });
            break;
          default:
            break;
        }
        //   if (key === "spayed_neutered") {
        //     console.log(key === "spayed_neutered");
        //     medicalItems.push({ [key]: item[key] });
        //   } else if (key === "children" || "house_trained" || "dogs" || "cats") {
        //     console.log(key + " added to behavior");
        //     behaviorItems.push({ [key]: item[key] });
        //   } else {
        //     console.log(key + " not added to anything");
        //   }
      });
  });
  console.log(newArr);
  return newArr.filter(section => section.items.length > 0);
};
