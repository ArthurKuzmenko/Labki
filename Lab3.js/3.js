let IP = '127.0.0.1';
let arr = IP.split('.').map(Number); 

function move(arr){
    let res = 0;
    let a = 3;
    for(let i = 0; i < 4; i++){
        res += arr[i] << (8 * a);
        a -= 1;
    }
    return res;
}

console.log(move(arr));
