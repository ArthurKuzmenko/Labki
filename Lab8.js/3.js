'use strict';
const contract = (fn, ...types) => {
  const returnType = types.pop();
  return (...args) => {
    if (args.length !== types.length) {
      throw new TypeError('Invalid number of arguments');
    }
    args.forEach((arg, index) => {
      const expectedType = types[index];
      if (arg.constructor !== expectedType) {
        throw new TypeError(`Argument at index ${index} expected to be a ${expectedType.name}`);
      }
    });
    const result = fn(...args);
    if (result.constructor !== returnType) {
      throw new TypeError(`Result expected to be ${returnType.name}`);
    }
    return result;
  };
};
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Артур ', 'Кузьменко');
console.dir(res2);
try {
  addNumbers(2, 'Якийсь текст');
} catch (error) {
  console.error('Error caught:', error.message);
}
module.exports = { contract };
