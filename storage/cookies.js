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


// 3. A Function to Check a Cookie if it's set, then it will display a greeting
function checkCookie() {
    let wizard = getCookie("wizard"); // Hermione Granger
    if (wizard != "") { // if exists
        console.log("Welcome again " + wizard);
    } else { // if a cookie is not set
        wizard = prompt("Please enter your name:", ""); // ok ir be pask kabuciu
        if (wizard != "" && wizard != null) {
            setCookie("wizard", wizard, 365);
        }
    }
}
checkCookie();


