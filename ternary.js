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
const isItRaining2 = false;
isItRaining2 ? console.log(`Siandien lyjaa`) : console.log(`Siandien giedraa`)
// isItRaining2 == true ? console.log(`Siandien lyjaa`) : console.log(`Siandien giedraa`) // tas pats

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
const weatherr = 
isRainny === true 
? 'lyja' 
: isSunny === true 
? 'sauleta' 
: 'debesuota';
console.log(`Siandienn ${weatherr}`);
