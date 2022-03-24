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
// fetch(url, [options])

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

// paspaudus ant mygtuko ivykdom funkcija kuri parsiuncia joke ir atvaizduoja ji h2 el
// papildomai paspaudus parsiunciamas naujas joke uzrasomas ant virsaus
/* <button id="btn1">Get a joke</button>
   <h2 id="joke"></h2> */

const btnEl = document.getElementById('btn1');
const h2El = document.getElementById('joke');

btnEl.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => data.value)
    .then(card => {
        h2El.textContent = card;
        // h2El.innerHTML += card + '<br/><br/>';
    })
    .catch((error) => console.warn(error.message));      
});


/* CAO ================================================================================================== */

/* 1. Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML/CSS pasirašyti, bet norintiems sunkumo - pabandykite ir su JS): */

fetch('https://randomuser.me/api/?seed=belekoks&inc=name,dob,email,picture&noinfo') // same user, less info
    .then(response => response.json())
    .then(user => {
        user = user.results[0];
        const nameF = user.name.first;
        const nameL = user.name.last;
        const age = user.dob.age;
        const email = user.email;
        const img = user.picture.large;
        createProfile(nameF, nameL, age, email, img);
    })

function createProfile(firstname, lastname, age, email, pic) {
    const divEl = document.createElement('div');
    document.querySelector('h3').after(divEl);

    const imgEl = document.createElement('img');
    imgEl.src = pic;
    imgEl.alt = 'user image';
    divEl.append(imgEl);

    const nameEl = document.createElement('p');
    nameEl.textContent = `${firstname} ${lastname}`;
    divEl.append(nameEl);

    const ageEl = document.createElement('p');
    ageEl.textContent = `${age} years old`;
    divEl.append(ageEl);

    const emailEl = document.createElement('p');
    emailEl.textContent = email;
    divEl.append(emailEl);

    // style
    document.body.style.backgroundColor = 'gainsboro';
    document.body.style.fontFamily = 'Trebuchet MS';
    document.body.style.fontSize = '20px';
    divEl.style.width = 'fit-content';
    divEl.style.backgroundColor = 'white';
    divEl.style.borderRadius = '10px';
    imgEl.style.borderRadius = '10px';
    divEl.style.padding = '20px';
    divEl.style.margin = 'auto';
    divEl.style.textAlign = 'center';
    ageEl.style.color = 'Sienna';
    emailEl.style.color = 'Olive';
}


/* --------------------------------------------------------------------------------------------------- */
/* 2. Naudojant "https://boiling-reaches-93648.herokuapp.com/week-3/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne? */

fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party')
    .then(response => response.json())
    .then(data => data.find((user) => user.name === 'Kristupas Lapeika'))
    .then(user => document.getElementById('vip').textContent = user.vip)
    .catch((error) => console.warn(error.message));


/* --------------------------------------------------------------------------------------------------- */
/* 3. Organizuojate vestuves - pasiimkite informaciją iš "https://boiling-reaches-93648.herokuapp.com/week-3/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-". */

fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding')
    .then(response => response.json())
    .then(users => users.forEach((user) => toTable(user.name, replaceToSign(user.plusOne), replaceToSign(user.attending))))
    .catch((error) => console.warn(error.message));


// create a new line
function toTable(name, plusone, attending) {
    const tbody = document.querySelector('tbody')
    const trEl = document.createElement('tr');
    tbody.append(trEl);

    const tdNameEl = document.createElement('td');
    tdNameEl.textContent = name;
    trEl.append(tdNameEl);

    const tdPlusOneEl = document.createElement('td');
    tdPlusOneEl.textContent = plusone;
    trEl.append(tdPlusOneEl);

    const tdAttendEl = document.createElement('td');
    tdAttendEl.textContent = attending;
    trEl.append(tdAttendEl);
}

function replaceToSign(text) {
    const textStr = text.toString();
    return textStr === 'true' ? textStr.replace('true', '+') : textStr.replace('false', '-');
}

/* https://openweathermap.org/ */