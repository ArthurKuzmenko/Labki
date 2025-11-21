'use strict';
const removeElements = (array, ...items) => {
  for (const item of items) {
    const i = array.indexOf(item);
    if (i !== -1) array.splice(i, 1);
  }
};
const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1);
const array2 = ["Kiev", "Beijing", "Lima", "Astana"];
removeElements(array2, "Lima", "Berlin", "Kiev");
console.log(array2);
module.exports = { removeElements };
