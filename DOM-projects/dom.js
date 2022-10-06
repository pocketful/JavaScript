/* ============================= DOM 1 ========================== */
console.log(document);

// 1. Task ---------------------------- */
// <h2 id="title">Title</h2> */

/* Nusitaikyti i title */
document.getElementById("title").innerHTML = "Pakeiciau is JS";

/* Pakeisti elementa kurio id == title ir irasyti ten savo sakini */
const titleEl = document.getElementById("title");
titleEl.innerHTML = "Pakeistas title tekstas";
// titleEl.innerHTML = '<button>click me</button>';

/* Prideti prie esamos titleEl reiksmes " prideta, neperrasyta" */
titleEl.innerHTML += " prideta, neperrasyta";

/* 2. Task ----------------------------- */
/* <p>Jei sudauginsim skaicius nuo 5 iki 12 tai gausim <span id="daugyba"></span></p> */

const daugybaEl = document.getElementById("daugyba");

// for cikas nuo 5 - 12 ir sudauginam
let daugyba = 1; // 5 ar 1
for (let i = 5; i <= 12; i++) {
  // 6 ar 5
  console.log(`${daugyba} * ${i}`);
  daugyba *= i;
  // console.log('daugyba ===', daugyba);
}
// console.log('Galutine daugyba ===', daugyba);
daugybaEl.innerHTML = daugyba;

/* 3. Task ----------------------------- */
/*  <ul id="my-list"></ul>
Nusitaikom i my-list ul el ir jo viduje sugeneruojam 5 li el su tekstu: Item 1, Item 2... */

// mok:
const myListEl2 = document.getElementById("my-list");
let liElSak = "";
for (let i = 1; i < 6; i++) {
  liElSak += `<li>Item ${i}</li>`;
  // myListEl2.innerHTML += '<li>Item 1</li>';
  // myListEl2.innerHTML += '<li>Item 2</li>';
  // myListEl2.innerHTML += '<li>Item 3</li>';
}
console.log("liElSak ===", liElSak);
myListEl2.innerHTML = liElSak;

// mano:
let myListEl = document.getElementById("my-list");
for (let i = 1; i < 6; i++) {
  myListEl.innerHTML += `<li>List item ${i} </li>`;
}

/* 4. Task ----------------------------- */
/* Sudeti skaicius nuo 1 iki 10. kiekvieno sudejimo zingsnio rezultata sugeneruoti rikiuoto saraso pavidalu <div id="visas"></div>

<div id="visas">
    <ol>
        <li>1+2</li>
        <li>3+3</li>
        <li>6+4</li>
        ....
    </ol>
</div>
*/

const myDivVisas = document.getElementById("visas");
let myLiItem = "";
let sum = 1;
for (let i = 2; i <= 10; i++) {
  let sudetis = `${sum} + ${i}`;
  sum += i;
  myLiItem += `<li>${sudetis} = ${sum}</li>`;
}
myDivVisas.innerHTML = `<ol>${myLiItem}</ol>`;

/* ============================= DOM 2 selectors ========================== */

/* 5. Task ----------------------------- */
/*  <header id="header">
      <h2>Hello</h2>
      <h2>World</h2>
    </header> */
const headerEl = document.getElementById("header");
headerEl.innerHTML += "aa ";

const headerEl2 = document.querySelector("#header");
headerEl2.innerHTML += "bb ";

const h2FirstEl = document.querySelector("header h2:first-child");
h2FirstEl.innerHTML += " added";

/* 6. Task ----------------------------- */
/*  <article>
      <h2 class="title">art title</h2>
      <p class="text">text</p>
    </article>
*/
/* Pakeisti article viduje esancio el title */
const articleTitleEl = document.querySelector("article .title");
articleTitleEl.innerText = "article title pakeistas"; //jeigu nededam tagu geriau innerText ar textContent

/* 7. Task ----------------------------- */
/*  <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
*/
/* Idekim mygtuka i <li>item 3</li> */
const li3El = document.querySelector("li:nth-child(3)");
li3El.innerHTML = "<button>Click</button>";
// li3El.innerHTML = `<button onclick="console.log('you are well')">Click me for alert</button>`;
