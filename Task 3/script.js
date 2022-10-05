/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const outputEl = document.getElementById('output');

document.getElementById('btn').addEventListener('click', getData);

async function getData() {
    try {
        const response = await fetch(ENDPOINT);
        // console.log('response ===', response);
        const data = await response.json();
        // console.log('data ===', data);
        if (!response.ok) {
            throw new Error(`${data.message}`);
        }
        generateCards(data);
    } catch (error) {
        renderError(`${error}`);
        console.log(error);
    }
}

function generateCards(array) {    
    outputEl.innerHTML = '';
    array.forEach((user) => outputEl.innerHTML += createCard(user));
}

function createCard(userObj) {
    return `
    <figure class="card">
        <img class="card-img" src="${userObj.avatar_url}" alt="image of ${userObj.login}">
        <figcaption class="card-caption">${userObj.login}</figcaption>        
    </figure>
    `;
}

function renderError(msg) {
    outputEl.innerHTML = `<p>${msg}</p>`;
}
