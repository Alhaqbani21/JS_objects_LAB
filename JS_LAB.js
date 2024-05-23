let user = {
  name: 'Abdulaziz',
  email: 'alhaqbani21@gmail.com',
  id: '201833080',
  address: {
    city: 'Dammam',
    zipCode: '32271',
    street: 'King Fahad st',
  },
  skill: ['Problem solving', 'Time managment', 'Leadership'],
  available: false,
  isAvailable: function () {
    return true ? this.available === true : false;
  },
};

console.log(user);

console.log();

console.log(`Name: ${user.name}\n`);

console.log(`Id before: ${user.id}`);
user.id = '2018';
console.log(`Id After: ${user.id}`);

delete user.email;
console.log(user);

console.log(`\navailable = ${user.isAvailable()}`);
user.available = true;
console.log(`\navailable = ${user.isAvailable()}`);

console.log(user.address);

console.log(user.address['city']);
console.log(user.skill[2]);

console.log(user.skill.join(' , '));
