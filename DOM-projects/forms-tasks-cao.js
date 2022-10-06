"use strict";

/* 1. Veiksmų eiliškumas
   2. Susikuriame formą HTML. Neužmirštame mygtukui duoti type="submit".
   3. Su JavaScript pasirenkame formą ir jai pritaikome addEventListener su submit event'u.
   4. Pasirašome funkciją, kuri pasileidžia submit eventui įvykus. Funkcija pasiima event kaip parametrą ir sustabdo default veiksmą (šiuo metu - formos duomenų siuntimą ir dėl to puslapio persikrovimą).
   5. Pasitikrinę su console.log(), kad funkcija pasileidžia po submit event - pasiimame input elementus ir jų reikšmias. Vėl pasitikriname ar tikrai teisingai pasiėmėme duomenis.
   6. Laikas įgyvendinti logiką su seniau išmoktais metodais viduj funkcijos, kad atliktume pratimus! */

/* 1. Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
Pvz: [16] => "Jūsų bonusas: 100 eurų". */

/* 1 way - form */

/* <form id="form31">
      <input type="number" placeholder="How many years" name="years31" /><br />
      <button type="submit">Submit</button>
   </form> 
   <p id="result31">Submit and find out your bonus:</p> */

// nusitaikyt i forma
const formEl31 = document.forms.form31;

// formos paspaudimui eventListener
formEl31.addEventListener("submit", function (event) {
  event.preventDefault();

  // inputo reiksme issaugom kintamajame
  const yearsValue = formEl31.elements.years31.value;
  // console.log(yearsValue);

  // nusitaikyt i atsakymo eilute
  const resultEl31 = document.getElementById("caoResult31");

  if (yearsValue > 20) {
    resultEl31.textContent = "Submit and find out your bonus: 200e";
    console.log("Jūsų bonusas: 200 eurų");
  } else if (yearsValue > 10) {
    resultEl31.textContent = "Submit and find out your bonus: 100e";
    console.log("Jūsų bonusas: 100 eurų");
  } else {
    resultEl31.textContent = "Submit and find out your bonus: 50e";
    console.log("Jūsų bonusas: 50 eurų");
  }
});

/*  2 way - without form, only input and button */

/* <input type="text" id="input31" placeholder="How many years 1" name="years31" />
    <button id="button31">Submit 1</button> */

// button paspaudus
const buttonEl31 = document.getElementById("button31");
const inputEl31 = document.getElementById("input31");

buttonEl31.addEventListener("click", function () {
  const yearsValue31 = parseInt(inputEl31.value);

  if (yearsValue31 > 20) {
    console.log("Jūsų bonusas: 200 eurų");
  } else if (yearsValue31 > 10) {
    console.log("Jūsų bonusas: 100 eurų");
  } else {
    console.log("Jūsų bonusas: 50 eurų");
  }
});

/* 2. Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoti trikampį pagal įvestą input.
Pvz: Įvesta: 2. Rezultatas:
*
**
Įvesta: 5. Rezultatas:
*
**
***
****
*/

const formEl36 = document.getElementById("form36");
const numberEl36 = document.getElementById("number36");
const resultEl36 = document.getElementById("result36");

formEl36.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(numberEl36.value);
  let row = "";
  let stars = "";

  // Make rows
  for (let i = 0; i < height; i++) {
    // Stars
    for (let j = 0; j <= i; j++) {
      stars += "*";
    }
    row += `<p>${stars}</p>`;
    stars = "";
  }
  resultEl36.innerHTML = row;
});

/* 3. Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
Pvz.: Petras, Jonas, Mantas, Antanas. */
/*  <input type="text" name="name43" id="name43" placeholder="Name" />
    <p id="caoResult43"></p> */

const inputEl43 = document.getElementById("name43");
const outEl43 = document.getElementById("caoResult43");

inputEl43.addEventListener("blur", function () {
  outEl43.textContent += `${inputEl43.value}, `;
});

/* 4. Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.
Pvz.: fn(101, 81) grąžins 101. */
/*  <form id="form44">
        <input type="number" id="number44a" placeholder="Number 1" name="number44a" />
        <input type="number" id="number44b" placeholder="Number 2" name="number44b" />
        <button type="submit">Submit</button>
    </form>
    <p id="result44"></p>
*/

const formEl44 = document.getElementById("form44");
const numberEl44a = document.getElementById("number44a");
const numberEl44b = document.getElementById("number44b");
const resultEl44 = document.getElementById("result44");

formEl44.addEventListener("submit", (event) => {
  event.preventDefault();
  const num1 = parseInt(numberEl44a.value);
  const num2 = parseInt(numberEl44b.value);

  const result1 = Math.abs(100 - num1);
  const result2 = Math.abs(100 - num2);

  if (result1 < result2) {
    resultEl44.textContent = num1;
  } else if (result1 > result2) {
    resultEl44.textContent = num2;
  } else {
    resultEl44.textContent = "Vienodai";
  }
});

/* 5. Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius tarp 1 ir 5. Vartotojas turi formą su vienu input - gali spėti skaičių. Atspėjus - išmeta alert(atspejai), kitaip alert(neatspejai).
Pakoreguokite penktą pratimą, kad skaičiuotų iš kelinto karto atspėjai ir tai parašytų alert'e. */

/*  <form id="form45">
      <input type="number" id="number45" placeholder="Gues a number" name="number45" />
      <button type="submit">Submit</button>
    </form>
    <p id="result45"></p> */

const formEl45 = document.getElementById("form45");
const numberEl45 = document.getElementById("number45");
const resultEl45 = document.getElementById("result45");

let counter = 0;

formEl45.addEventListener("submit", (event) => {
  event.preventDefault();

  // counter
  counter++;
  console.log("counter ===", counter);

  // your number
  const number = parseInt(numberEl45.value);
  console.log("your number ===", number);

  // random number
  const random = randomNumber();
  console.log("random number === ", random);

  // lottery
  if (random === number) {
    resultEl45.textContent = `You won! It's your ${counter} guess`;
    counter = 0;
  } else {
    resultEl45.textContent = "You lost";
  }
});

function randomNumber() {
  const num = Math.floor(Math.random() * 5) + 1;
  return num;
}
randomNumber();
