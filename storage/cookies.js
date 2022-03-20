'use strict';

/* cookies https://www.w3schools.com/js/js_cookies.asp */

// Get all cookies associated with this document
let allCookies = document.cookie;
// document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;
// If you set a new cookie, older cookies are not overwritten.. If you want to find the value of one specified cookie, you must write a JavaScript function that searches for the cookie value in the cookie string.

// Create a Cookie with JavaScript
// document.cookie="name=Iveta";
document.cookie = "name=Iv Jac; expires=Thu, 10 Jun 2023 12:00:00 UTC";
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC";
console.log(allCookies); // username=John Doe; name=Iv Jac


// 1. A Function to Set a Cookie. With expire date after exdays
function setCookie(cname, cvalue, exdays) {
    const d = new Date(); // current time // Sun Mar 20 2022 18:30:14 GMT+0200 (Eastern European Standard Time)
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // Tue Apr 19 2022 19:32:34 GMT+0300 (Eastern European Summer Time)
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}
setCookie('wizard', 'Hermione Granger', 30);

// The internal clock in JavaScript starts at midnight January 1, 1970
// d.setTime(1332403882588); sets a date by adding milliseconds to January 1, 1970
// d.getTime(); returns the number of milliseconds since January 1, 1970 00:00:00.


// 2. A Function to Get a Cookie. returns the value of a specified cookie
function getCookie(cname) {
    let name = cname + "="; // "wizard="
    let decodedCookie = decodeURIComponent(document.cookie);
    // "username=John Doe; name=Iv Jac; wizard=Hermione Granger" 
    // decode the cookie string, to handle cookies with special characters ($%/etc) 
    let cookieArray = decodedCookie.split('; '); // ['username=John Doe', ' name=Iv Jac', ' wizard=Hermione Granger'] // split string to array
    // mano: jei split('; '), tai viskas ok: ['username=John Doe', 'name=Iv Jac', 'wizard=Hermione Granger']
    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) == ' ') { // ' wizard=Hermione Granger' // nes jei tarpas pradzioj
            c = c.substring(1); // nukerpam po pirmo char, lieka 'wizard=Hermione Granger'
        }
        if (c.indexOf(name) == 0) { // jeigu prasideda wizard. indexOf() returns the position of the first occurrence of a value in a string
            return c.substring(name.length, c.length); // palieka tik string c.substring(7,23),remove "wizard=""
        }
    }
    return ""; // If the cookie is not found
}
console.log(getCookie('wizard')); // Hermione Granger

            // SO
            // function get_cookie(name){
            //     return document.cookie.split(';').some(c => {
            //         return c.trim().startsWith(name + '=');
            //     });
            // }

// 3. A Function to Check a Cookie if it's set, then it will display a greeting
function checkCookie() {
    let wizard = getCookie("wizard"); // Hermione Granger
    if (wizard != "") { // if exists
        console.log("Welcome again, " + wizard);
    } else { // if a cookie is not set
        wizard = prompt("Please enter your name:", ""); // ok ir be pask kabuciu
        if (wizard != "" && wizard != null) {
            setCookie("wizard", wizard, 365);
        }
    }
}
checkCookie();


/* Cookies, dates ======================================================================================== */

/* https://www.w3schools.com/js/js_dates.asp
   new Date()
   new Date(year, month, day, hours, minutes, seconds, milliseconds)
   new Date(milliseconds)
   new Date(date string) */

// current time 
const dateNow = new Date(); // Sun Mar 20 2022 19:46:39 GMT+0200 (Eastern European Standard Time)
const dateNowToUTC = dateNow.toUTCString(); // Sun Mar 20 2022 19:46:39 GMT+0200 (Eastern European Standard Time)
const dateNowToDateString = dateNow.toDateString(); // Sun Mar 20 2022 // more readable format 

const date2 = new Date('1980-03-15'); // Sat Mar 15 1980 03:00:00 GMT+0300 (Eastern European Standard Time)
const date3 = new Date(2022, 3, 24); // without zero
Date.now() // 1647798477538 // current time in milliseconds

/* classwork ----------------------------------------------------------------------------- */

const future = new Date('2022-03-25'); // Fri Mar 25 2022 02:00:00 GMT+0200 (Eastern European Standard Time) {}
const now = Date.now(); // 1647798855549
const days = 4;
const cookieTime = now + days * 24 * 60 * 60 * 1000; // 1648144455549
const cookieTimeDateFormat = new Date(cookieTime); // new Date(milliseconds) // Thu Mar 24 2022 19:54:15 GMT+0200 (Eastern European Standard Time)
// nustatyti cookie slapuka
document.cookie = 'showAlert=true; expires=' + cookieTimeDateFormat.toUTCString();

// visi cookie string formatu
const cook = document.cookie;
console.log('cook ===', cook); // "showAlert=true;
const showAlertString = cook.split('=')[1]; // "true"
const showAlert = showAlertString == 'true' ? true : false;
// console.log('showAlert ===', showAlert);  // true

function showADD() {
  if (showAlert) {
    console.log('Pirkike nes pigu');
    document.cookie = 'showAlert=false; expires=' + future.toUTCString();
  } else {
  }
}
showADD();


/* CAO ========================================================================================= */

/* 1. Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies. Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą. */

const formNameEl = document.forms.nameForm;
const title = document.querySelector('.title')

// create new div for a name cookie and remove button
const cookieDivEl = document.createElement('div');
title.after(cookieDivEl);

formNameEl.addEventListener('submit', (event) => {
    event.preventDefault();

    // get input value
    const inputValue = formNameEl.elements.name.value.trim(); // event.target.name.value.trim();

    // create new <p> with name
    createNameP(inputValue);

    // create a delete button
    createDeleteBtn();

    // create a new cookie from name
    document.cookie = 'caoName=' + inputValue + ';';

    // hide a form
    formNameEl.classList.toggle('hide');
});

// create new <p> with name
function createNameP(name) {
    const pEl = document.createElement('p');
    pEl.textContent = name;
    cookieDivEl.append(pEl);
}

// create delete button
function createDeleteBtn() {
    const deleteEl = document.createElement('button');
    deleteEl.textContent = 'Remove a cookie';
    cookieDivEl.append(deleteEl);
    // delete a cookie after clicking a button 'remove'
    deleteACookie(deleteEl);
}

// delete a cookie after clicking a 'remove' button
function deleteACookie(btn) { 
    btn.addEventListener('click', () => {
        // clear a cookie value and set the date to a past one
        document.cookie = 'caoName= ; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        console.log('cookie removed');

        // display a form again
        formNameEl.classList.toggle('hide');

        // clear cookie div el with name and remove button
        cookieDivEl.innerHTML = '';
    });
}