let number = 1.257;
console.log('number ===', number);

// round
console.log('Math.round(number) ===', Math.round(number)); // rounded to its nearest integer
console.log('Math.ceil(number) ===', Math.ceil(number));   // rounded up to its nearest integer
console.log('Math.floor(number) ===', Math.floor(number)); // rounded down to its nearest integer
console.log('Math.trunc(number) ===', Math.trunc(number)); // returns the integer part of x

// min max
console.log('Math.min(0, 150, 30, 20, -8, -200) ===', Math.min(0, 150, 30, 20, -8, -200));
console.log('Math.max(0, 150, 30, 20, -8, -200) ===', Math.max(0, 150, 30, 20, -8, -200));

// random
console.log('Math.random(0, 150, 30, 20, -8, -200) ===', Math.random(0, 150, 30, 20, -8, -200));
console.log('Math.random(0, 150, 30, 20, -8, -200) ===', Math.random(0, 150, 30, 20, -8, -200));
console.log('Math.random(0, 150, 30, 20, -8, -200) ===', Math.random(0, 150, 30, 20, -8, -200));


// true false
let age = 40; 
// let age = null;

if (age || age === 0) { // jeigu norim ir 0 itraukti, nes jis siaip false yra
    console.log('age buvo ivestas');

    if (age > 50) {
        console.log('age ivestas ir > 50');
    } else {
        console.log('age ivestas ir < 50');
    }

} else {
    console.log('age neivestas');
}


// paversti reiksme i boolean

let y = 50; 
console.log('y ===', y); // 50
console.log('!!y ===', !y); // false
console.log('!!y ===', !!y); // true
console.log('Boolean(y) ===', Boolean(y)); // true

if (y) {
    // vykdom nes y yra true
}

// Boolean(50) === true
// !50 === false
// !!50 === true
