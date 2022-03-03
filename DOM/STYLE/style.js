'use strict';

/* ====================================== Tasks part 1 ========================================== */

const h1El = document.querySelector('h1');

const textEl = document.querySelector('.text');
textEl.style.color = 'tomato';

const cardEl = document.querySelector('.card0');
cardEl.style.border = '2px solid black';
cardEl.style.padding = '20px';
cardEl.style.display = 'inline-block';

const h2El = document.querySelector('.title');

h2El.style.fontWeight = 'normal';
h2El.style.fontSize = '35px';
h2El.style.borderBottom = '2px solid black';

const ulEl = document.querySelector('.my-list');
ulEl.children[0].style.color = 'green';

// or
const myListEl1 = document.querySelector('.my-list li:first-child');
// dvigubas fontSize;
myListEl1.style.fontSize = '2rem';
// const size = myListEl1.style.fontSize; // prilyginti

const myListEl2 = document.querySelector('.my-list li:nth-child(2)');
myListEl2.style.letterSpacing = '10px';
const myListEl3 = document.querySelector('.my-list li:last-child');
myListEl3.style.backgroundColor = 'black';
myListEl3.style.color = 'white';

// panasu i masyva, neveiks splice visokie
const liElArrayLike = document.querySelectorAll('.my-list li'); // All iesko kol grazina viska
liElArrayLike[1].style.color = 'blue';

const button1 = document.getElementById('didinti');
const button2 = document.getElementById('mazinti');

button1.addEventListener('click', () => {
    h1El.style.fontSize = '50px';
});

button2.addEventListener('click', () => {
    // let dydis = parseInt(h1El.style.fontSize); // ne visada suveiks, su minusu gal neveiks
    let dydis = (h1El.style.fontSize).replace('px', '');
    dydis = (dydis - 10) + 'px';
    h1El.style.fontSize = dydis;
});

/* pakeisti fono spalva pagal input */
/* <input id="fonas" type="text" placeholder="Pasikeiskite fono spalva" /> */
const inputColor = document.getElementById('fonas');

inputColor.addEventListener('blur', () => {
    const inputcolorValue = inputColor.value;
    console.log('inputcolorValue ===', inputcolorValue);
    document.body.style.backgroundColor = inputcolorValue;
});


/* jeigu iskelus i function */
// button1.addEventListener('click', () => {
//     didina();
// });
// function didina() {
//     h1El.style.fontSize = '50px';
// }
