"use strict";
let a = 10;
let b = 5;
let x = 11;
let y = 7;

// let sum = a + b;
// let daug = a * 2 + b * 2;
// let visasuma = sum + daug;
// console.log('visasuma ===', visasuma);

// sum = x + y;
// daug = x * 2 + y * 2;
// visasuma = sum + daug;
// console.log('visasuma ===', visasuma);

// function name(argumets) {
function sumDaug(num1, num2) {
  // function body
  let sum = num1 + num2;
  let daug = num1 * 2 + num2 * 2;
  let visasuma = sum + daug;
  console.log("visasuma ===", visasuma);
}

// funkcijos iskvietimas vykdomas su ()
sumDaug(a, b);
sumDaug(x, y);
sumDaug(20, 30);
sumDaug(2, 3);

/* parasyti funkcija kuri paskaiciuoja apskritimo plota */

function apskPlotas(r) {
  const S = Math.PI * r ** 2;
  console.log(`Apskritimo, kurio spindulys ${r} plotas ${S.toFixed(2)}`); // suapvalina du skaiciai po kablelio
}
apskPlotas(5);

/* parasyti funkcija kuri paskaiciuoja staciakampio plota */

function stacPlotas(a, b) {
  const S = a * b;
  console.log(`Staciakampio plotas ${S}`);
}
stacPlotas(2, 4);

/* parasyti funkcija kuri apskaiciuoja kambario sienu plota ir isveda atsakyma i puslapio paragrafa <p id="result"></p> */

function sienuPlotas(a, b, h) {
  const S = h * (a * 2 + b * 2);
  const render = document.getElementById("result"); // <p id="result">Kambario sienu plotas 162</p>
  render.textContent = `Kambario sienu plotas ${S}`;
  // mano:
  // document.getElementById('result').textContent = `Kambario sienu plotas ${S}`;
}
sienuPlotas(12, 15, 3);

/* ============================ Function types (pagal paskirti) ================================== */

/* 1: side effect */
/* a side effect of a function is something that happens as a result of the function’s body, but is not returned */
/* examples: printing something out to the console, plotting something on the display, saving file */

function h1ToTitle() {
  // 1. nusitaikyti i h1
  const h1El = document.querySelector("h1");
  // console.log('h1El ===', h1El);
  // 2. paimti reiksme is h1
  const h1ElReiksme = h1El.textContent;
  // 3. irasyti reiksme i title
  document.title = h1ElReiksme;
}
h1ToTitle();

/* ---------------- */

/* 2: returns value */

function average(sk1, sk2, sk3) {
  const avg = (sk1 + sk2 + sk3) / 3;
  return avg;
  // jei neprasytas return, tai JS automatiskai return prideda, tada result undefine
}
const avg1 = average(3, 2, 5);
console.log(avg1);
const avg2 = average(4, 6, 8);
console.log(avg2);

const vidurkiuSuma = avg1 + avg2;
console.log("vidurkiuSuma ===", vidurkiuSuma);

/* ============================ Function types (pagal aprasyma) ================================== */

/* theory - JavaScript Hoisting. JS nuskaitydamas faila visas functions perkelia i virsu */

/* 1. function declaration - hoisting available */

function sayHiDeclaration() {
  console.log("Hi declaration");
}
sayHiDeclaration(); // function invocation (after or before function)
// console.log('sayHiDeclaration() ===', sayHiDeclaration()); // undefined

/* ---------------- */

/* 2. function expression traditional - an anonymous function in variable (function without a name) */

const sayHiExpression = function () {
  console.log("Hi expression, anonymous function");
};
sayHiExpression(); // invoking before function will result in error. nepersikelia i virsu uz variable esancios function
console.log("sayHiExpression() ===", sayHiExpression()); // sayHiExpression() === undefined. lygu tam ka grazinam is function, o negrazinam nieko
console.log("sayHiExpression ===", sayHiExpression); // sayHiExpression === ƒ () { console.log('Hi expression, anonymous function'); }

// function expression - named (irgi gali buti)
// const sayHiExpression = function namedFunction () { -

/* function expression traditional - an anonymous function in object */

const functionObject = {
  sum: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
};

const subResult = functionObject.sub(50, 40);
console.log("subResul ===", subResult);

/* ---------------- */

/* 3. arrow function expression - an anonymous function - without return */

// 2. example
const anonymousFunction = function () {
  console.log("function expression traditional - an anonymous");
};
anonymousFunction();

// 3. arrow without return
const arrowFunction = () => console.log("arrow function");
arrowFunction();

/* ---------------- */

/* 4. arrow function expression - an anonymous function - with return */

// 2. example
const sumValues = function (a, b) {
  return a + b;
};

// 3. arrow without return // => - automatiskai grazina reiksme su return jei nera {}

const sumValuesArrow = (a, b) => a + b;

// 4. arrow with return

const sumValuesArrowReturn = (a, b) => {
  return a + b;
};

console.log(sumValues(10, 5));
console.log(sumValuesArrowReturn(10, 5));
console.log(sumValuesArrow(10, 5));

/* Tasks ------------------------------------------------------------------- */

// parasyti visai budais funckija kuri paima 3 sk ir grazina visus skaicius sudetus ir atimti 10

// 1. function declaration
function math1(x, y, z) {
  return x + y + z - 10;
}
console.log("declaration ===", math1(10, 12, 13)); // okay also before function

// 2. function expression
const math2 = function (x, y, z) {
  return x + y + z - 10;
};
console.log("expression", math2(10, 12, 13));

// 3. arrow function without return
const math3 = (x, y, z) => x + y + z - 10;
console.log("arrow be return", math3(10, 12, 13));

// 4. arrow function with return
const math4 = (x, y, z) => {
  return x + y + z - 10;
};
console.log("arrow su return", math4(10, 12, 13));

/* Tasks ------------------------------------------------------------------- */

/* sukurti funkcija kuri pavercia minutes i sekundes */

function minToSec(min) {
  return min * 60;
}
const fiveMin = minToSec(5);
console.log("5 minutes to seconds === ", fiveMin);

/* sukurti funkcija kuri ideda reiksme i html el kurio class='app' <h2 class="app"></h2> */

function valueToApp(value) {
  const appEl = document.querySelector(".app");
  // jei nera html elemento
  if (appEl === null) {
    console.log("no element with class app");
    return; // stop function execution
  }
  appEl.textContent = value;

  // // bad way:
  // let appEl = document.querySelector('.app').textContent; // jis tampa tik === 'text'!!
  // appEl = value;
}
// valueToApp(`5 minutes in sec is ${fiveMin}`);
valueToApp(`5 minutes in sec is ${minToSec(5)}`);

// jeigu norint flexible destination, tai pakeisti:
/*  function valueToApp(value, destination) {
        const appEl = document.querySelector(destination);
        valueToApp(`5 minutes in sec is ${fiveMin}`, '.app');
        valueToApp(`15 minutes in sec is ${minToSec(15)}`, 'h1');  */

/* sukurti funkcija kuri paima h1 el teksta ir iraso ji i p kurio id='result'
   <h1>Functions</h1> , <p id="result"></p> */

function h1ValueToP() {
  const h1ElText = document.querySelector("h1").textContent;
  document.getElementById("result").textContent = h1ElText;
}
h1ValueToP();

/* Functions Differences  ------------------------------------------------------------------- */
const getData = async () => {};
async function getData() {}
const getData = async function () {};
