'use strict';

/* https://javascript.info/async */
/* https://www.youtube.com/watch?v=exBgWAIeIeg */

/* https://www.w3schools.com/js/js_asynchronous.asp */
/* https://www.w3schools.com/js/js_callback.asp */
/* https://www.w3schools.com/js/js_promise.asp */
/* https://www.w3schools.com/js/js_async.asp */


/* setTiemout ------------------------------------------------------------------------ */

const h1El = document.querySelector('h1');
function changeH1(newTitle) {
    h1El.textContent = 'After';
    h1El.textContent = newTitle;
}
// changeH1('whaaat');
setTimeout(changeH1, 3000); //3s

// jei su argumentais:
setTimeout(changeH1, 3000, 'Hello');
setTimeout(() => changeH1('Hello'), 3000); // OR arrow


/* sync ------------------------------------------------------------------------------ */

function fnSync1() {
    console.log('Sync. Number One 1');
}
function fnSync2() {
    console.log('Sync. Number Two 2');
}
function fnSync3() {
    console.log('Sync. Number Three 3');
}
fnSync1();
fnSync2();
fnSync3();


/* async Callbacks ------------------------------------------------------------------- */

function fnCb1() {
    console.log('Async. Number One 1');
}
function fnCb2(callback) {
    setTimeout(() => {
        console.log('Async. Number Two 2');
        callback();
    }, 1500);
}
function fnCb3() {
    console.log('Async. Number Three 3');
}
fnCb1();
fnCb2(fnCb3);

/* with callbacks:
Async. Number One 1
Async. Number Two 2
Async. Number Three 3 */

/* without callbacks:
fn1();
fn2();
fn3();
Async. Number One 1
Number Three 3
Number Two 2 */


/* async Callbacks (drawAfter) ---------------------------------------------------------- */

const things = ['red', 'green', 'blue'];
const ulEl = document.getElementById('ul');

let readyColors;
function getThings(callback) {
    setTimeout(() => {
        readyColors = things;
        callback();
    }, 2000);
}

function drawThings() {
    const stringEls = readyColors
        .map((color) => {
            return `<li>${color}</li>`;
        })
        .join(''); // <li>red</li><li>green</li><li>blue</li>
    ulEl.innerHTML = stringEls;
}
getThings(drawThings);

    // // with arr argument
    // function drawThings(arr) {
    //     const stringEls = arr.map((color) => {
    //         return `<li>${color}</li>`;
    //     })
    //     .join(''); // <li>red</li><li>green</li><li>blue</li>
    //     ulEl.innerHTML = stringEls;
    // }
    // getThings(() => drawThings(readyColors));
// drawThings(things);
// drawThings(readyColors); // Cannot read properties of undefined (reading 'map')
