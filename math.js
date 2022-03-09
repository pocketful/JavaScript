let number = 1.257;
console.log('number ===', number);

// round
console.log('Math.round(number) ===', Math.round(number)); // rounded to its nearest integer
console.log('Math.ceil(number) ===', Math.ceil(number));   // rounded up to its nearest integer
// console.log(Math.ceil(.95)); - expected output: 1
// console.log(Math.ceil(-7.004)); - expected output: -7
console.log('Math.floor(number) ===', Math.floor(number)); // rounded down to its nearest integer. 
// console.log(Math.floor(5.95)); - expected output: 5
// console.log(Math.floor(-5.05)); - expected output: -6
console.log('Math.trunc(number) ===', Math.trunc(number)); // returns the integer part of x
console.log(`Du sk po kablelio ${number.toFixed(2)}`); // suapvalina du skaiciai po kablelio,bet grazina string

// min max
console.log('Math.min(0, 150, 30, 20, -8, -200) ===', Math.min(0, 150, 30, 20, -8, -200));
console.log('Math.max(0, 150, 30, 20, -8, -200) ===', Math.max(0, 150, 30, 20, -8, -200));

// random
console.log('Math.random(0, 150, 30, 20, -8, -200) ===', Math.random(0, 150, 30, 20, -8, -200));
console.log('Math.random(0, 150, 30, 20, -8, -200) ===', Math.random(0, 150, 30, 20, -8, -200));
console.log('Math.random(0, 150, 30, 20, -8, -200) ===', Math.random(0, 150, 30, 20, -8, -200));

points = Math.random(); // Nuo 0 - 1  console.log(points)
points = Math.random() * 10; // 0 - 10 reikia padauginti is 10

points = Math.floor(Math.random() * 11) + 2; // returns a random integer between 2 and 11 (both included)

// positive 1. negative -1. zero 0
console.log(Math.sign('-3')); // expected output: -1

// absolute value of a number (skaičius be skaičių lydinčio ženklo)
Math.abs(7.25);  /* 7.25 */ Math.abs(-7.25); /* 7.25 */ Math.abs(null); /* 0 */ Math.abs("Hello"); /* NaN */

// exponentiation. returns the value of x to the power of y (kvadratu, laipsniu pakelti)
Math.pow(2, 3); // 2 pakelta 3 = 8
// same as: 
2 ** 3;  // 2 pakelta 3 = 8

// if its an integer 
Number.isInteger(1); /* true */ Number.isInteger(-10); /* true */ Number.isInteger(0.1); /* false */

// Number vs parseInt. Both converts variables to numbers
Number('10 33');  // NaN - neatpazins
parseInt('10 33');  // 10 - grazins pirma skaiciu