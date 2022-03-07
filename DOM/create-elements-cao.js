'use strict';

/* https://javascript.info/modifying-document */

/* 1. Susikuriame h1 elementą, jame įrašome savo vardą, pastilizuojame, kad elementas būtų raudonas ir pridedame jį prie <body>. */

const h1NameEl = document.createElement('h1');
h1NameEl.textContent = 'Iveta';
h1NameEl.style.color = 'red';
document.body.append(h1NameEl);

