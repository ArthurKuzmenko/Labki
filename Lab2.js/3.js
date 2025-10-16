const average = (a,b) => {
    return(a+b)/2
} 
const square = (x) => {
    return x * x 
}
const cube = (x) => {
    return x * x * x
}
const calculate = () => {
    const results = [];
    for (let n = 0; n <= 9; n++) {
        const sq = square(n);
        const cb = cube(n);
        const avg = average(sq,cb);
        results.push(avg);
    }
    return results;
}

console.log(calculate());
