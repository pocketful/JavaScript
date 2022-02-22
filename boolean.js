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


// CAO. True or false

2 === 2         // true
2 == "2"        // true  
2 !== 2         // false // not equal value or not equal type
5 < 5           // false
5 >= 4          // true
true !== false  // true
9 - 5 === 4     // true
5 * 5 !== "25"  // true 
true && true    // true    
2 === 5 && true // false
6 * 6 === 36 && 15 - 9 == "6"           // true
false || false                          // false
10 === 10 || 5 == 2                     // true
2 * 2 / 2 == "1" || 5 * 5 === 25        // true
14 * 2 !== "28" || "Jonas" == "Jonas"   // true   
10 && 15 > 10                           // true
"Petras" && 0                           // false
("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13) // true     
"jonas" === "Jonas"                     // false
"Petras" + 5 === "Petras" + "5"         // true
"Jonas" + 5 + 5 === "Jonas10"           // false
5 + 10 + "Antanas" === "15Antanas"      // true    string ?
2 + 1 + "Jonas" + 3 + 2 === "3Jonas5"   // false   3Jonas32
10 % 1 === 1        // false
5 * "5" === 25      // true 25 number ?

true || false  // true
true && false  // false