const x1 = 50;
const x2 = 'Sveiki';
const x3 = 75;
const x4 = false;

// 1. ar x1 yra daugiau uz 40
if (x1 > 40) {
    console.log(`${x1} > 40`);
} else {
    console.log(`${x1} < 40`);
}

// 2. ar x3 yra maziau uz x1
if (x3 < x1) {
    console.log(`${x3} < ${x1}`);
} else {
    console.log(`${x3} > ${x1}`);
}

// 3. ar x2 yra string tipo?
console.log(typeof x2);  // patikrinu

if (typeof x2 === 'string')  {
    console.log(`${x2} yra string`);
} else {
    console.log(`${x2} nera string`);
}

// 4. ar x4 yra number tipo
console.log(typeof x4);  // patikrinu

if (typeof x4 === 'number')  {
    console.log(`${x4} yra number`);
} else {
    console.log(`${x4} nera number`);
}

// 5. ar x1 yra daugiau uz 20 ir maziau uz 100
if (20 < x1 && x1 < 100) {
    console.log(`${x1} yra daugiau uz 20 ir maziau uz 100`);
} else {
    console.log(`nera`);
}

// 6. ar x1 arba x2 yra String tipo
console.log(typeof x1);
console.log(typeof x2);
if (typeof x1 === 'string' || typeof x2 === 'string') {
    console.log(`${x1} arba ${x2} yra string`);
} else {
    console.log(`Nei ${x1} nei ${x2} nera string`);
}

/* 7 amziaus grupes paduodam i age 10, 25, 70, 110 reiksmes ir isitikinam kad veikia
0-17 - vaikas
18-60 - suauges
61-100 - saulelydis
daugiau nei 100 - nezinau ar tiesa kad naudojiesi kompiuteriu...
paduota neigiama reiksme paverciama teigiama
*/

let age = -60;
age = Math.abs(age);

if (age < 18) {
    console.log(`${age} metu yra vaikas`);

} else if (18 <= age && age <= 60) {         // (age <= 60) uztenka
    console.log(`${age} metu yra suauges`);

} else if (61 <= age && age <= 100) {        // (age <= 100) uztenka
    console.log(`${age} metu yra saulelydis`);

} else {
    console.log(`Jeigu tau ${age}, tai nezinau ar tiesa, kad naudojiesi kompiuteriu`);
}
