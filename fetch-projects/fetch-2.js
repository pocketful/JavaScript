"use strict";

const baseUrl = "https://jsonplaceholder.typicode.com";
// nusitaikom i mygtuka ir app el
const usersBtnEl = document.getElementById("user-btn");
const usersSortBtnEl = document.getElementById("sort-by-name");
const appEl = document.getElementById("app");

function getUsers(doYouNeedToSort) {
  fetch(`${baseUrl}/users`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data ===", data);

      if (doYouNeedToSort === true) {
        data.sort((a, b) => (a.name > b.name ? 1 : -1));
      }

      generateUsersList(data);
    })
    .catch((err) => console.log(err.message));
}

function singleUserData(id) {
  fetch(`${baseUrl}/users/${id}`)
    .then((resp) => resp.json())
    .then((data) => createSingleUserInfo(data))
    .catch((err) => console.log(err.message));
}

// mygtuko paspaudimu parsisiusti visus vartotojus
usersBtnEl.addEventListener("click", getUsers);

// is gautu duomenu sugeneruoti li elementus, button
// sugeneruoti ol el, ir sudeti i ji li elementus. ol el patalpini appEl
function generateUsersList(usersArr) {
  appEl.innerHTML = null; // or ''
  const olEl = document.createElement("ol");
  usersArr.forEach((uObj) => {
    const madeLi = makeOneLi(uObj.id, uObj.name, uObj.email, uObj.company.name);
    olEl.append(madeLi);
  });
  appEl.append(olEl);
}

function makeOneLi(id, name, email, compName) {
  const liEl = document.createElement("li");
  liEl.textContent = `${name}  ${email}  ${compName} `;
  const btnEl = document.createElement("button");
  btnEl.textContent = "more info";
  btnEl.addEventListener("click", () => getSingleUser(id));
  liEl.append(btnEl);
  return liEl;
}

function getSingleUser(id) {
  console.log("getSingleUser", id);
  // parsisiusti vartotojo duomenis
  singleUserData(id);
  // sukurti korteles el,
  // supildyti vartotojo duomenis
}

function createSingleUserInfo(uObj) {
  const cardHtml = `
  <div class="card">
    <h3>${uObj.name}</h3>
    <p>Address: street: ${uObj.address.street} city: ${uObj.address.city} zip: ${uObj.address.zipcode} </p>
    <p>tel: ${uObj.phone} </p>
    <h4>${uObj.company.catchPhrase}</h4>
  </div>
  `;
  appEl.insertAdjacentHTML("afterbegin", cardHtml);
}

// mygtuko 'read more' paspaudimu parsiunciam tik nurodyto vartotojo info
// atvaizduojam papildomoj korteleje virs saraso
// 1. paspaudus mygtuka atspausdinkite to vartotojo id ant kurio paspausta.
// 2. turedami id parisiuskite su papildomu fetch info apie ta vartotoja
// 3. sukurti ir supildyti vartotojo korteles info.
// 4. atvaizduojam varda, addreso, gatve, miesta ir zip koda, telefona ir catchphrase

// prideti istrynimo mygtuka salia 'more info'

// <button id="sort-by-name">Sort by name ASC</button>
// isrikiuoti sarasa pagal name
usersSortBtnEl.addEventListener("click", () => getUsers(true));

/* Users 2 (innerHTML, no fn) -------------------------------------------------------------------------------- */

const userBtnEl = document.getElementById("user-btn2");
const appEl1 = document.getElementById("app2");
const olEl = document.createElement("ol");
appEl1.append(olEl);

userBtnEl.addEventListener("click", () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      users.forEach((user) => {
        olEl.innerHTML += `<li>${user.name}, ${user.email}, ${user.company.name} <button id="${user.id}">read more</button></li>`;
      })
    )
    .catch((error) => console.warn(error.message))
);

// mygtuko 'read more' paspaudimu parsiunciam tik nurodyto vartotojo info
// atvaizduojam papildomoj korteleje virs saraso
// 1. paspaudus mygtuka atspausdinkite to vartotojo id ant kurio paspausta.
// 2. turedami id parisiuskite su papildomu fetch info apie ta vartotoja
// 3. sukurti ir supildyti vartotojo korteles info.
// 4. atvaizduojam varda, addreso, gatve, miesta ir zip koda, telefona ir catchphrase

appEl1.addEventListener("click", (event) => {
  console.log("event.target ===", event.target.id); // event ant kurio paspausta, grazins jo id
  // const clickedId = parseInt(event.target.id);
  // fetch('https://jsonplaceholder.typicode.com/users')
  const clickedId = event.target.id;
  fetch(`https://jsonplaceholder.typicode.com/users/${clickedId}`)
    .then((response) => response.json())
    // .then(users => users.find((user) => user.id === clickedId))
    .then((user) => {
      const userPEl = document.createElement("p");
      userPEl.textContent = `${user.name}, ${user.address.street}, ${user.address.zipcode}, ${user.phone}, ${user.company.catchPhrase}`;
      appEl1.prepend(userPEl);
    })
    .catch((error) => console.warn(error.message));
});
