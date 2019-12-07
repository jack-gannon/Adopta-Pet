export const addToLocalStorage = (storageKey, itemToStore) => {
  let storageItem = localStorage.getItem(storageKey);
  if (!storageItem) {
    localStorage.setItem(storageKey, itemToStore);
  } else if (Array.isArray(JSON.parse(storageItem))) {
    let itemArray = JSON.parse(storageItem);
    console.log(itemArray);
    itemArray.push(itemToStore);
    console.log(itemArray);
    localStorage.setItem(storageKey, JSON.stringify(itemArray));
    console.log(JSON.stringify(itemArray));
  }
  console.log(
    `${storageItem} is an array? That is ${Array.isArray(
      JSON.parse(storageItem)
    )}`
  );
};
