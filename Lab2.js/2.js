const range = (start,end) =>{
    const result = [];
    for (let n = start; n <= end; n++) { 
        result.push(n);
    }
    return result;
}
console.log(range(15,30))

const rangeOdd = (start,end) =>{
    const result = [];
    for (let n = start;n <= end;n++) {
        if (n % 2 !==0) {
            result.push(n);
        }
    }
    return result;
}

console.log(rangeOdd(15,30));
