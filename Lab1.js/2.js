function increment(data) {
  data.count++;
}

const object = { count: 37 };
increment(object);
console.dir(object);
