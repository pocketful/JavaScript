// su arrow function objekte this eina kiaurai, error




/* ===================== JavaScript Hoisting ======================= */

/* Hoisting is JS default behavior of moving declarations to the top.
In JS, a variable can be used before it has been declared. */

// 1 way, same result
x = 5; // Assign 5 to x
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element
var x; // Declare x
// result: 5

// 2 way, same result
var x; // Declare x
x = 5; // Assign 5 to x
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
var x = 5; // Initialize x
var y = 7; // Initialize y
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y
// result: 5 7

// 2 way, different result
var x = 5;  // Initialize x
elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x + " " + y;           // Display x and y
var y = 7;  // Initialize y
// result: 5 undefined