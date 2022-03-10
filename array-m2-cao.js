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


/* 1. Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių. */


/* ---------------------------------------------------------------------------------- */
/* 2. Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce). */


/* ---------------------------------------------------------------------------------- */
/* 3. Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce. */



/* Part 2 (reduce) ========================================================================================= */
/* https://javascript.info/array-methods */

/* 1. Nusikopijuokite array. Kaip matome - šitame masyve yra objektai (o iš objekto pasiimame reikšmę - t.y. property, rašydami objektas.property). Prafiltruojame masyvą, kad rodytų tik pilnamečius. */ // apacioj susije pratimai

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


/* ---------------------------------------------------------------------------------- */
/* 2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"]. */


/* ---------------------------------------------------------------------------------- */
/* 3.  Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę. */


/* ---------------------------------------------------------------------------------- */
/* 4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).
Pvz:
iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
grąžins: {brangiausias: "lemonade", pigausias: "lime"} */