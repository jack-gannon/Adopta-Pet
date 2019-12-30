import { isAnObject } from "./isAnObject";

export const addToLocalStorage = (storageKey, itemToStore, itemKey) => {
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
  } else if (isAnObject(JSON.parse(storageItem))) {
    let itemObject = JSON.parse(storageItem);
    itemObject[itemKey] = itemToStore;
    localStorage.setItem(storageKey, JSON.stringify(itemObject));
  }
};
