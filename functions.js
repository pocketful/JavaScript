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
// debugger
function sienuPlotas(a, b, h) {
    const S = h * (a * 2 + b * 2);
    const render = document.getElementById('result'); // <p id="result">Kambario sienu plotas 162</p>
    render.textContent = `Kambario sienu plotas ${S}`;
        // mano:
        // document.getElementById('result').textContent = `Kambario sienu plotas ${S}`;
}
sienuPlotas(12, 15, 3);


