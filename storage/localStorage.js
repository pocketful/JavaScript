'use strict';

/* https://www.w3schools.com/jsref/prop_win_localstorage.asp */
/* with LocalStorage you can not only store strings(like with cookies) but also JS primitives and objects */
/* The localStorage object stores data with no expiration date.
The data is not deleted when the browser is closed, and are available for future sessions. */

// // localStorage.setItem(key, value);
// // issaugoti reiksmes
// localStorage.setItem('usernameKey', 'userValue');
// localStorage.setItem('passwordKey', 'passValue');
// // pasiimti reiksmes
// const usernameV = localStorage.getItem('usernameKey');
// console.log('usernameV ===', usernameV); // userValue. jei nera, null

// localStorage // Storage {usernameKey: 'userValue', passwordKey: 'passValue', length: 2}
// // Save Data to Local Storage
// localStorage.setItem("key", "value");
// // Read Data from Local Storage
// let lastname = localStorage.getItem("key");
// // Remove Data from Local Storage
// localStorage.removeItem("key");
// // Remove All (Clear Local Starage)
// // localStorage.clear();

/* Task 1, counter ---------------------------------------------------------------------------------- */

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


/* Task 2, generate list ----------------------------------------------------------------------------- *//*
    <form>
      <input type="text" name="name" id="name" placeholder="Enter name" value="Iveta" />   
    </form>
    <ul class="names-list"></ul>
Ivedus varda ir issiuntus forma su enter(automatiskai vyksta) pridedam ta varda i vardu sarasa, kaip saraso el */

const formEl = document.forms[0];
const ulEl = document.querySelector('.names-list');

formEl.onsubmit = function (e) { // formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputEl = formEl.elements.name;
  // paimti reiksme
  let inputValue = inputEl.value.trim();  

  // create li with name
  addLi(inputValue);

  // clean input
  // inputValue = ''; // bad, nes isvalom tik istraukta is elemento string reiksme, o ne el reiksme kuria issaugojom pries tai
  inputEl.value = '';
};

// let total = localStorage.getItem('total') === null ? 0 : localStorage.getItem('total');
// const namesArray = []; // jei tik taip, tai perkrovus nelieka htmle lsito, o cookies uzraso ant virsaus nauja
const namesArray = localStorage.getItem('names') === null ? [] : localStorage.getItem('names').split(',');
// split nes gavom string, o cia array 'Iveta,Iveta' >> ['Iveta', 'Iveta'] 
// after reloading the page, show list from localStorage from before
// if name empty then create nothing, if name exist, makeLi
namesArray.forEach((name) => makeLi(name));

// make <li>
function makeLi(stringName) {
  const liEl = document.createElement('li');
  liEl.textContent = stringName;
  ulEl.append(liEl);
}

// create new <li>, push to array, save
function addLi(stringName) {
  const liEl = document.createElement('li');
  liEl.textContent = stringName;
  ulEl.append(liEl);

  // add name to array
  namesArray.push(stringName);
  // save name to localStorage
  saveToStorage();
}

// save name to localStorage
function saveToStorage() {
  const stringFromNamesArray = namesArray.join(','); // ['Iveta', 'Iveta'] >> 'Iveta,Iveta'
  localStorage.setItem('names', stringFromNamesArray); 
  // Storage {names: 'Iveta', length: 1} >> Storage {names: 'Iveta,Iveta', length: 1}
}

/* CAO ========================================================================================= */

/* 2. Į localStorage, įrašykite savo vardą, pavardę, aprašymą, linkus į FB, G+, Twitter, linką į nuotrauką. Informaciją galite įrašyti per console'ę, arba naudojant kodą projekte pirmą kart užkraunant puslapį. Vėliau susikurkite puslapį, kuris atvaizduos šią informaciją būtent taip: */

// localStorage.setItem('T2-name', 'DarkCode');
// localStorage.setItem('T2-occupation', 'Web Developer - Web Designer');
// localStorage.setItem('T2-description', 'A web developer is a programmer or a coder who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model');
// localStorage.setItem('T2-fb', 'https://www.facebook.com/');
// localStorage.setItem('T2-twitter', 'https://twitter.com/home');
// localStorage.setItem('T2-google', 'https://www.google.lt/');
// localStorage.setItem('T2-photo', 'https://placeimg.com/300/300/nature');


/* ---------------------------------------------------------------------------------------------------- */
/* 3. Sukurkite puslapį, kuriame būtų forma su vienu input - fullName. Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname). Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array išsaugo localStorage. Po forma, tegul būna lentelė, būtent joje atsivaizduoja informacija iš localStorage array. *//*
<form id="fullname">
  <input type="text" name="fullname" id="fullname" placeholder="Fullname" value="Iveta Jac" />
  <button type="submit">Submit</button>
</form> */

// retrieving data from localStorage: from string to array again
// after reloading the page, show list from localStorage
let personsArray = localStorage.getItem('fullnames') === null ? [] : JSON.parse(localStorage.getItem('fullnames'));
console.log('personsArray ===', personsArray);

// create a table from localStorage
personsArray.forEach((obj) => toTable(obj.name, obj.surname));

const formFullnameEl = document.forms.fullname;
formFullnameEl.addEventListener('submit', (event) => {
  event.preventDefault();

  // value from input
  const inputV = formFullnameEl.elements.fullname.value;
  const fullnameVArr = inputV.trim().toLowerCase().split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1));
  console.log('fullnameVArr === ', fullnameVArr); // ['Iveta', 'Jack']
  // const nameV = fullnameVArr[0].charAt(0).toUpperCase() + fullnameVArr[0].slice(1);
  // const surnameV = fullnameVArr[1].charAt(0).toUpperCase() + fullnameVArr[1].slice(1);
  const nameV = fullnameVArr[0];
  const surnameV = fullnameVArr[1];

  // create a new line
  toTable(nameV, surnameV);

  // create a new object
  const fullnameObj = { name: nameV, surname: surnameV }; // {name: 'Iveta', surname: 'Jac'}

  // new object push to array
  personsArray.push(fullnameObj); // [{…}, {…}] // 0: {name: 'Iveta', surname: 'Jac'} 1: {name: 'Iveta', surname: 'Jack'}

  // array to string
  const stringFromPersonsArray = JSON.stringify(personsArray); // [{"name":"Iveta","surname":"Jac"},{"name":"Iveta","surname":"Jack"}]  string

  // Storing data: array string save to localStorage
  localStorage.setItem('fullnames', stringFromPersonsArray);
  console.log(localStorage);
  // Storage {fullnames: '[{"name":"Iveta","surname":"Jac"},{"name":"Iveta","surname":"Jack"}]', length: 1}

  // clear input
  // formFullnameEl.elements.fullname.value = '';
});

// create a new line with name surname
function toTable(name, surname) {
  const tbody = document.querySelector('tbody')
  const trEl = document.createElement('tr');
  tbody.append(trEl);
  const tdEl1 = document.createElement('td');
  tdEl1.textContent = name;
  trEl.append(tdEl1);
  const tdEl2 = document.createElement('td');
  tdEl2.textContent = surname;
  trEl.append(tdEl2);
}
