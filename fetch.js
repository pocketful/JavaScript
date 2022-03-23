'use strict';
/* https://www.w3schools.com/js/js_json_intro.asp */
/* https://jsonplaceholder.typicode.com/ - free online REST API for some fake data */
/* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */

const peopleObjs = [
    {
        name: 'Arananas',
        surname: 'Baras',
        age: 7,
        height: 110,
        weight: 40,
        sex: 'male',
    },
    {
        name: 'Ugne',
        surname: 'Pugne',
        age: 17,
        height: 170,
        weight: 60,
        sex: 'female',
    },
    {
        name: 'Saulius',
        surname: 'Bezda',
        age: 77,
        height: 165,
        weight: 90,
        sex: 'male',
    },
    {
        name: 'Kentas',
        surname: 'Bentas',
        age: 27,
        height: 166,
        weight: 40,
        sex: 'male',
    },
    {
        name: 'Sauja',
        surname: 'Mauja',
        age: 37,
        height: 165,
        weight: 55,
        sex: 'female',
    },
    {
        name: 'Nojus',
        surname: 'Beda',
        age: 39,
        height: 184,
        weight: 92,
        sex: 'male',
    },
    {
        name: 'Laras',
        surname: 'Makaule',
        age: 27,
        height: 192,
        weight: 88,
        sex: 'male',
    },
    {
        name: 'Fanta',
        surname: 'Firtaite',
        age: 17,
        height: 168,
        weight: 75,
        sex: 'female',
    },
];

/* user1 JSON ------------------------------------------------------------------------------------------- */

const user1 = {
    name: 'James',
    age: 45,
    hasCar: true,
    score: null,
}
console.log('user1 ===', user1); // {name: 'James', age: 45, hasCar: true, score: null} //obj

// JSON.stringify() to convert a JavaScript object into a string
const user1JSON = JSON.stringify(user1); // {"name":"James","age":45,"hasCar":true,"score":null} // string
// console.log('user1JSON ===', user1toJSON); 

// JSON.parse() to convert text into a JavaScript object:
const user1fromJSON = JSON.parse(user1JSON); // {name: 'James', age: 45, hasCar: true, score: null} // obj
// console.log('user1fromJSON ===', user1fromJSON);

console.log(user1 === user1fromJSON); // false, nes skirtingi adresai
// reiksmes palyginti galima su json, nes pavertsa i stringus


/* peopleObjs JSON --------------------------------------------------------------------------------------- */
console.log('peopleObjs ===', peopleObjs);

const peopleJSON = JSON.stringify(peopleObjs);
console.log('peopleJSON ===', peopleJSON);

const peoplefromJSON = JSON.parse(peopleJSON);
console.log('peoplefromJSON ===', peoplefromJSON);


/* fetch ---------------------------------------------------------------------------------------------- */
// fetch(address, {opciju obj})

// json
fetch('fetch.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.warn(error)); // 404 (Not Found)

// same
fetch('fetch.json')
    .then(response => {
        console.log(response) // Response {type: 'basic', url: 'http://127.0.0.1:5500/fetch.json', redirected: false, status: 200, ok: true, …}
        return response.json()
        // return response.text() // text formatu obj
    })
    // .then(response => response.json()) 
    .then(data => console.log('json ===', data)) // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    .catch((error) => console.warn(error));

// text
fetch('fetch.txt')
    .then(response => response.text())
    .then(data => console.log('text ===', data))
    .catch((error) => console.warn(error)); // 404 (Not Found)


