'use strict';
function unique(array) {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
const result1 = unique([2, 1, 1, 3, 2]);
console.log(result1);
const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2);
const result3 = unique(['key', 'betten', 'key', 'left']);
console.log(result3);
module.exports = { unique };
