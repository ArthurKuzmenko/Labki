'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('Всі аргументи повинні бути фунціями');
    }
  }

  return x => fns.reduce((v, fn) => fn(v), x);
};
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f1 = pipe(inc, twice, cube);
console.log('f1(5) result:', f1(5));
const f2 = pipe(inc, inc);
console.log('f2(7) result:', f2(7));
try {
  const f3 = pipe(inc, 7, cube);
} catch (e) {
  console.log('Error:', e.message);
}
