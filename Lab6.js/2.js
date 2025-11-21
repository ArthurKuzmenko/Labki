'use strict';

const composeSafe = (...fns) => {
  const handlers = [];
  const fn = x => {
    try {
      return fns.reduceRight((v, f) => f(v), x);
    } catch (e) {
      handlers.forEach(h => h(e));
      return undefined;
    }
  };
  fn.on = (event, handler) => {
    if (event === 'error') handlers.push(handler);
  };
  return fn;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const bad = () => { throw new Error('fail'); };

const f = composeSafe(cube, twice, inc);
console.log(f(2)); 

const g = composeSafe(cube, bad, inc);
g.on('error', e => console.log('Handled:', e.message));

console.log(g(3));
