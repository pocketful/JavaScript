'use strict';
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
  console.log('visasuma ===', visasuma);
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
    const render = document.getElementById('result'); // <p id="result">Kambario sienu plotas 162</p>
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
    const h1El = document.querySelector('h1');
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
console.log('vidurkiuSuma ===', vidurkiuSuma);


