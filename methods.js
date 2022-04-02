
/* Array methods */ 
/* https://www.w3schools.com/js/js_array_methods.asp */

let colors = ['green', 'blue', 'red'];
console.log('colors ===', colors);

// array.push() - prideti reiksme i masyvo gala (modifikuoja originala)
colors.push('yellow', 'brown');
console.log('colors po push ===', colors);

// array.unshift() - prideti reiksme i masyvo pradzia (modifikuoja originala)
colors.unshift('pink');
console.log('colors po unshift ===', colors);

// array.shift() - istrina pirma reiksme is masyvo (modifikuoja originala)
colors.shift();
console.log('colors po shift ===', colors);

// array.pop() - istrina paskutine reiksme is masyvo (modifikuoja originala)
colors.pop();
console.log('colors po pop ===', colors);

// pirma atimta reiksme is masyvo issisaugot
const firstColor = colors.shift();
console.log('firstColor ===', firstColor);
console.log('colors po shift ===', colors);

// array slice() - isima reiksmes i new array, nekeicia originalo. paskutinio neiskaiciuoja
let colorsBig = ['green', 'blue', 'red', 'yellow', 'pink'];
console.log('colorsBig ===', colorsBig);
colorsBig = colorsBig.slice(2, 4);  // (0) paima visus skaicius nuo pradzios iki galo. -1 paims paskutini elemeta 
colorsBig = colorsBig.slice(2, 1);  // 2 pozicija, 1 elementa. splice(start, deleteCount). butina irasyti antra skaiciu
console.log('colorsBig po slice ===', colorsBig);  // ['red', 'yellow']

// array splice() - ideda reiksmes
let colorsBig2 = ['green', 'blue', 'red', 'yellow', 'pink'];
console.log('colorsBig2 ===', colorsBig2);
colorsBig2.splice(1, 2); // // At position 1, remove 2 items: ['blue'], ['red'] pasalina
console.log('colorsBig2 ===', colorsBig2);
    colorsBig2 = colorsBig2.splice(1, 2);  // issaugoti pasalintus elementus var ['blue', 'red']
    console.log('colorsBig2 po splice ===', colorsBig2);  // ['blue', 'red', 'yellow']


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
/* String methods */
/* https://www.w3schools.com/jsref/jsref_obj_string.asp */

charAt()	    // Returns the character at a specified index (position)
charCodeAt()	// Returns the Unicode of the character at a specified index
concat()	    // Returns two or more joined strings
endsWith()	    // Returns if a string ends with a specified value
fromCharCode()	// Returns Unicode values as characters
includes()	    // Returns if a string contains a specified value
indexOf()	    // Returns the index (position) of the first occurrence of a value in a string
lastIndexOf()	// Returns the index (position) of the last occurrence of a value in a string
localeCompare()	// Compares two strings in the current locale
match()	        // Searches a string for a value, or a regular expression, and returns the matches
repeat()	    // Returns a new string with a number of copies of a string
replace()	    // Searches a string for a value,or a regular expression,and returns a string where the values are replaced
search()	    // Searches a string for a value,or regular expression,and returns the index (position) of the match
slice()	        // Extracts a part of a string and returns a new string
split()	        // Splits a string into an array of substrings // text.split(', ')>> words; || text.split('') >> separate letters; || text.split()>>one array item; 
startsWith()	// Checks whether a string begins with specified characters
substr()	    // Extracts a number of characters from a string, from a start index (position)
substring()	    // Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	// Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	// Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	// Returns a string converted to lowercase letters
toString()      // Returns a string or a string object as a string
toUpperCase()	// Returns a string converted to uppercase letters
trim()	        // Returns a string with removed whitespaces
valueOf()	    // Returns the primitive value of a string or a string object

/* ---------------------------------------------------------------------------------- */
/* Number methods */
/* https://www.w3schools.com/jsref/jsref_obj_number.asp */

isFinite()	     // Checks whether a value is a finite number
isInteger()	     // Checks whether a value is an integer
isNaN()	         // Checks whether a value is Number.NaN
isSafeInteger()	 // Checks whether a value is a safe integer
toExponential(x) // Converts a number into an exponential notation
toFixed(x)	     // Formats a number with x numbers of digits after the decimal point
toLocaleString() // Converts a number into a string, based on the locale settings
toPrecision(x)	 // Formats a number to x length
toString()	     // Converts a number to a string
valueOf()	     // Returns the primitive value of a number

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


/* ---------------------------------------------------------------------------------- */
/* Regular Expression Patterns */
/* https://www.w3schools.com/js/js_regexp.asp */
/* https://www.w3schools.com/jsref/jsref_obj_regexp.asp */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
/* https://regex101.com/ */
// /pattern/modifier(s);
// let pattern = /w3schools/ig;
// g	 Perform a global match (find all matches rather than stopping after the first match)
// i	 Perform case-insensitive matching
// m	 Perform multiline matching

//   /[\d{3}]/g;    // 1,0,0 - nzn ar ok
//   /\d{3}/g;      // 100

/* Regular Expression Search Methods
In JavaScript, a regular expression text search, can be done with different methods.
With a pattern as a regular expression, these are the most common methods:
Example	                Description
text.match(pattern)	    The String method match()
text.search(pattern)	The String method search()
pattern.exec(text)	    The RexExp method exec()
pattern.test(text)	    The RegExp method test()  */

// let text = "Th A E";
let text = "The ee Ae E";
console.log(text.match(/e/g));  // (4) ['e', 'e', 'e', 'e']  ||  null
console.log(text.search(/e/g)); // 2  ||  -1
console.log(/e/g.exec(text));   // ['e', index: 2, input: 'The ee Ae E', groups: undefined]  ||  null
console.log(/e/g.test(text));   // true  ||  false


// The match() method matches a string against a regular expression ** If the search value is a string, it is converted to a regular expression.
// The match() method returns an array with the matches, otherwise it returns null.
text.match(/e/g); // an array with the matches. null if no match

// The search() method matches a string against a regular expression **
// The search() method returns the index (position) of the first match.
// The search() method returns -1 if no match is found.
// The search() method is case sensitive.
text.search(/e/g); // The position of the first match. -1 if no match.

// The exec() method tests for a match in a string.
// If it finds a match, it returns a result array, otherwise it returns null.
/e/g.exec(text);  // search a string for 'e', returns ['e', index: 2, input: 'The ee Ae E', groups: undefined]

// The test() method tests for a match in a string.
// If it finds a match, it returns true, otherwise it returns false.
/e/g.test(text);  // search a string for 'e', returns true


match()	        // Searches a string for a value,or a regular expression, and returns the matches
search()	    // Searches a string for a value,or regular expression,and returns the index of the match

repeat()	    // Returns a new string with a number of copies of a string
replace()	    // Searches a string for a value,or a regular expression,and returns a string where the values are replaced


/* JSON ---------------------------------------------------------------------------------- */
// https://www.w3schools.com/js/js_json_stringify.asp
// https://www.w3schools.com/jsref/jsref_stringify.asp
// https://www.w3schools.com/js/js_json_parse.asp
// https://www.w3schools.com/jsref/jsref_parse_json.asp
// The JSON.stringify() method converts JavaScript objects into strings.
// When sending data to a web server the data has to be a string.
// JSON.stringify(obj, replacer, space)
// Date objects are not allowed in JSON.If you need to include a date,write it as a string,convert later

console.log(JSON.stringify(fruits)); // to string ["apple","orange"]
console.log(JSON.parse(JSON.stringify(fruits))); // to js obj again (2) ['apple', 'orange']

// object
const obj = {name: "John", age: 30, city: "New York"};
const objJSON = JSON.stringify(obj); // {"name":"John","age":30,"city":"New York"} string

// array
const arr = ["John", "Peter", "Sally", "Jane"];
const arrJSON = JSON.stringify(arr); // ["John","Peter","Sally","Jane"] string

// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj); // '{"name":"John","age":31,"city":"New York"}'  string
localStorage.setItem("testJSON", myJSON); 

// Retrieving data:
let textas = localStorage.getItem("testJSON");
let object = JSON.parse(textas); // {name: 'John', age: 31, city: 'New York'}
console.log('object.name ===', object.name); // object.name === John
