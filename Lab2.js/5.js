const member = [
    { name: 'Arthur', phone: '+380972234788' },
    { name: 'Joe Biden', phone: '+380932769418' }
]

const findPhoneByName1 = (name) => {
    for (const obj of member) {
        if (obj.name === name) return obj.phone;
    }
};

const hash_table = {
    Alina: '+380972234788',
    Rafael Mo: '+380932769418'
};

const findPhoneByName2 = (name) => hash_table[name];
