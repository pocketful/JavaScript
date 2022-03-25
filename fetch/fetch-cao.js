'use strict';

/* CAO FETCH GET ===================================================================================================== */
/* 1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color). */
/* 2. Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje). */
/* 3. Pridėkite prie lentelės (tarp id ir name) nuotrauką. */
/* 4. Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP. */
/* 5. Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi. */

const task1El = document.getElementById('task1');

function getData() {
  fetch('https://magnetic-melon-yam.glitch.me')
    .then(response => response.json())
    .then(data => {
      const tbodyEl = createTable();
      data.forEach((element) => {
        createRows(element.id, element.name, element.city, element.fav_color, tbodyEl);
      });
      
    })
    .catch((error) => console.warn(error.message));
}
getData();


// create a table
function createTable() {
  const tableEl = document.createElement('table');
  tableEl.innerHTML = '';
  task1El.after(tableEl);

  // thead:
  const theadEl = document.createElement('thead');
  tableEl.append(theadEl);
  const trEl = document.createElement('tr');
  theadEl.append(trEl);
  // create th titles
  trEl.append(createTh('Id'), createTh('Name'), createTh('City'), createTh('Favourite color'));

  // tbody:
  const tbodyEl = document.createElement('tbody');
  tableEl.append(tbodyEl);

  return tbodyEl;
}

// create th titles
function createTh(title) {
  const thEl = document.createElement('th');
  thEl.textContent = title;
  return thEl;
}

// create td rows from data
function createRows(id, name, city, color, tbodyEl) {
  const trEl = document.createElement('tr');
  tbodyEl.append(trEl);

  // createTh(id, trEl);
  trEl.append(createTd(id), createTd(name), createTd(city), createTd(color));
}

// create td elements
function createTd(key) {
  const tdEl = document.createElement('td');
  tdEl.textContent = key;
  return tdEl;
}

