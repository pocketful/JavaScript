'use strict';

/*<button id="btn1">Click me</button>
<h2>0</h2> */
// padaryti kad spaudziam mygtuka didinam 0 vienetu, issaugoti kad refreshinus ok butu

const buttonEl = document.getElementById('btn1');
const h2El = document.getElementById('count');
// jei reiksme null : jei reiksme issaugota 
let total = localStorage.getItem('total') === null ? total = 0 : localStorage.getItem('total');
h2El.textContent = total;

    // // longer
    // let total;
    // if (localStorage.getItem('total') === null) {
    //     total = 0;
    // } else {
    //     total = localStorage.getItem('total');
    // }
    // h2El.textContent = total;

buttonEl.addEventListener('click', (event) => {  
    h2El.textContent = ++total;
    localStorage.setItem('total', total);
});

    // // be localStorage, oclick:
    // const buttonEl = document.getElementById('btn1');
    // const h2El = document.querySelector('h2');  // buttonEl.nextElementSibling;
    // let num = 0; // h2El.textContent;
    // buttonEl.onclick = () => {
    //     h2El.textContent = ++num;
    // };

    // // localStorage example
    // // localStorage.setItem(key, value);
    // // issaugoti reiksmes
    // localStorage.setItem('username', 'blaaaa');
    // localStorage.setItem('pass', 'aaaa');
    // // pasiimti reiksmes
    // const usernameV = localStorage.getItem('username');
    // console.log('username===', usernameV);
    // console.log(localStorage.getItem('usernamee')); // jei nera, null

/* 2
<form>
  <input type="text" id="name" placeholder="Enter name" />
</form>
<ul class="names">
  <li>James</li>
</ul>
ivedus varda ir issiuntus forma su enter(automatiskai vyksta)
pridedam ta varda i vardu sarasa, kaip saraso el */

const formEl = document.forms[0];

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const inputValue = formEl.elements.name.value.trim();
    const ulEl = document.querySelector('.names'); // formEl.nextElementSibling;

    const liEl = document.createElement('li');
    liEl.textContent = inputValue;
    ulEl.append(liEl);
});