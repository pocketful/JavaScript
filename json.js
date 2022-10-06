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
const obj = { name: "John", age: 30, city: "New York" };
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
console.log("object.name ===", object.name); // object.name === John
