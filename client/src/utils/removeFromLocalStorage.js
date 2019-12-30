import { isAnObject } from "./isAnObject";

export const removeFromLocalStorage = (storageKey, itemKey) => {
  let storageItem = JSON.parse(localStorage.getItem(storageKey));
  if (!storageItem) {
    return;
  } else if (Array.isArray(storageItem)) {
    let itemArray = storageItem;
    itemArray = itemArray.filter(item => item.id !== itemKey);
    localStorage.setItem(storageKey, JSON.stringify(itemArray));
  } else if (isAnObject(storageItem)) {
    let itemObject = storageItem;
    if (!itemObject[itemKey]) {
      console.log("could not find " + itemObject[itemKey]);
      return;
    } else {
      delete itemObject[itemKey];
      localStorage.setItem(storageKey, JSON.stringify(itemObject));
    }
  }
};
