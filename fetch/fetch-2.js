'use strict';

const userBtnEl = document.getElementById('user-btn2');
const appEl1 = document.getElementById('app2');
const olEl = document.createElement('ol');
appEl1.append(olEl);


userBtnEl.addEventListener('click', () =>
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => users.forEach((user) => {
            olEl.innerHTML += `<li>${user.name}, ${user.email}, ${user.company.name} <button id="${user.id}">read more</button></li>`
        }))
        .catch((error) => console.warn(error.message))
)

// mygtuko 'read more' paspaudimu parsiunciam tik nurodyto vartotojo info
// atvaizduojam papildomoj korteleje virs saraso
// 1. paspaudus mygtuka atspausdinkite to vartotojo id ant kurio paspausta.
// 2. turedami id parisiuskite su papildomu fetch info apie ta vartotoja
// 3. sukurti ir supildyti vartotojo korteles info.
// 4. atvaizduojam varda, addreso, gatve, miesta ir zip koda, telefona ir catchphrase

appEl1.addEventListener('click', (event) => {
    console.log('event.target ===', event.target.id); // event ant kurio paspausta, grazins jo id    
    // const clickedId = parseInt(event.target.id);
    // fetch('https://jsonplaceholder.typicode.com/users')
    const clickedId = event.target.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${clickedId}`)
    .then(response => response.json())
    // .then(users => users.find((user) => user.id === clickedId))
    .then(user => {
        const userPEl = document.createElement('p');
        userPEl.classList.add('user-p');
        userPEl.textContent = `${user.name}, ${user.address.street}, ${user.address.zipcode}, ${user.phone}, ${user.company.catchPhrase}`
        appEl1.prepend(userPEl);        
    })
    .catch((error) => console.warn(error.message))    
});