'use strict';

/* https://javascript.info/async */
/* https://www.youtube.com/watch?v=exBgWAIeIeg */

/* https://www.w3schools.com/js/js_asynchronous.asp */
/* https://www.w3schools.com/js/js_callback.asp */
/* https://www.w3schools.com/js/js_promise.asp */
/* https://www.w3schools.com/js/js_async.asp */
/* https://www.w3schools.com/jsreF/met_win_settimeout.asp */
/* https://www.w3schools.com/jsreF/met_win_setinterval.asp */


/* setTimeout ------------------------------------------------------------------------ */

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


/* ====================================================================================== */
// State(result):
// Pending(undefined), Fulfilled(a result value), Rejected(an error object)
// resolve(value) -OR- reject(error)
/*  "Producing code" is code that can take some time
    "Consuming code" is code that must wait for the result
    A Promise is a JavaScript object that links producing code and consuming code */

let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)
    myResolve(); // when successful
    myReject();  // when error
});
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) { /* code if successful */ },
    function (error) { /* code if some error */ }
);


/* async Promises (buyTickets) ---------------------------------------------------------- */

function buyTickets() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                reject('Try again'); // when error
            } else {
                resolve('Thanks'); // when successful
            }
        }, 3000)
    });
}
buyTickets()
    .then((success) => console.log(success)) // vykdo resolve
    .catch((error) => console.log(error)); // vykdo reject, kai false

// 2 way, rare
// const promise = buyTickets();
// promise.then((success) => console.log(success));
// promise.catch((error) => console.log(error));
// console.log('promise ===', promise); // Promise {<pending>} tuo metu kai spausdina, nepraejo 3s


/* async Promises ---------------------------------------------------------------------- */

function fnPr1() {
    console.log('Async. Number One 1');
}

function fnPr2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async. Number Two 2');
            resolve();
        }, 1500);
    })
}

function fnPr3() {
    console.log('Async. Number Three 3');
}

function fnPr4() {
    console.log('Async. Number Four 4');
}

// fnPr1();
// fnPr2().then(fnPr3); // vykdo resolve, without 4

fnPr1();
fnPr2().then(() => { // vykdo resolve
    fnPr3();
    fnPr4();
});


/* setInterval (clock) ================================================================================ */
/* https://www.w3schools.com/Jsref/met_win_setinterval.asp */


const interval = setInterval(printL, 1000); // print every second
// clearInterval(interval); // jei is karto

function printL() {
    console.log('hello');
}
setTimeout(clearInterval, 5000, interval); // stop after 5s


// clock - display the time every second (1000 milliseconds) -------------------
const h2El = document.querySelector('h2');

function getTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('lt'); // 11:46:30
    h2El.textContent = time;
}
// getTime(); // nesikeis
setInterval(getTime, 1000); // live clock  


/* CAO ================================================================================================ */

/* 1. Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut. */

const every5Sec1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
});
every5Sec1.then(() => console.log('Yes, it works2'));
console.log("Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas")

    // // same
    // const every5Sec2 = new Promise((resolve) => {
    //     setTimeout(() => resolve('Yes, it works'), 1000);
    // });
    // every5Sec2.then(alert);

    
/* 2. Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject. */

const every5Sec = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 5) + 1; // random number 1-5 
    setTimeout(() => {
        if (random === 1) {
            reject(); // 1/5
        } else {
            resolve(); // 4/5
        }
    }, 5000)
});
every5Sec
    .then(() => console.log('Yes, it works 1/5 of times'))
    .catch(() => console.log('No, it doesnt work 4/5 of times'));


/* 3. Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą. Nelabai aišku? Pasižiūrėk čia apie teoriją - o jei ne, užmesk akį į atsakymus. */

const every5Sec3 = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 5) + 1; // random number 1-5 
    setTimeout(() => {
        if (random === 1) {
            reject(); // 1/5
        } else {
            resolve(); // 4/5
        }
    }, 2000)
});
every5Sec3
    .then(() => 'This is a message')
    .then((message) => console.log(message))
    .catch(() => console.log('No, it doesnt work 4/5 of times'));

        // // same
        // const every5Sec3 = new Promise((resolve, reject) => {
        //     const random = Math.floor(Math.random() * 5) + 1; // random number 1-5 
        //     setTimeout(() => {
        //         if (random === 1) {
        //             reject('No, it doesnt work 4/5 of times5'); // 1/5
        //         } else {
        //             resolve('This is a message5'); // 4/5
        //         }
        //     }, 3000)
        // })
        // .then((message) => console.log(message))
        // .catch((error) => console.log(error));
