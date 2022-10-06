/* https://developer.mozilla.org/en-US/docs/Web/JavaScript */

// su arrow function objekte this eina kiaurai, error
/* In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever. With arrow functions the this keyword always represents the object that defined the arrow function. */

/* ===================== Array Methods, Callbacks ======================= */
/* Functions that are provided as parameters to another function are called callback functions.  */
/* Tinkama apsirasyti kad kazka padarius ivyktu funkcija, arba iteruodami per ciklus */

/* https://www.w3schools.com/js/js_array_methods.asp */
/* https://www.w3schools.com/jsref/jsref_obj_array.asp */

/* Array methods:
 * Map returns new array.
 * Foreach returns nothing. jei reikia atlikti su kiekviena reiksme ir nesigrazina.
 * Find grazins objekta pirma. randa, grazina, nebevykdo.
 * Filter grazins array visa.
 *  => === return  */

/* ===================== Primitive Values, methods ======================= */

/* method nuo funkcijos skiriasi nes metodas yra objekto viduje esanti funkcija */
/* js viskas yra objektas. ir stringas
/* Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).
But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties. */
/* Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values:
String for the string primitive. Number for the number primitive. BigInt for the bigint primitive. Boolean for the boolean primitive. Symbol for the symbol primitive.
The wrapper's valueOf() method returns the primitive value. */
/* Kaip mes galime kurti metodus objektams, taip kažkas primityviems duomenų tipams yra sukūręs kelis juos. Būtent šie metodai mums padeda pasikoreguoti duomenis. */

let bool = false;
document.getElementById("demo").innerHTML = bool.valueOf();

// Using unary plus:
+"5" + // 5 (string to number)
  "" + // 0 (string to number)
  "1 + 2" + // NaN (doesn't evaluate)
  new Date() + // same as (new Date()).getTime()
  "foo" + // NaN (string to number)
  {} + // NaN
  [] + // 0 (toString() returns an empty string list)
  [1] + // 1
  [1, 2] + // NaN
  new Set([1]) + // NaN
  BigInt(1) + // Uncaught TypeError: Cannot convert a BigInt value to a number
  undefined + // NaN
  null + // 0
  true + // 1
  false; // 0

/* ===================== JavaScript Hoisting ======================= */

/* Hoisting is JS default behavior of moving declarations to the top.
In JS, a variable can be used before it has been declared. */

// 1 way, same result
x = 5;                                  // Assign 5 to x
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element
var x;                                  // Declare x
// result: 5

// 2 way, same result
var x;                                  // Declare x
x = 5;                                  // Assign 5 to x
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element
// result: 5

/* su let and const nepavyks taip. 
Variables defined with let and const are hoisted to the top of the block, but not initialized.
The block of code is aware of the variable, but it cannot be used until it has been declared. */

carName = "Volvo";
let carName;
// result: error

/* JS only hoists declarations, not initializations. */

// 1 way
var x = 5;                              // Initialize x
var y = 7;                              // Initialize y
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y
// result: 5 7

// 2 way, different result
var x = 5; // Initialize x
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y
var y = 7;                              // Initialize y
// result: 5 undefined
