'use strict';

/* CAO FETCH GET ===================================================================================================== */
/* 1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color). */
/* 2. Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje). */
/* 3. Pridėkite prie lentelės (tarp id ir name) nuotrauką. */
/* 4. Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP. */
/* 5. Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi. */

const tableContainerEl = document.querySelector('.table-container');

function getData() {
  fetch('https://magnetic-melon-yam.glitch.me')
    .then(response => response.json())
    .then(data => {
      // if chechbox checked filter only vip
      data = checkbox.checked ? data.filter((element) => element.vip === true) : data;
      // create a table
      const tbodyEl = createATable();
      // create rows for a tabele
      data.forEach((element) => {
        const fullname = element.name.split(' '); // split fullname to name and surname
        createRows(element.id, element.image, fullname[0], fullname[1], element.city, element.fav_color, tbodyEl);
      });
    })
    .catch((error) => console.warn(error.message));
}
getData();


// create a table
function createATable() {
  tableContainerEl.innerHTML = '';
  const tableEl = document.createElement('table');
  tableContainerEl.append(tableEl);

  // thead:
  const theadEl = document.createElement('thead');
  tableEl.append(theadEl);
  const trEl = document.createElement('tr');
  theadEl.append(trEl);
  // create th titles
  trEl.append(createTh('Id'), createTh('Image'), createTh('Name'), createTh('Surname'), createTh('City'), createTh('Favourite color'));

  // tbody:
  const tbodyEl = document.createElement('tbody');
  tableEl.append(tbodyEl);

  return tbodyEl;
}


// create td rows from data
function createRows(id, image, name, surname, city, color, tbodyEl) {
  const trEl = document.createElement('tr');
  tbodyEl.append(trEl);
  trEl.append(createTd(id), createImg(image, name), createTd(name), createTd(surname), createTd(city), createTd(color));
}


// create th title
function createTh(title) {
  const thEl = document.createElement('th');
  thEl.textContent = title;
  return thEl;
}


// create td element
function createTd(key) {
  const tdEl = document.createElement('td');
  tdEl.textContent = key;
  return tdEl;
}


// create img element
function createImg(img, name) {
  const tdEl = document.createElement('td');
  const imgEl = document.createElement('img');
  imgEl.src = img;
  imgEl.alt = 'image of ' + name;
  tdEl.append(imgEl);
  return tdEl;
}


// const checkboxEl = document.querySelector('.checkbox');
// checkbox to show only vip
const checkbox = document.getElementById('showVip');
checkbox.addEventListener('change', getData);