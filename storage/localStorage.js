'use strict';

/* https://www.w3schools.com/jsref/prop_win_localstorage.asp */
/* with LocalStorage you can not only store strings(like with cookies) but also JS primitives and objects */
/* The localStorage object stores data with no expiration date.
The data is not deleted when the browser is closed, and are available for future sessions. */

// localStorage.setItem(key, value);
// issaugoti reiksmes
localStorage.setItem('usernameKey', 'userValue');
localStorage.setItem('passwordKey', 'passValue');
// pasiimti reiksmes
const usernameV = localStorage.getItem('usernameKey');
console.log('usernameV ===', usernameV); // userValue. jei nera, null

localStorage // Storage {usernameKey: 'userValue', passwordKey: 'passValue', length: 2}
// Save Data to Local Storage
localStorage.setItem("key", "value");
// Read Data from Local Storage
let lastname = localStorage.getItem("key");
// Remove Data from Local Storage
localStorage.removeItem("key");
// Remove All (Clear Local Starage)
// localStorage.clear();


/* Task 1, counter -------------------------------------------------------------------------------------- */

/*  <button id="btn1">Click me</button>
    <h2 id="count">0</h2> */
// padaryti kad spaudziam mygtuka didinam 0 vienetu, issaugoti kad refreshinus ok butu
// debugger
const buttonEl = document.getElementById('btn1');
const h2El = document.getElementById('count'); // buttonEl.nextElementSibling;
// jei reiksme null : jei reiksme issaugota 
let total = localStorage.getItem('total') === null ? 0 : localStorage.getItem('total');
h2El.textContent = total;

    // longer
    // let total;
    // if (localStorage.getItem('total') === null) {
    //     total = 0;
    // } else {
    //     total = localStorage.getItem('total');
    // }
    // h2El.textContent = total;

buttonEl.addEventListener('click', () => { 
    h2El.textContent = ++total;
    localStorage.setItem('total', total);
});


    // // be localStorage, onclick:
    // const buttonEl = document.getElementById('btn1');
    // const h2El = document.querySelector('h2');  // buttonEl.nextElementSibling;
    // let num = 0; // h2El.textContent;
    // buttonEl.onclick = () => {
    //     h2El.textContent = ++num;
    // };

