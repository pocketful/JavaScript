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