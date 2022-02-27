'use strict';

// 1. Susikurkite skaičių masyva 'numbersArray' su siais nariais: 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20
const numbersArray = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
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

for (let j = 0; j < length4; j++) {
    kvadratu = numbersArray4[j] ** 2;
    console.log(`${numbersArray4[j]} kvadratu = ${kvadratu}`);
}


// 5. Padauginti masyvo narius iš jų index'0 (vietos masyve)
const numbersArray5 = numbersArray.slice();
console.log('numbersArray5 ===', numbersArray5);

let daugyba0 = 0;
const length5 = numbersArray5.length;

for (let k = 0; k < length5; k++) {
    daugyba0 = numbersArray5[k] * numbersArray5[0];
    console.log(`${numbersArray5[k]} * ${numbersArray5[0]}(index[0]) = ${daugyba0}`);
}


// 6. Atrinkti tiktai teigiamų elementų masyvą
const numbersArray6 = numbersArray.slice();
console.log('numbersArray6 ===', numbersArray6);
const positiveArray = [];

const length = numbersArray.length;

for (let l = 0; l < length; l++) {
    if (numbersArray6[l] > 0) {  // (Math.sign(numbersArray[l]) === 1)
        positiveArray.push(numbersArray6[l]);
    }
}
console.log('positiveArray ===', positiveArray);


// 7. Atrinkti tiktai neigiamų elementų masyvą


// 8. Atrinkti tiktai lyginių skaičių masyvą


// 9. Atrinkti tiktai nelyginių skaičių masyvą


// 11. Visas neigiamas vertes masyve padaryti teigiamomis


// 12. Pakelti visas masyvo reikšmes laipsniu 'index'


// 13. Atrinkti tik natūralių skaičių masyvą


// 14. Suapvalinti visas masyvo reikšmes iki sveikų skaičių


// 15. Atrinkti kas antrą elementą


// 16. Atrinkti kas penktą elementą


// 17. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)


// 18. Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą


// 19. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį


// 20. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.


// 21. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.


// 22. Sukurti funkciją, kuri ima masyvą ir išrikiuja jo elementus nuo mažiausio iki didžiausio ir grąžina tą masyvą.

