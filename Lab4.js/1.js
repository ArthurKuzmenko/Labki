'use strict'

const sumFor = (...args) => {
    let res = 0;
    for (let i = 0; i < args.length; i++) {
        res += args[i];
    }
    return res;
}

const sumForOf = (...args) => {
    let res = 0;
    for (const num of args) {
        res += num;
    }
    return res;
}

const sumWhile = (...args) => {
    let res = 0;
    while (args.length > 0) {
        res += args.pop();
    }
    return res;
}

const sumDoWhile = (...args) => {
    let res = 0;
    if (args.length === 0) {
        return res;
    }
    let i = 0;
    do {
        res += args[i];
        i++;
    } while (i < args.length);
    return res;
}

const sumReduce = (...args) => {
    return args.reduce((acc, arg) => acc + arg, 0);
}

console.log("Cycle For: \n" + sumFor(1, 2, 3, 4, -5)); 
console.log(sumFor() + "\n");

console.log("Cycle For Of: \n" + sumForOf(1, 2, 3, 4, -5));
console.log(sumForOf() + "\n");

console.log("Cycle While: \n" + sumWhile(1, 2, 3, 4, -5));
console.log(sumWhile() + "\n");

console.log("Cycle Do While: \n" + sumDoWhile(1, 2, 3, 4, -5));
console.log(sumDoWhile() + "\n");

console.log("Array Reduce: \n" + sumReduce(1, 2, 3, 4, -5));
console.log(sumReduce() + "\n");