'use strict';

const old = (persons) => {
    const resObj = {};
    for (const per in persons) {
        resObj[per] = persons[per].died - persons[per].born;
    }
    return resObj;
}

const persons = {
  GenghisKhan: { born: 1162, died: 1227 },
  Darwin: { born: 1809, died: 1882 },
  Rockefeller: { born: 1839, died: 1937 },
  Shevchenko: { born: 1814, died: 1861 },
};

console.log(old(persons));