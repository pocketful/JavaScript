'use strict';

/* https://javascript.info/modifying-document */

// kuriam elementus su js
// const articleEl = document.getElementById('art');

// // sukuriam el
// const h1El = document.createElement('h1');
// // el pridedam texta
// h1El.textContent = 'Dinamiskai sukurtas h1';
// // prdedam klase
// h1El.className = 'main-title';
// h1El.classList.add('more-title');
// // add id
// h1El.id = 'main';
// // prideti bet koki atributa galima su setAttribute(koks atrtibutas, kokia reikmes)
// h1El.setAttribute('title', 'this is main main title');
// // patalpinti el psl
// // parentEl.appednd(createdEl) - idedam i pries uzdarymo taga
// // document.body.append(h1El);
// // document.body.prepend(h1El);

// console.log('h1El ===', h1El);

// // articleEl.after(h1El);
// // instestAdjasentElement

// articleEl.insertAdjacentElement('beforeend', h1El);

// const h2TextEl = '<h2 id="yes" > I am h2 el </h2>';
// document.body.insertAdjacentHTML('afterbegin', h2TextEl);

/* Tasks ------------------------------------------------------------------- */

/* <h1 class="main-title">Yes it is dynamic</h1> */

const h1El = document.createElement('h1');
h1El.textContent = 'Yes it is dynamic';
// h1El.className = 'main-title'; // 2 way
h1El.classList.add('main-title');
document.body.append(h1El);

/*  <section>
        <h2>Section title</h2>
        <p class="text">Hello i am section text</p>
    </section> */

const sectionEl = document.createElement('section');
document.body.append(sectionEl);

const h2El = document.createElement('h2');
h2El.textContent = 'Section title';
sectionEl.prepend(h2El);

const pEl = document.createElement('p');
pEl.textContent = 'Hello i am section text';
pEl.classList.add('text');
sectionEl.append(pEl);

/*  <article class="about">
        <h3 class="a__title">About me</h3>
        <p class="a__summary">This is short summary about me</p>
        <h4 class="a__towns-title">towns I have visited</h4>
        <ul>
        <li class="a__towns">Kaunas</li>
        <li class="a__towns">Vilnius</li>
        <li class="a__towns">Klaipeda</li>
        </ul>
        <button id="more-btn">Learn more</button>
    </article> */

const articleEl = document.createElement('article');
const h3El = document.createElement('h3');
const p2El = document.createElement('p');
const h4El = document.createElement('h4');
const ulEl = document.createElement('ul');
    const li1El = document.createElement('li');
    const li2El = document.createElement('li');
    const li3El = document.createElement('li');
const buttonEl = document.createElement('button');

h3El.textContent = 'About me';
p2El.textContent = 'This is short summary about me';
h4El.textContent = 'towns I have visited';
    li1El.textContent = 'Kaunas';
    li2El.textContent = 'Vilnius';
    li3El.textContent = 'Klaipeda';
buttonEl.textContent = 'Learn more';

articleEl.classList.add('about');
h3El.classList.add('a__title');
p2El.classList.add('a__summary');
h4El.classList.add('a__towns-title');
    li1El.classList.add('a__towns');
    li2El.classList.add('a__towns');
    li3El.classList.add('a__towns');
buttonEl.id = 'more-btn';

// document.body.append(articleEl);
sectionEl.after(articleEl);
articleEl.append(h3El);
articleEl.append(p2El);
articleEl.append(h4El);
articleEl.append(ulEl);
    ulEl.append(li1El);
    ulEl.append(li2El);
    ulEl.append(li3El);
articleEl.append(buttonEl);

// 2 way for multiple <li>, better with array 
const cities = ['Kaunas', 'Vilnius', 'Klaipeda'];
for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const liEl = document.createElement('li');
    liEl.textContent = city;
    liEl.classList.add('a__towns');

    // jei su sukurta funkcija
    // const liEl = createElement('li', element, 'a__towns');

    ulEl.append(liEl);
}


/*  ikelti trukstamas dienas
    <ul>
        <li>Pirmadienis</li>
        <li>Antradienis</li>
        <li>Treciadienis</li>
        <li>Penktadienis</li>
        <li>Sekmadienis</li>
    </ul> */

const ul3El = document.getElementById('ul3');
const liElTrec = document.querySelector('ul li:nth-child(3)');
const liElPenkt = document.querySelector('ul li:nth-child(4)');

liElTrec.insertAdjacentHTML('afterend', '<li>Ketvirtadienis</li>');
liElPenkt.insertAdjacentHTML('afterend', '<li>Sestadienis</li>');

/* susikurti funkcija kuri paima html zyma, klases pavadinima ir texta kaip argumentus, ir grazina sukurta elementa su klase ir tekstu */

function createElement(tag, text, className) {
    const newEl = document.createElement(tag);
    newEl.textContent = text;
    // newEl.className = 'className';
    newEl.classList.add(className);
    console.log(newEl);
    return newEl;
}
const h5El = createElement('h5', 'hello', 'new-class');
document.body.append(h5El);

// sudetingiau su situ html kurimu butu kazka daugiau daryti:
articleEl.insertAdjacentElement('beforeend', ' <button id="more-btn">Learn more</button>');

// button paspaudimo metu iskviesti funkcija:
let counter = 0;
function showMore() {
    console.log('Clicked', ++counter, 'times'); // ++ pries counter pirma padaro, tada atspausdina
}

buttonEl.addEventListener('click', showMore);


/* example with object */
const miestaiObj = [
  {
    title: 'kaunas',
    population: 80000,
  },
  {
    title: 'Vilnius',
    population: 100000,
  },
];
// get Vilnius
miestaiObj[1].title;
