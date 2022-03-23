let number = 1.257;

// round
Math.round(number); // rounded to its nearest integer
Math.ceil(number); // rounded up to its nearest int 1.4 >> 2;  ||  .95 >> 1;  ||  -7.004 >> -7
Math.floor(number); // rounded down to its nearest integer. 1.6 >> 1;  ||   5.95 >> 5;  ||  -5.05 >> -6
Math.trunc(number); // returns the integer part of x
number.toFixed(2); // suapvalina iki du skaiciai po kablelio, bet grazina string.  1.257 >> 1.26 

Math.min(0, 150, 30, 20, -8, -200); // min -200
Math.max(0, 150, 30, 20, -8, -200); // max 150
Math.max(...numbersArray);

// random
Math.random(); // returns random number between 0 (included) and 1 (excluded) >> 0.739537819723959
Math.random() * 10; // 0 - 10 reikia padauginti is 10
Math.floor(Math.random() * 10); // a random integer between 0 and 9 (9 included) >> 0, 1,...9
Math.floor(Math.random() * 10) + 1; // a random integer between 1 and 10 (10 included) >> 1, 2,...10

// positive 1. negative -1. zero 0
Math.sign('-3'); // expected output: -1

// absolute value of a number (skaičius be skaičių lydinčio ženklo)
Math.abs(7.25); /* 7.25 */ Math.abs(-7.25); /* 7.25 */ Math.abs(null); /* 0 */ Math.abs("Hello"); /* NaN */

// exponentiation. returns the value of x to the power of y (kvadratu, laipsniu pakelti)
Math.pow(2, 3); // 2 pakelta 3 = 8
// same as: 
2 ** 3;  // 2 pakelta 3 = 8

// if its an integer 
Number.isInteger(1); /* true */ Number.isInteger(-10); /* true */ Number.isInteger(0.1); /* false */

// Number vs parseInt. Both converts variables to numbers
Number('10 33');  // NaN - neatpazins
parseInt('10 33');  // 10 - grazins pirma skaiciu