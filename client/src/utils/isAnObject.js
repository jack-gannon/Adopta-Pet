export const isAnObject = itemToTest => {
  return Object.prototype.toString.call(itemToTest) === "[object Object]";
};
