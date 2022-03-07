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


/* 3. Visiškai nenaudojant HTML, sukuriame ir pastilizuojame apačioje atvaizduotą puslapį (stiliaus aspektai nėra itin svarbūs, tad žiūrėkite savo nuožiūra kaip turėtų atrodyti puslapis): */

// boxes
document.body.style.backgroundColor = 'gainsboro';
document.body.style.fontFamily = 'Trebuchet MS';

const divEl = document.createElement('div');
divEl.style.backgroundColor = 'white';
divEl.style.borderRadius = '10px';
divEl.style.padding = '10px';
divEl.style.margin = '40px'; // cao: '2rem auto 0 auto'
divEl.style.textAlign = 'center';
document.body.append(divEl);

// picture
const picEl = document.createElement('img');
picEl.src = 'https://placeimg.com/200/200/nature';
picEl.style.width = '20%';
    //picEl.style.width = '10rem'; // cao
    //picEl.style.height = '10rem'; // cao
    //picEl.style.objectFit = 'cover'; // cao. kad neissikraipytu jeigu butu kitokio dydzio
picEl.style.borderRadius = '50%';
picEl.style.border = '4px solid white';
picEl.style.boxShadow = '0 0 4px 4px gainsboro';
    // OR (border)
    // picEl.style.border = '5px solid gainsboro'; // cao
    // picEl.style.padding = '5px';  // cao
    // OR (border)
    // picEl.style.outline = '5px solid white';
picEl.style.marginTop = '-10%';
    // picEl.style.marginTop = '-6.5rem'; // cao jeigu per viduri, atimt visus padding ir aukscio puse pic

// text
const nameEl = document.createElement('h2');
nameEl.textContent = 'Trent Walton';
const occupationEl = document.createElement('p');
// occupationEl.textContent = 'Founder & 1/3 of @paravelinc'; // 'Founder & 1/3 of @paravelinc';
occupationEl.innerHTML = 'Founder &amp; &frac13; of &commat;paravelinc'; // 'Founder & 1/3 of @paravelinc';
occupationEl.style.color = 'grey';
const cityEl = document.createElement('p');
cityEl.textContent = 'Austin, TX';
cityEl.style.color = 'grey';

divEl.append(picEl, nameEl, occupationEl, cityEl);

