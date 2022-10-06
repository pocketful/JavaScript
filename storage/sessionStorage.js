"use strict";

/* https://www.w3schools.com/jsref/prop_win_sessionstorage.asp */
/* The sessionStorage object stores data for only one session.
(The data is deleted when the browser is closed). */
sessionStorage;
// Save Data to Session Storage
sessionStorage.setItem("key", "value");
// Read Data from Session Storage
let lastname = sessionStorage.getItem("key");
// Remove Data from Session Storage
sessionStorage.removeItem("key");
// Remove All (Clear session Storage)
sessionStorage.clear();
