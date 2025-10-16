const fn = () => {
  const obj1 = { name: 'Joe' };
  let obj2 = { name: 'Joe' };

  obj1.name = 'Biden';
  obj2.name = 'Biden';

  obj2 = { name: 'Joe Biden' };
};

const createUser = (name, city) => {
    return { name: name, city: city };
};

console.log(createUser('Joe Biden', 'Washington'))
