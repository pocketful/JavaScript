"use strict";

/* ====================================== Tasks part 1 ========================================== */

const h1El = document.querySelector("h1");

const textEl = document.querySelector(".text");
textEl.style.color = "tomato";

const cardEl = document.querySelector(".card0");
cardEl.style.border = "2px solid black";
cardEl.style.padding = "20px";
cardEl.style.display = "inline-block";

const h2El = document.querySelector(".title");

h2El.style.fontWeight = "normal";
h2El.style.fontSize = "35px";
h2El.style.borderBottom = "2px solid black";

const ulEl = document.querySelector(".my-list");
ulEl.children[0].style.color = "green";

// or
const myListEl1 = document.querySelector(".my-list li:first-child");
// dvigubas fontSize;
myListEl1.style.fontSize = "2rem";
// const size = myListEl1.style.fontSize; // prilyginti

const myListEl2 = document.querySelector(".my-list li:nth-child(2)");
myListEl2.style.letterSpacing = "10px";
const myListEl3 = document.querySelector(".my-list li:last-child");
myListEl3.style.backgroundColor = "black";
myListEl3.style.color = "white";

// panasu i masyva, neveiks splice visokie
const liElArrayLike = document.querySelectorAll(".my-list li"); // All iesko kol grazina viska
liElArrayLike[1].style.color = "blue";

const button1 = document.getElementById("didinti");
const button2 = document.getElementById("mazinti");

button1.addEventListener("click", () => {
  h1El.style.fontSize = "50px";
});

button2.addEventListener("click", () => {
  // let dydis = parseInt(h1El.style.fontSize); // ne visada suveiks, su minusu gal neveiks
  let dydis = h1El.style.fontSize.replace("px", "");
  dydis = dydis - 10 + "px";
  h1El.style.fontSize = dydis;
});

/* pakeisti fono spalva pagal input */
/* <input id="fonas" type="text" placeholder="Pasikeiskite fono spalva" /> */
const inputColor = document.getElementById("fonas");

inputColor.addEventListener("blur", () => {
  const inputcolorValue = inputColor.value;
  console.log("inputcolorValue ===", inputcolorValue);
  document.body.style.backgroundColor = inputcolorValue;
});

/* jeigu iskelus i function */
// button1.addEventListener('click', () => {
//     didina();
// });
// function didina() {
//     h1El.style.fontSize = '50px';
// }

/* ====================================== Tasks part 2 ========================================== */

const buttonN = document.getElementById("buttonNight");
const buttonD = document.getElementById("buttonDay");
const cardEl1 = document.querySelector(".card1");

// kai paspaudziam ant night mode pakeiciam card el fono spalva i juoda, o spalva i balta
buttonN.addEventListener("click", () => {
  cardEl1.style.backgroundColor = "black";
  cardEl1.style.color = "white";

  /* 2 way, classlist method */
  // cardEl1.classList.add('naktis');

  /* 3 way, function */
  // toggleNight();
});

// prisideti mygtuka Day ir pakeisti spalvas atgal i dienos
buttonD.addEventListener("click", () => {
  cardEl1.style.backgroundColor = "white";
  cardEl1.style.color = "black";

  /* 2 way, classlist method */
  // cardEl1.classList.remove('naktis');

  /* 3 way */
  // toggleNight();
});

/* 3 way, function */
function toggleNight() {
  cardEl1.classList.toggle("naktis");
}

// cardEl1.className = 'naktis'; // overwrite visas pries tai klases, lieka viena
// cardEl1.className += 'naktis'; // prides klase, bet nuimti sunkiau

/* ---------------------------------------------------------------------------------------- */
// prisideti antra kortele ir padaryti kad ji veiktu nepriklausomai nuo pirmos

const cardEl2 = document.querySelector(".card2");
const buttonN2 = document.getElementById("buttonNight2");
const buttonD2 = document.getElementById("buttonDay2");

buttonN2.addEventListener("click", () => {
  cardEl2.style.backgroundColor = "black";
  cardEl2.style.color = "white";
});

buttonD2.addEventListener("click", () => {
  cardEl2.style.backgroundColor = "white";
  cardEl2.style.color = "black";
});

/* ---------------------------------------------------------------------------------------- */
// prisideti mygtuka 'edit title' ji paspaudus atsiranda ivesties laukas.
// jame keiciant skaitine reiksme keiciasi card title dydis pixeliais
// wrong way ideti eventa evente. daryt su display: none;

const buttonEdit = document.getElementById("editTitle");
const newInput = document.getElementById("newInput");
const title = document.querySelector(".c__title");
console.log(title);

buttonEdit.addEventListener("click", () => {
  newInput.innerHTML +=
    '<input type="number" id="numberInput" placeholder="Number" />';
  const numberInput = document.getElementById("numberInput");

  numberInput.addEventListener("input", () => {
    let size = numberInput.value;
    console.log("size", size);
    title.style.fontSize = size + "px";
  });
});

/* ---------------------------------------------------------------------------------------- */
// prisideti cardui checkbox su pavadinimu night mode
// kai pazymim varnele buna Night spalvos, kai varnele neuzzymeta Day spalvos

const cardEl3 = document.querySelector(".card3");
const checkbox = document.getElementById("checkNight");

checkbox.addEventListener("change", () => {
  if (checkbox.checked === true) {
    // cardEl3.style.backgroundColor = 'black';
    // cardEl3.style.color = 'white';
    cardEl3.classList.add("naktis");
    // toggleNight();
  } else {
    // cardEl3.style.backgroundColor = 'white';
    // cardEl3.style.color = 'black';
    cardEl3.classList.remove("naktis");
    // toggleNight();
  }
});

/* ---------------------------------------------------------------------------------------- */
// prisideti mygtuka kuris paslepia arba rodo visas korteles

const cardsEl = document.querySelectorAll(".card");
//const cardsClassEl = document.getElementsByClassName('card'); // same result
console.log("cards ===", cardsEl);

const buttonH = document.querySelector(".buttonHide");

buttonH.addEventListener("click", () => {
  const length = cardsEl.length;

  for (let i = 0; i < length; i++) {
    cardsEl[i].classList.toggle("hide");
    console.log(cardsEl[i].classList);
  }
});
