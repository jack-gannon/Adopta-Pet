export const removeFromLocalStorage = (storageKey, itemToRemove) => {
  let storageItem = localStorage.getItem(storageKey);
  if (!storageItem) {
    return;
  } else if (Array.isArray(JSON.parse(storageItem))) {
    let itemArray = JSON.parse(storageItem);
    itemArray = itemArray.filter(item => item.id !== itemToRemove.id);
    console.log(itemArray);
    localStorage.setItem(storageKey, JSON.stringify(itemArray));
    console.log(itemToRemove);
  }
  console.log(
    `${storageItem} is an array? That is ${Array.isArray(
      JSON.parse(storageItem)
    )}`
  );
};
