'use strict';

function seq(fn) {
  const funcs = [];
  if (typeof fn === 'function') funcs.push(fn);

  function chain(next) {
    if (typeof next === 'function') {
      funcs.push(next);
      return chain;
    } else {
      let res = next;
      for (const f of funcs.reverse()) {
        res = f(res);
      }
      return res;
    }
  }

  return chain;
}
console.log(seq(x => x + 10)(x => x * 5)(3));      //25
console.log(seq(x => x * 5)(x => x + 10)(3));      //65
console.log(seq(x => x + 5)(x => x * 10)(x => x / 4)(x => x - 2)(10));    //25
