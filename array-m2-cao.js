'use strict';

/* Examples */
const nums = [123, 11, 2];
console.log('nums ===', nums);

nums.sort((a, b) => a - b);
console.log('nums ASC ===', nums); // [2, 11, 123]


const cars = ['NISSAN', 'VW', 'AUDI'];
cars.sort((a, b) => b.length - a.length);
console.log('cars DESC ===', cars); // ['NISSAN', 'AUDI', 'VW']


/* Part 1 (sort) ========================================================================================= */
console.log('1 part. Sort: ---------------------------------------------------------');


/* 1. Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok. */
const namesArray = ['Hermione', 'Ron', 'Harry', 'Petunia', 'Dudley'];
console.log('Task 1. namesArray ===', namesArray);

namesArray.sort();
console.log('Task 1. namesArray AZ ===', namesArray);


/* ---------------------------------------------------------------------------------- */
/* 2. Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka. */

// namesArray.sort().reverse();
namesArray.sort((a, b) => b > a ? 1 : -1);
console.log('Task 2. namesArray ZA ===', namesArray);


/* ---------------------------------------------------------------------------------- */
/* 3. Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio). */
const numbersArray = [5, 10, 20, 11, 12, 1, 0, 14, 25];
console.log('Task 3. numbersArray ===', numbersArray);

numbersArray.sort((a, b) => b - a);
console.log('Task 3. numbersArray DESC ===', numbersArray);


/* ---------------------------------------------------------------------------------- */
/* 4. Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių). */
const numbersArrayShort = [10, 5, 20, 4];
console.log('Task 4. numbersArray2 ===', numbersArrayShort);

numbersArrayShort.sort((a, b) => b - a);
const maxNumber = numbersArrayShort[0];

console.log('Task 4. numbersArray2 MAX number ===', maxNumber);

    // 2 way
    // numbersArrayShort.sort((a, b) => a - b);
    // const maxNumber = numbersArrayShort[numbersArrayShort.length-1];

    // 3 way
    //const maxNumber = Math.max.apply(null, numbersArrayShort);
    
/* Part 2 (reduce) ========================================================================================= */
console.log('2 part. Reduce: ---------------------------------------------------------');


/* 1. Parašyk array su penkiais skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių. */
const FiveNumbersArray = [5, 10, 11, 2, 50];
console.log('Task 1. FiveNumbersArray ===', FiveNumbersArray);

const totalFiveNumbers = FiveNumbersArray.reduce((total, num) => total + num, 0);
console.log('Task 1. FiveNumbersArray sum ===', totalFiveNumbers);


/* ---------------------------------------------------------------------------------- */
/* 2. Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce). */
const carsArray = ['BMW', 'MCB', 'VWG', 'Toyota', 'AUDI'];
console.log('Task 2. carsArray ===', carsArray);

// for
let total = 0;
for (let i = 0; i < carsArray.length; i++) {
    if (carsArray[i].length === 3) {
        total++;
    }  
}

// ternary
const howManyWith3Symbols = carsArray.reduce((total, item) => item.length === 3 ? total + 1: total, 0);
console.log('Task 2. carsArray, how many cars with 3 symbols ===', howManyWith3Symbols);

// longer
const howManyWith3Symbols2 = carsArray.reduce((total, item) => {
if (item.length === 3) {
    return total + 1;
} else {
    return total;
}
}, 0);


/* ---------------------------------------------------------------------------------- */
/* 3. Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce. */
const numbersBigArray = [15, 8, 4, 16, 10, 42, 2, 80, 15];
console.log('Task 3. NumbersBigArray ===', numbersBigArray);

// for
let max = 0;
for (let i = 0; i < numbersBigArray.length; i++) {
    if (numbersBigArray[i] > max) {
        max = numbersBigArray[i];
    }    
}
const maxN1 = max;


// math.max
const maxN2 = Math.max(...numbersBigArray);


// math.max reduce
const maxN3 = numbersBigArray.reduce((a, b) => Math.max(a, b), 0);


// reduce long
const maxN4 = numbersBigArray.reduce((total, item) => {
    if (item > total) {
        return total = item;
    } else {
        return total;
    }
}, 0);

// reduce short
const maxN5 = numbersBigArray.reduce((total, item) => item > total ? total = item : total);
console.log('Task 3. Max num4===', maxN5);

// reduce short CAO way
const maxN6 = numbersBigArray.reduce((total, item) => total > item ? total : item);


/* Part 3 (array methods) =============================================================================== */
console.log('3 part. Array methods: ---------------------------------------------------------');
/* https://javascript.info/array-methods */

/* 1. Nusikopijuokite array. Kaip matome - šitame masyve yra objektai (o iš objekto pasiimame reikšmę - t.y. property, rašydami objektas.property). Prafiltruojame masyvą, kad rodytų tik pilnamečius. */

const people = [
    {
        name: "Petras",
        age: "18"
    },
    {
        name: "Jonas",
        age: 15
    },
    {
        name: "Antanas",
        age: 20
    },
    {
        name: "Urtė",
        age: 10
    },
    {
        name: "Diana",
        age: 25
    },
    {
        name: "Ieva",
        age: 16
    }
];

console.group('Task 1. people ===');
console.table(people);
console.groupEnd();
// console.log('Task 1. people ===', people);

const adults = people.filter((peopleObj) => peopleObj.age >= 18);
console.group('Task 1. only adults ===');
console.table(adults);
console.groupEnd();
// console.log('Task 1. only adults ===', adults);


/* ---------------------------------------------------------------------------------- */
/* 2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"]. */

// 1 way
const adultsNames = people.filter((peopleObj) => peopleObj.age >= 18)
.map((peopleObj) => ({name: peopleObj.name}));

// 2 way
const adultsNames2 = people.filter((peopleObj) => peopleObj.age >= 18)
.map(({name}) => ({name}));

// 3 way, cao way, only value without a key
const adultsNames3 = people.filter((peopleObj) => peopleObj.age >= 18)
.map((peopleObj) => peopleObj.name); // cao way, only value without 'name'
console.log('Task 2. adults names ===', adultsNames3);

console.group('Task 2. adults names ===');
console.table(adultsNames);
console.groupEnd();
// console.log('Task 2. adults names ===', adultsNames);


/* ---------------------------------------------------------------------------------- */
/* 3.  Antro pratimo array A-Z tvarka išrikiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę. */


/* ---------------------------------------------------------------------------------- */
/* 4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).
Pvz:
iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
grąžins: {brangiausias: "lemonade", pigausias: "lime"} */