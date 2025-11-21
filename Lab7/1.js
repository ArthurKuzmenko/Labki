'use strict';
function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
const array2 = ['Kiev', 'Beijing', 'Lima', 'Astana'];
removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');
console.log(array2);
module.exports = { removeElement };
