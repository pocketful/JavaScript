'use strict';
/* <h1>JS6</h1>
<h2 id="result">Nieko</h2>
<button id="btn1">Click me</button> */

// nusitaikom i elementa
const resultEl = document.getElementById('result');
const btn1El = document.getElementById('btn1');
const h1El = document.querySelector('h1');

// pridesim eventus
// el.function()
// function(el)

/* click --------------------------------------------------------- */
// el.addEventListener('event', function)
// 1 way
btn1El.addEventListener('click', changeText);  // without () !!!
    // 2 way onclick, without EventListener
    btn1El.onclick = function() {console.log('changedOnClick');};

function changeText() {
    console.log('changed');
    resultEl.textContent = 'after click change textContent';
}

// 2 way. nereik pavadinimo, nors galima
btn1El.addEventListener('click', function() {
    console.log('changedd');
});

    // kintamaj priskiriam funkcija. ja galim naudoti tik aprase auksciau
    const changeTxt = function() {
        console.log('changeddd');
    }

/* mouseover --------------------------------------------------------- */
btn1El.addEventListener('mouseover', function() {
    console.log('mouse over');
});

/* toggle --------------------------------------------------------- */
let textVisible = false;

function changeText() {
    console.log('changed');
    if (textVisible === false) {
        resultEl.textContent = 'toggle1';
    } else {
        resultEl.textContent = 'toggle2';
    }
    textVisible = !textVisible;
}
