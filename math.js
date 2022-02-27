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
console.log(`Du sk po kablelio ${number.toFixed(2)}`); // suapvalina du skaiciai po kablelio

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