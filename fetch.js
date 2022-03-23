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


/* fetch from REST API --------------------------------------------------------------------------------- */

// parsiusti ir iskonsolinti 100 postu is https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log('API posts ===', data))

// get 50 comments
fetch('https://jsonplaceholder.typicode.com/comments/')
    .then(response => response.json())
    //.then(data => data.filter((entry, i) => i < 50))
    //.then(data => console.log('API 50 comments ===', data.slice(0, 50)))
    .then(data => data.slice(0, 50))
    .then(print => console.log('API 50 comments ===', print))

// get all users
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log('API users ===', data))

// get all comments of post 5
fetch('https://jsonplaceholder.typicode.com/posts/5/comments')
    .then(response => response.json())
    .then(data => console.log('API comments of post 5 ===', data))

// get all users usernames in an array
fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(data => data.map((entry) => entry.username))
    .then(show => console.log('API usernames ===', show))

// get all users cities in an array
fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(data => data.map((entry) => entry.address.city))
    .then(show => console.log('API users cities ===', show))

// get Random joke from https://api.chucknorris.io/ api
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json()) // object
    .then(data => data.value)
    .then(show => console.log('Chuck ===', show))

// display joke as an html card
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => data.value)
    .then(card => {
        createCard(card);
    })
    .catch((error) => console.warn(error.message));

function createCard(text) {
    const cardEl = document.createElement('div');
    cardEl.textContent = text;
    cardEl.style.backgroundColor = 'yellow';
    cardEl.style.padding = '10px';
    cardEl.style.textAlign = 'center';
    document.body.append(cardEl);
}

// paspaudus ant mygtuko ivykdom funkcija kuri parsiuncia joke ir atvaizduoja ji h3 el
// papildomai paspaudus parsiunciamas naujas joke uzrasomas ant virsaus
/* <button id="btn1">Get a joke</button>
   <h3 id="joke"></h3> */

const btnEl = document.getElementById('btn1');
const h3El = document.getElementById('joke');

btnEl.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => data.value)
    .then(card => {
        h3El.textContent = card;
        // h3El.innerHTML += card + '<br/><br/>';
    })
    .catch((error) => console.warn(error.message));      
});
