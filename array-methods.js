/* Array methods */
/* https://www.w3schools.com/js/js_array_methods.asp */

let colors = ["green", "blue", "red"];
console.log("colors ===", colors);

// array.push() - prideti reiksme i masyvo gala (modifikuoja originala)
colors.push("yellow", "brown");
console.log("colors po push ===", colors);

// array.unshift() - prideti reiksme i masyvo pradzia (modifikuoja originala)
colors.unshift("pink");
console.log("colors po unshift ===", colors);

// array.shift() - istrina pirma reiksme is masyvo (modifikuoja originala)
colors.shift();
console.log("colors po shift ===", colors);

// array.pop() - istrina paskutine reiksme is masyvo (modifikuoja originala)
colors.pop();
console.log("colors po pop ===", colors);

// pirma atimta reiksme is masyvo issisaugot
const firstColor = colors.shift();
console.log("firstColor ===", firstColor);
console.log("colors po shift ===", colors);

// array slice() - isima reiksmes i new array, nekeicia originalo. paskutinio neiskaiciuoja
let colorsBig = ["green", "blue", "red", "yellow", "pink"];
console.log("colorsBig ===", colorsBig);
colorsBig = colorsBig.slice(2, 4); // (0) paima visus skaicius nuo pradzios iki galo. -1 paims paskutini elemeta
colorsBig = colorsBig.slice(2, 1); // 2 pozicija, 1 elementa. splice(start, deleteCount). butina irasyti antra skaiciu
console.log("colorsBig po slice ===", colorsBig); // ['red', 'yellow']

// array splice() - ideda reiksmes
let colorsBig2 = ["green", "blue", "red", "yellow", "pink"];
console.log("colorsBig2 ===", colorsBig2);
colorsBig2.splice(1, 2); // // At position 1, remove 2 items: ['blue'], ['red'] pasalina
console.log("colorsBig2 ===", colorsBig2);
colorsBig2 = colorsBig2.splice(1, 2); // issaugoti pasalintus elementus var ['blue', 'red']
console.log("colorsBig2 po splice ===", colorsBig2); // ['blue', 'red', 'yellow']


/* ---------------------------------------------------------------------------------- */
// https://www.includehelp.com/code-snippets/join-vs-toString-methods-in-javascript.aspx
// toString() - not only for the arrays, but it can be used other types of objects also, it is used to convert an object’s value to the string. The values are separated by the commas.
//    object.toString();

// join() - can be used with the arrays. It is used to join the array elements and returns a string. The values are separated by the commas (by default), can also specify the separator.
//    array.join([separator]);

var arr = ["Manju", "Amit", "Abhi", "Radib"];

arr.toString(); //     "Manju,Amit,Abhi,Radib"
arr.join();     //     "Manju,Amit,Abhi,Radib"
arr.join(' ');  //     "Manju Amit Abhi Radib"
// test.join(' '); join(); .join(', '); .join('')

/* ---------------------------------------------------------------------------------- */
/* Array methods */
/* https://www.w3schools.com/jsref/jsref_obj_array.asp */
/*
 * Map returns new array. kai norim pakoreguot reiksme
 * Foreach returns nothing. jei reikia atlikti su kiekviena reiksme ir nesigrazina, tik atvaizduot pvz
 * Find grazins objekta pirma. randa, grazina, nebevykdo.
 * Filter grazins array visa. prafiltruoja pagal kriteriju. jei true lieka, jei false
 * Some grazins ar bent vienas atitinka kriteriju
 * Every patikrina ar visi atitinka kriteriju
 *  => === return
*/

/* https://www.w3schools.com/js/js_array_sort.asp */
/* By default, the sort() function sorts values as strings. */
/* You can fix this by providing a compare function:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); */
// Comparing string:
const cars = [
    {brand:"Volvo", year:2016},
    {brand:"Saab", year:2001},
    {brand:"BMW", year:2010}
];
cars.sort(function(a, b){
    let x = a.brand.toLowerCase();
    let y = b.brand.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});


every()     // Checks if every element in an array pass a test
filter()    // Creates a new array with every element in an array that pass a test // prafiltruoja pagal kriteriju. jei true, jei false
find()      // Returns the value of the first element in an array that pass a test
forEach()	// Calls a function for each array element      // kai nekeisim nieko arrayui, tik parodyt reiksme ir pan
join()      // Joins all elements of an array into a string  // test.join(' '); join(); .join(', '); .join('')
map()       // Creates a new array with the result of calling a function for each array element // kai norim pakoreguot reiksme
reduce()    // Reduce the values of an array to a single value (going left-to-right)
reverse()   // Reverses the order of the elements in an array
slice()     // Selects a part of an array, and returns the new array
some()      // Checks if any of the elements in an array pass a test
splice()    // Adds/Removes elements from an array
toString()  // Converts an array to a string, and returns the result
valueOf()   // Returns the primitive value of an array

/*
map, forEach, filter, find, reduce, sort

map() - grazina nauja masyva su tiek pat nariu. naudojamas pakeisti strukturai, atrinkti keleta reiksmiu is obj. Tai kas grazinama arrow fn su return keliauja i nauja masyva

forEach() - atlikti kazka su kiekviena reiksme. (ideti i innerHtml reiksmes)

filter(() => true) - naudojamas atrinkti dali reiksmiu. Arrow fn grazinam true arba false. jei true tai reiksme atrenkama i nauja masyva.

find(() => true) - veikia taip pat kaip filtras tik grazina ta surasta masyva, objekta ar kintamaji kuris atitiko salyga. Find rades reiksme toliau nebeiesko
*/


/* ---------------------------------------------------------------------------------- */
/* ALL Array methods */
/* https://www.w3schools.com/jsref/jsref_obj_array.asp */

concat()	    // Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()	// Copies array elements within the array, to and from specified positions
entries()	    // Returns a key/value pair Array Iteration Object
every()	        // Checks if every element in an array pass a test
fill()      	// Fill the elements in an array with a static value
filter()    	// Creates a new array with every element in an array that pass a test
find()	        // Returns the value of the first element in an array that pass a test
findIndex()	    // Returns the index of the first element in an array that pass a test
forEach()   	// Calls a function for each array element
from()	        // Creates an array from an object
includes()	    // Check if an array contains the specified element
indexOf()	    // Search the array for an element and returns its position
isArray()	    // Checks whether an object is an array
join()	        // Joins all elements of an array into a string 
keys()	        // Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	// Search the array for an element, starting at the end, and returns its position
map()	        // Creates a new array with the result of calling a function for each array element
pop()	        // Removes the last element of an array, and returns that element
push()      	// Adds new elements to the end of an array, and returns the new length
reduce()	    // Reduce the values of an array to a single value (going left-to-right)
reduceRight()	// Reduce the values of an array to a single value (going right-to-left)
reverse()	    // Reverses the order of the elements in an array
shift()	        // Removes the first element of an array, and returns that element
slice()	        // Selects a part of an array, and returns the new array
some()	        // Checks if any of the elements in an array pass a test
sort()	        // Sorts the elements of an array
splice()	    // Adds/Removes elements from an array
toString()	    // Converts an array to a string, and returns the result
unshift()	    // Adds new elements to the beginning of an array, and returns the new length
valueOf()	    // Returns the primitive value of an array

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