'use strict';

/*  <input type="text" id="input1" placeholder="enter some text" value="input1 value">
    <h2 id="result">h2 Title</h2>
    <button id="btn1">Click</button> */

const resultEl = document.getElementById('result');
const btn1El = document.getElementById('btn1');
const inputEl = document.getElementById('input1');

// po click perkelti reiksme is input i resultEL
btn1El.addEventListener('click', function() {
    resultEl.textContent = inputEl.value;
    inputEl.value = '';
});

    // keyup keydown reaguoja tik i mygtuko paspaudima 
    inputEl.addEventListener('keyup', function() {
        resultEl.textContent = inputEl.value;
        console.log('keyup');
    });

// inputams yra specialus input, reaguoja ir i copy paste pvz
inputEl.addEventListener('input', function() {
    resultEl.textContent = inputEl.value;
    console.log('keyup');
});

/* --------------------------------------------------------- */
/*  <h1>h1 Title</h1>
    <button id="btn2">Click2</button>
    <button id="btn3">Click3</button>
    <input type="text" id="input2" placeholder="enter some text" value="input2 value"> */
/* mygtuko paspaudimu pakeiciam antraste i 'pakeista su js'
input el. pakeisti antraste su reiksme is input el. */

const h1El = document.querySelector('h1');
const btn2El = document.getElementById('btn2');
const btn3El = document.getElementById('btn3');
const inputEl2 = document.getElementById('input2');

btn2El.addEventListener('click', function() {
    h1El.textContent = 'pakeista su js';    
});

btn3El.addEventListener('click', function() {
    h1El.textContent = inputEl2.value;
});
