'use strict';
function createCounter(startValue) {
    let count = startValue;
    return function() {
        return count++;
    };
}
const counter = createCounter(1);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
