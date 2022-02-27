'use strict';

// 1. Susikurkite skaičių masyva 'numbersArray' su siais nariais: 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20
const numbersArray = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
// const numbersArray = [2, '12', 'aaa', Infinity, 28.55, 49, -17.56, 19, 42, -14, -10, 20];
console.log('numbersArray ===', numbersArray);                               


// 2. Sekančias užduotis atlikti su naujais masyvais(kopijomis)
// 3. Padauginti masyvo narius iš 2
const numbersArray3 = numbersArray.slice();
console.log('numbersArray3 ===', numbersArray3); 

let daugyba = 0;
const length3 = numbersArray3.length;

for (let i = 0; i < length3; i++) {
    daugyba = numbersArray3[i] * 2;
    console.log(`${numbersArray3[i]} * 2 = ${daugyba}`);
}


// 4. Pakelti masyvo narius kvadratu
const numbersArray4 = numbersArray.slice();
console.log('numbersArray4 ===', numbersArray4); 

let kvadratu = 0;
const length4 = numbersArray4.length;

for (let i = 0; i < length4; i++) {
    kvadratu = numbersArray4[i] ** 2;
    console.log(`${numbersArray4[i]} kvadratu = ${kvadratu}`);
}


// 5. Padauginti masyvo narius iš jų index'0 (vietos masyve)
const numbersArray5 = numbersArray.slice();
console.log('numbersArray5 ===', numbersArray5);

let daugybaIndex = 0;
const length5 = numbersArray5.length;

for (let i = 0; i < length5; i++) {
    daugybaIndex = numbersArray5[i] * i; // numbersArray5[i] * numbersArray5[0] ?    
    console.log(`${numbersArray5[i]} * ${i} = ${daugybaIndex}`);
}


// 6. Atrinkti tiktai teigiamų elementų masyvą
const numbersArray6 = numbersArray.slice();
console.log('numbersArray6 ===', numbersArray6);
const positiveArray6 = [];

const length6 = numbersArray6.length;

for (let i = 0; i < length6; i++) {
    if (numbersArray6[i] > 0) {  // (Math.sign(numbersArray6[l]) === 1)
        positiveArray6.push(numbersArray6[i]);
    }
}
console.log('positiveArray6 ===', positiveArray6);


// 7. Atrinkti tiktai neigiamų elementų masyvą
const numbersArray7 = numbersArray.slice();
console.log('numbersArray7 ===', numbersArray7);
const negativeArray7 = [];

const length7 = numbersArray7.length;

for (let i = 0; i < length7; i++) {
    if (numbersArray7[i] < 0) {  // (Math.sign(numbersArray7[k]) === -1)
        negativeArray7.push(numbersArray7[i]);
    }
}
console.log('negativeArray7 ===', negativeArray7);


// 8. Atrinkti tiktai lyginių skaičių masyvą
const numbersArray8 = numbersArray.slice();
console.log('numbersArray8 ===', numbersArray8);
const evenArray8 = [];

const length8 = numbersArray8.length;

for (let i = 0; i < length8; i++) {
    if (numbersArray8[i] % 2 === 0) {
        evenArray8.push(numbersArray8[i]);
    }
}
console.log('evenArray ===', evenArray8);


// 9. Atrinkti tiktai nelyginių skaičių masyvą
const numbersArray9 = numbersArray.slice();
console.log('numbersArray9 ===', numbersArray8);
const oddArray9 = [];

const length9 = numbersArray9.length;

for (let i = 0; i < length9; i++) {
    if (numbersArray9[i] % 2 !== 0) {
        oddArray9.push(numbersArray9[i]);
    }
}
console.log('oddArray ===', oddArray9);


// 11. Visas neigiamas vertes masyve padaryti teigiamomis
const numbersArray11 = numbersArray.slice();
console.log('numbersArray11 ===', numbersArray11);

const length11 = numbersArray11.length;

for (let i = 0; i < length11; i++) {
    numbersArray11[i] = Math.abs(numbersArray11[i]);
}
console.log('numbersArray11 absolute value ===', numbersArray11);


// 12. Pakelti visas masyvo reikšmes laipsniu 'index'
const numbersArray12 = numbersArray.slice();
console.log('numbersArray12 ===', numbersArray12);

let laipsniuIndex = 0;
const length12 = numbersArray12.length;

for (let i = 0; i < length12; i++) {
    let number = numbersArray12[i];
    laipsniuIndex = numbersArray12[i] ** i;
    // laipsniuIndex = Math.pow(numbersArray12[i], i); 
    console.log(`${number} pakelta ${i} laipsniu = ${laipsniuIndex}`);
}
console.log('numbersArray12 ===', numbersArray12);


// 13. Atrinkti tik natūralių skaičių masyvą

/* Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
No negative numbers and no fractions. */

const numbersArray13 = numbersArray.slice();
console.log('numbersArray13 ===', numbersArray13);

const naturalArray13 = [];
const length13 = numbersArray13.length;

for (let i = 0; i < length13; i++) {
    if (Number.isInteger(numbersArray13[i]) && numbersArray13[i] > 0 ) {
        naturalArray13.push(numbersArray13[i]);
    }
}
console.log('naturalArray13 ===', naturalArray13);

// const numbersArray = [2, '12', 'aaa', Infinity, 28.55, 49, -17.56, 19, 42, -14, -10, 20];
// let item = numbersArray13[i];
// if (typeof(item) === 'number' && item > 0 && Math.floor(item) === item && item !== Infinity) {


// 14. Suapvalinti visas masyvo reikšmes iki sveikų skaičių


// 15. Atrinkti kas antrą elementą


// 16. Atrinkti kas penktą elementą


// 17. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)


// 18. Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą


// 19. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį


// 20. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.


// 21. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.


// 22. Sukurti funkciją, kuri ima masyvą ir išrikiuja jo elementus nuo mažiausio iki didžiausio ir grąžina tą masyvą.

