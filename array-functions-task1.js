'use strict';

// 1. Susikurkite skaičių masyva 'numbersArray' su siais nariais: 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20

const numbersArray = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
// const numbersArray = [2, '12', 'aaa', Infinity, 28.55, 49, -17.56, 19, 42, -14, -10, 20];
console.log('numbersArray ===', numbersArray);


// 2. Sekančias užduotis atlikti su naujais masyvais(kopijomis)
// 3. Padauginti masyvo narius iš 2
const numbersArray3 = numbersArray.slice();
const length3 = numbersArray3.length;

for (let i = 0; i < length3; i++) {
    numbersArray3[i] = numbersArray3[i] * 2;
}
console.log('numbersArray3 (* 2)===', numbersArray3);

    // This example multiplies each array value by 2:
    const numbersArray3F = numbersArray.map(myFunction);

    function myFunction(value) {
        return value * 2;
    }
    console.log('numbersArray3F (* 2) ===', numbersArray3F);


// 4. Pakelti masyvo narius kvadratu

const numbersArray4 = numbersArray.slice();
const length4 = numbersArray4.length;

for (let i = 0; i < length4; i++) {
    numbersArray4[i] = numbersArray4[i] ** 2;
}
console.log('numbersArray4 (kvadratu) ===', numbersArray4);


// 5. Padauginti masyvo narius iš jų index'0 (vietos masyve)

const numbersArray5 = numbersArray.slice();
const length5 = numbersArray5.length;

for (let i = 0; i < length5; i++) {
    numbersArray5[i] = numbersArray5[i] * i;
}
console.log('numbersArray5 (* index) ===', numbersArray5);


// 6. Atrinkti tiktai teigiamų elementų masyvą

const numbersArray6 = numbersArray.slice();
const positiveArray6 = [];
const length6 = numbersArray6.length;

for (let i = 0; i < length6; i++) {
    if (numbersArray6[i] > 0) {  // (Math.sign(numbersArray6[l]) === 1)
        positiveArray6.push(numbersArray6[i]);
    }
}
console.log('positiveArray6 (positive) ===', positiveArray6);


// 7. Atrinkti tiktai neigiamų elementų masyvą

const numbersArray7 = numbersArray.slice();
const negativeArray7 = [];
const length7 = numbersArray7.length;

for (let i = 0; i < length7; i++) {
    if (numbersArray7[i] < 0) {  // (Math.sign(numbersArray7[k]) === -1)
        negativeArray7.push(numbersArray7[i]);
    }
}
console.log('negativeArray7 (negative) ===', negativeArray7);


// 8. Atrinkti tiktai lyginių skaičių masyvą

const numbersArray8 = numbersArray.slice();
const evenArray8 = [];
const length8 = numbersArray8.length;

for (let i = 0; i < length8; i++) {
    if (numbersArray8[i] % 2 === 0) {
        evenArray8.push(numbersArray8[i]);
    }
}
console.log('evenArray8 (even) ===', evenArray8);


// 9. Atrinkti tiktai nelyginių skaičių masyvą

const numbersArray9 = numbersArray.slice();
const oddArray9 = [];
const length9 = numbersArray9.length;

for (let i = 0; i < length9; i++) {
    if (numbersArray9[i] % 2 !== 0) {
        oddArray9.push(numbersArray9[i]);
    }
}
console.log('oddArray9 (odd) ===', oddArray9);


// 11. Visas neigiamas vertes masyve padaryti teigiamomis

const numbersArray11 = numbersArray.slice();
const length11 = numbersArray11.length;

for (let i = 0; i < length11; i++) {
    numbersArray11[i] = Math.abs(numbersArray11[i]);
}
console.log('numbersArray11 (absolute) ===', numbersArray11);


// 12. Pakelti visas masyvo reikšmes laipsniu 'index'

const numbersArray12 = numbersArray.slice();
// let laipsniuIndex = 0;
const length12 = numbersArray12.length;

for (let i = 0; i < length12; i++) {
    numbersArray12[i] = numbersArray12[i] ** i;
    // numbersArray12[i] = Math.pow(numbersArray12[i], i); 

    // let number = numbersArray12[i];
    // laipsniuIndex = numbersArray12[i] ** i;
    // console.log(`${number} pakelta ${i} laipsniu = ${laipsniuIndex}`);
}
console.log('numbersArray12 (** i) ===', numbersArray12);


// 13. Atrinkti tik natūralių skaičių masyvą
/* Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
No negative numbers and no fractions. */

const numbersArray13 = numbersArray.slice();
const naturalArray13 = [];
const length13 = numbersArray13.length;

for (let i = 0; i < length13; i++) {
    if (Number.isInteger(numbersArray13[i]) && numbersArray13[i] > 0) {
        naturalArray13.push(numbersArray13[i]);
    }
}
console.log('naturalArray13 (natural) ===', naturalArray13);

// const numbersArray = [2, '12', 'aaa', Infinity, 28.55, 49, -17.56, 19, 42, -14, -10, 20];
// let item = numbersArray13[i];
// if (typeof(item) === 'number' && item > 0 && Math.floor(item) === item && item !== Infinity) {


// 14. Suapvalinti visas masyvo reikšmes iki sveikų skaičių
const numbersArray14 = numbersArray.slice();
const length14 = numbersArray14.length;

for (let i = 0; i < length14; i++) {
    numbersArray14[i] = Math.round(numbersArray14[i]);
}
console.log('numbersArray14 (integers) ===', numbersArray14);


// 15. Atrinkti kas antrą elementą

const numbersArray15 = numbersArray.slice();
const everySecondArray15 = [];
const length15 = numbersArray15.length;

for (let i = 0; i < length15; i += 2) {  // if (i%2 === 0)      
    everySecondArray15.push(numbersArray15[i]);
}
console.log('everySecondArray15 (every second) ===', everySecondArray15);


// 16. Atrinkti kas penktą elementą

const numbersArray16 = numbersArray.slice();
const everyFifthArray16 = [];
const length16 = numbersArray16.length;

for (let i = 0; i < length16; i += 5) {     // if i%5 === 0
    everyFifthArray16.push(numbersArray16[i]);
}
console.log('everyFifthArray16 (every fifth) ===', everyFifthArray16);


/* -------------------------- Functions ------------------------------- */
// 17. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)
/*
const numbersArray17 = numbersArray.slice();
const length17 = numbersArray17.length;

for (let i = 0; i < length17; i++) {
    console.log(`[${[i]}] => ${numbersArray17[i]}`);
}
*/

function print(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        console.log(`[${[i]}] => ${array[i]}`);
    }
}
print(numbersArray);


// 18. Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą

function sum(array) {
    let sum = 0;
    const length = array.length;
    for (let i = 0; i < length; i++) {
        sum += array[i];
    }

    return sum;
}
sum(numbersArray);
console.log('sum === ', sum(numbersArray));


// 19. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį

function average(array) {
    let sum = 0;
    const length = array.length;
    for (let i = 0; i < length; i++) {
        sum += array[i];
    }
    const average = sum / length;

    return average;
}
average(numbersArray);
console.log('average === ', average(numbersArray));


// 20. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.

function maxNumber(array) {
    const max = Math.max(...array);
    // const max = Math.max.apply(null, array); // old way

    return max;
}
maxNumber(numbersArray);
console.log('max number === ', maxNumber(numbersArray));


// 21. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.

function minNumber(array) {
    const min = Math.min(...array);
    // const min = Math.min.apply(null, array); // old way

    return min;
}
minNumber(numbersArray);
console.log('min number === ', minNumber(numbersArray));


// 22. Sukurti funkciją, kuri ima masyvą ir išrikiuja jo elementus nuo mažiausio iki didžiausio ir grąžina tą masyvą.

function sort(array) {
    const sorted = array.sort(function (a, b) {
        return a - b;
    });

    return sorted;
}
sort(numbersArray);
console.log('sorted ===', sort(numbersArray));
