"use strict";

/* callbacks =============================================================================== */
/* Kartais vietoj to, kad paduotume paprastą parametrą į funkciją - mes paduodame kitą funkciją. */

/*  Mes šiuo atveju turime dvi funkcijas - callbackFunction ir coreFunction. coreFunction iškviesdami, paduodame du parametrus - mano vardą ir kitą funkciją. coreFunction padidina mano vardą ir jį perduoda callbackFunkcijai. Ši callbackFunkcija consolin'ina mano padidintą vardą.
Būtent šioje situacijoje mes galime turėti kelias callback funkcijas - viena alertina, kita console'ina. Ir paduodame tą, kurios norime.*/

function callbackFunction(text) {
  console.log("Print this: " + text);
}

// function callbackFunction2(text) {
//     console.log('Print this2: ' + text);
// }

function coreFunction(name, cbFn) {
  cbFn(name.toUpperCase());
  console.log("This one prints later");
}

coreFunction("Iveta", callbackFunction);

/* ----------------------------- */

// be parametru
function fn(n1) {
  n1();
}
fn(() => console.log("hi"));

// su parametrais
function fn2(n1) {
  n1(5);
}
fn2((num) => console.log("num ===", num));

/* -------------------------------- */
/* https://www.w3schools.com/js/js_callback.asp */

function myDisplayer(some) {
  console.log("some ===", some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(5, 5, myDisplayer);

/* 1. Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną parametrą - vardą. Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins. O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę, ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia viena iš callback funkcijų. */

function alertName(text) {
  console.log("alert name ===", text);
}

function consoleName(text) {
  console.log("console name ===", text);
}

function coreFunction(name, display) {
  const firstLetterToUpper = name.charAt(0).toUpperCase() + name.slice(1);
  display(firstLetterToUpper);
  //console.log(firstLetterToUpper);
}

coreFunction("iveta", consoleName);
coreFunction("iveta", alertName);

/* array methods =========================================================================== */

/* 1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę). */
const cars = ["BMW", "VW", "Audi"];

// cars.forEach((sk) => {
//     console.log('Task 1. el ===', sk);
// });

cars.forEach((sk) => console.log("Task 1, el ===", sk)); // same

/* 2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.). */

cars.forEach((sk, i) => {
  console.log(`Task 2. ${i}: ${sk}`);
});

/* 3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras"). */
const namesArray = ["hErmioNe", "roN", "HaRRy", "PETUNIA", "dudley"];
console.log("Task 3. Names ===", namesArray);

const newNamesArray = namesArray.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
);
console.log("Task 3. Names fixed  ===", newNamesArray);

/* 4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.*/
const ageArray = [30, 10, 99, 5, 15, 18];
console.log("Task 4. Ages ===", ageArray);

const legalAgeArray = ageArray.filter((age) => age >= 18);
console.log("Task 4. Legal ages ===", legalAgeArray);

/* 5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės. */
const citiesArray = [
  "Vilnius",
  "Kaunas",
  "Klaipeda",
  "Siauliai",
  "panevezys",
  "Utena",
];
console.log("Task 5. Cities ===", citiesArray);

const cityFirstFromK = citiesArray.find((city) => city.charAt(0) === "K");
console.log("Task 5. First city from K ===", cityFirstFromK);

/* 6. Penktame pratime esantį sprendimą pakoreguok ir patikrink su some ar bent vienas miestas prasideda iš mažosios. */
const ifFirstLow = citiesArray.some(
  (city) => city.charAt(0).toLowerCase() === city.charAt(0)
);
console.log("Task 6. If any city starts with lowercase letter ===", ifFirstLow);
// console.log ({ifFirstLow});

ifFirstLow
  ? console.log("Task 6. Yra miestu is mazosios raides")
  : console.log("Task 6. Nera miestu is mazosios raides");

/* 7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios. */
const ifEveryUppercase = citiesArray.every(
  (city) => city.charAt(0).toUpperCase() === city.charAt(0)
);
console.log(
  "Task 7. If every city starts uppercase letter ===",
  ifEveryUppercase
);

ifEveryUppercase
  ? console.log("Task 7. Visi miestai is didziosios raides")
  : console.log("Task 7. Ne visi miestai is didziosios raides");
