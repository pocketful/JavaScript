'use strict';

/* callbacks =============================================================================== */
/* Kartais vietoj to, kad paduotume paprastą parametrą į funkciją - mes paduodame kitą funkciją. */

/*  Mes šiuo atveju turime dvi funkcijas - callbackFunction ir coreFunction. coreFunction iškviesdami, paduodame du parametrus - mano vardą ir kitą funkciją. coreFunction padidina mano vardą ir jį perduoda callbackFunkcijai. Ši callbackFunkcija consolin'ina mano padidintą vardą.
Būtent šioje situacijoje mes galime turėti kelias callback funkcijas - viena alertina, kita console'ina. Ir paduodame tą, kurios norime.*/

function callbackFunction(text) {
    console.log('Print this: ' + text);
}

// function callbackFunction2(text) {
//     console.log('Print this2: ' + text);
// }

function coreFunction(name, cbFn) {
    cbFn(name.toUpperCase());
    console.log('This one prints later');
}

coreFunction('Iveta', callbackFunction);

/* ----------------------------- */

// be parametru
function fn(n1) {
    n1();
}
fn(() => console.log('hi'));

// su parametrais
function fn2(n1) {
    n1(5);
}
fn2((num) => console.log(`num ===', num`));

/* -------------------------------- */
/* https://www.w3schools.com/js/js_callback.asp */

function myDisplayer(some) {
    console.log(`some ===', some`);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplayer);


/* 1. Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną parametrą - vardą. Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins. O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę, ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti). */


/* array methods =========================================================================== */

/* 1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę). */
const cars = ["BMW", "VW", "Audi"];


/* 2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.). */


/* 3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").


/* 4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.*/


/* 5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės. */


/* 6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios. */


/* 7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios. */