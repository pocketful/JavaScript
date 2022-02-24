"use strict";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// condition ? exprIfTrue : exprIfFalse

let gender = 'female';
let ats;

// 1 way
if (gender === 'male') {
    ats = 'vyras';
} else {
    ats = 'moteris';
}

// 2 way
gender === 'male' ? ats = 'vyras' : ats = 'moteris'

// 3 way
ats = gender === 'male' ? 'vyras' : 'moteris'
// ats = gender === 'male' ? '' : 'moteris'  // jei nera atvejo tai '' arba null. 
// panaudojimas pvz reacte, jeigu norim priskirti klase, jeigu main page, tada active class

console.log(`Jus esate ${ats}`);


/* ------------------------------------------------------------- */
// sukurti boolean kintamaji isItRaining
// parasyti su ternary operatorium ar dabar lyja ar giedra

const isItRaining = false;
let answer;

// 1 way
if (isItRaining === true) {
    answer = 'lyja';
} else {
    answer = 'giedra;'
}

// 2 way
isItRaining ? answer = 'lyja' : answer = 'giedra'

// 3 way
answer = isItRaining ? 'lyja' : 'giedra'

console.log(`Siandien ${answer}`);

// arba tiesiog
const isItRainingg = false;
isItRainingg ? console.log(`Siandien lyjaa`) : console.log(`Siandien giedraa`)
// isItRainingg == true ? console.log(`Siandien lyjaa`) : console.log(`Siandien giedraa`) // tas pats

/* ------------------------------------------------------------- */
// susikurti buildingArea kintamaji
// ternary operator
// jei reiksme > 500 tai atspausdinam "large building"
// jei reiksme < 500 tai atspausdinam "medium building"

let buildingArea = 100;
let size = buildingArea > 500 ? 'large building' : 'medium building';
console.log(`This is ${size}`);


/* ------------------------------------------------------------- */
// nested ternary

let isRainny = false;
let isSunny = false;
let isCloudy = true;
let weather;

// 1 way
if (isRainny === true) {
    weather = 'lyja';
} else if (isSunny === true) {
    weather = 'sauleta';
} else {
    weather = 'debesuota';
}
console.log(`Siandien ${weather}`);

// 2 way, nested
const weatherr = isRainny === true ? 'lyja' : isSunny === true ? 'sauleta' : 'debesuota';
console.log(`Siandienn ${weatherr}`);

// formatted
const weatherrr = 
isRainny === true 
? 'lyja' 
: isSunny === true 
? 'sauleta' 
: 'debesuota';
console.log(`Siandiennn ${weatherrr}`);


/* CAO */ /* ----------------------------------------------------------- */
/* Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name". */

const name = 'iveta';

if (name.length < 5) {
    console.log('Short name');
} else {
    console.log('Long name');
}

name.length < 5 ? console.log('Short name') : console.log('Long name')

/* CAO */ /* ----------------------------------------------------------- */
/* Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'. */

const clientAge = 1;
const legalAge = 18;

if (clientAge >= legalAge) {
    console.log('Can drive');
} else {
    console.log('Can\'t drive');
}

clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive")

/* CAO */ /* ----------------------------------------------------------- */
/* Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y. operatorius operatoriuje. Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame "Invalid Age". Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu. */

if (clientAge < 0 || clientAge > 120) {
    console.log('Invalid agee');
} else if (clientAge >= legalAge) {
    console.log('Can drivee');
} else {
    console.log('Can\'t drivee');
}

clientAge < 0 || clientAge > 120 ? console.log("Invalid agee") : clientAge >= legalAge ? console.log("Can drivee") : console.log("Can't drivee")

// formatted
clientAge < 0 || clientAge > 120 
? console.log("Invalid age") 
: clientAge >= legalAge 
? console.log("Can drive") 
: console.log("Can't drive")

/* CAO */ /* ----------------------------------------------------------- */
/* Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas. 
Padarei? O naudojai ternary operator? O kam? Ne visada reikia conditional statementų, kad pasiektume rezultatą - jie dažniausiai skirti, kai norime paleisti skirtingas kodo eilutes. O jei tik norime sužinoti ar true, ar false - galime tiesiog paprasčiausiai paklausti. */

const phone = 'iPhone';
const isIphoneUser = phone === 'iPhone';
console.log(isIphoneUser);

