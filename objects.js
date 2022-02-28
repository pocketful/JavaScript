'use strict';

const array = ['James', 33, 'male'];
array[0]; // name

const user = {
    name: 'James',
    age: 33,
    gender: 'male',
    sayHi: function() {
        console.log('hi');
    }
};
user.sayHi();

console.log('user object === ', user);

// pasiimti reiksme name
console.log('user object === ', user.name);    // better
console.log('user object === ', user['name']); // good for variables
    // variable padavimas i keyTake
    const keyTake = 'gender';
    console.log('user object === ', user[keyTake]);

// new property
user.hasCar = true;
console.log('user object === ', user);

// print a driver if hasCar
if (user.hasCar === true) {
    console.log(`user ${user.name} has a car and he is a driver`);
}

// array of objects
const users = [
    {
      name: 'Mike',
      town: 'Vilnius',
    },
    {
      name: 'Jane',
      town: 'Vilnius',
    },
    {
      name: 'Boom',
      town: 'Vilnius',
    },
    {
      name: 'Nike',
      town: 'Vilnius',
    },
  ];
  
  // gauti Boom
  console.log(users[2].name);
  
  // visi vardai
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
  }
  // users.forEach()

