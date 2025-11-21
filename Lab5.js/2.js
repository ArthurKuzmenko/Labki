'use strict';

function array() {
  const arr = [];

  function access(i) {
    return arr[i];
  }

  access.art = function(value) {
    arr.push(value);
  };

  access.kuz = function() {
    return arr.pop();
  };

  return access;
}

const IM = array();

IM.art('KPI');
IM.art('IM-55');
IM.art('MyLittlePony');

console.log(IM(0));
console.log(IM(1));
console.log(IM(2));

console.log('');

console.log(IM.kuz());
console.log(IM.kuz());
console.log(IM.kuz());

console.log('');

console.log(IM.kuz());
