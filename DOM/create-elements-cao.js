'use strict';

/* https://javascript.info/modifying-document */

/* 1. Susikuriame h1 elementą, jame įrašome savo vardą, pastilizuojame, kad elementas būtų raudonas ir pridedame jį prie <body>. */

const h1NameEl = document.createElement('h1');
h1NameEl.textContent = 'Iveta';
h1NameEl.style.color = 'red';
document.body.append(h1NameEl);

/* 2. Sukuriame <ul> elementą, o jame - tris <li> elementus su mašinų brand'ais. <body> turi atsirasti <ul>, kuriame trys <li> */

const ulEl = document.createElement('ul');
document.body.append(ulEl);

/* 2 way */
// const li1El = document.createElement('li');
// const li2El = document.createElement('li');
// const li3El = document.createElement('li');
// li1El.textContent = 'VW';
// li2El.textContent = 'Mercedes';
// li3El.textContent = 'Fiat';
// ulEl.append(li1El, li2El, li3El);

/* 2 way */
const brands = ['VW', 'Mercedes', 'Fiat'];
for (let i = 0; i < brands.length; i++) {
    const brand = brands[i];
    const liEl = document.createElement('li');
    liEl.textContent = brand;
    ulEl.append(liEl);
}