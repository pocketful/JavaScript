'use strict';

/* loop object ---------------------------------------------------------------------------------- */
// https://javascript.info/keys-values-entries
// https://flexiple.com/loop-through-object-javascript/
// Object.keys(obj) // – returns an array of keys.
// Object.values(obj) // – returns an array of values.
// Object.entries(obj) // – returns an array of [key, value] pairs.

// for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

import { user } from './modules/data.js';
// console.log('user ===', user); // {name: 'Mike', age: 25, hasCar: true}

/* for in -------------------------------------------------------------------------------------- */

// iterate object keys
for (let key in user) {
  console.log('user key ===', key);
}

// object keys to array
const keysArr = [];
for (let key in user) {
  keysArr.push(key);
}
console.log('keysArr ===', keysArr);

// iterate object values
for (let key in user) {
  console.log('user value ===', user[key]);
}

// object values to array
const valuesArr = [];
for (let key in user) {
  valuesArr.push(user[key]);
}
console.log('valuesArr ===', valuesArr);

/* -------------------------------------------------------------------------------------- */
// object keys to array
const objKeys = Object.keys(user);
console.log('objKeys ===', objKeys); // ['name', 'age', 'hasCar']

// object values to array
const objValues = Object.values(user);
console.log('objValues ===', objValues); // ['Mike', 25, true]

// object properties to array
const objEntries = Object.entries(user);
console.log('objEntries ===', objEntries);
/* [Array(2), Array(2), Array(2)] 
   0: (2) ['name', 'Mike']
   1: (2) ['age', 25]
   2: (2) ['hasCar', true]  */

/* -------------------------------------------------------------------------------------- */
// from objEntries get age
console.log('objEntries[1][1] age ===', objEntries[1][1]);

/* -------------------------------------------------------------------------------------- */
import { errors1, newUserObj } from './modules/data.js';
console.log('errors1 ===', errors1);
// errors1 === {name: '', password: '', town: 'cant be blank'}
console.log('newUserObj ===', newUserObj);
// newUserObj === {username: 'Mike545', password: '123456', gender: 'male', country: ''}

import {
  checkErrors,
  checkErrorsIncludes,
  checkErrorsSome,
  isInputOk,
} from './modules/helper.js';
const checkErrorsResult = checkErrors(errors1);
console.log('checkErrorsResult', checkErrorsResult);
const checkErrorsSomeResult = checkErrorsSome(errors1);
console.log('checkErrorsSomeResult', checkErrorsSomeResult);
const checkErrorsIncludesResult = checkErrorsIncludes(errors1);
console.log('checkErrorsIncludesResult', checkErrorsIncludesResult);

const res1 = isInputOk(''); // 'cant be blank'
console.log('isInputOk()', res1);
const res2 = isInputOk('ab'); // 'must be longer then 3'
console.log('isInputOk()', res2);
const res3 = isInputOk('123456'); // undefined'
console.log('isInputOk()', res3);
const res4 = isInputOk('1234567'); // 'cant be longer than 6'
console.log('isInputOk()', res4);

import PersonEs6 from './modules/personEs6.js';
import PersonEs5 from './modules/personEs5.js';
const person1 = new PersonEs6('Mike', 26);
console.log('person1 ES6 ===', person1);
person1.sayHi();

const person2 = new PersonEs5('Jane', 30);
person2.sayHi();
console.log('person2 ES5 ===', person2);

/* -------------------------------------------------------------------------------------- */
// https://edabit.com/challenge/9KEKJG5PZTFmG3Zau
/* Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

addName({}, "Brutus", 300) ➞ { Brutus: 300 }
addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 } */

function addName(obj, name, value) {
  return { ...obj, [name]: value };
  //obj[name] = value;
  //return obj;
}

const results1 = addName({}, 'Brutus', 300);
console.log('results1', results1);
const results2 = addName({ piano: 500 }, 'Brutus', 400);
console.log('results2', results2);
const results3 = addName({ piano: 500, stereo: 300 }, 'Caligula', 440);
console.log('results3', results3);

// add new property to the object
// user.hasCar = true;
// console.log('user object === ', user);

/* -------------------------------------------------------------------------------------- */
// Object.assign()
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// Later sources' properties overwrite earlier ones.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target); // true

// example mine
const result = Object.assign(result.DailyForecasts, result.Headline);

// Object.assign(target, ...sources)
