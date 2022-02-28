/* CAO VIDEO */ /* ================================================================ */
console.log(document);

document.body.innerHTML = '<h1>Hello innerHTML</h1>';  // body atsiranda elementas is karto, uzrasas 'Hello innerHTML'. Nesaugus
document.body.textContent = '<h1>Hello textContent</h1>';  // body atsiranda tekstas is karto, uzrasas '<h1>Hello textContent</h1>'

/* <h1 id="title">Hello h1 .title</h1> */
document.getElementById('title'); // pasizymim pagal id
console.log(document.getElementById('title').textContent); // 'Hello h1 .title' consolej parasys. paziuret kas parasyta
document.getElementById('title').textContent = "Perrasytas h1 .title textContent"; // perrasytas textas
document.getElementById('title').innerHTML = "Perrasytas h1 innerHTML <span style='color:red'>Yes</span>"; // perrasytas textas ir pridetas span

document.getElementById('title'); // gaunam reference
document.getElementById('title').textContent; // ten kur yra title, koks Content? 'Hello h1 .title'
document.getElementById('title').textContent = "Perrasytas h1 .title textContent"; // perrasom
// document - objektas, getElementById - metodas. document.getElementById - visas metodas grazina reference i elementa. reference - kaip adresas

/* <p class="text">p .text</p> */
// Selectoriai
document.getElementById('title');
console.log(document.getElementsByClassName('text')); // grazinS daugiskaita. Array [p.text, p.text, p.text]
console.log(document.getElementsByClassName('text')[1]); // pasirinkti itema array
console.log(document.getElementsByClassName('text')[1].textContent = 'p. text buvo 2'); // keiciam teksta

document.querySelector("p"); // paims PIRMA p, o ne visus
document.querySelector("p:nth-child(2)"); // paims kita p
document.querySelectorAll("p"); // pasirinks visus p
console.log(document.querySelectorAll("p")); // Array [p.text, p.text, p.text] (is tikro objektai, bet veikia kaip array)
console.log(document.querySelectorAll("p")[1]);

/* CAO TASKS */ /* ================================================================= */

/* 1. Susikurkite projektą, be jokių HTML tag'ų body. Su JavaScript sukurkite <h2> elementą su savo vardu ir pridėkite į <body>. */

document.body.innerHTML = '<h2>Iveta</h2>';

/* 2.. Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .*/

document.getElementById('name').textContent = 'Iveta';

/* 3. Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena". Su JavaScript pakeiskite paskutinį list item tekstą į "Sūris". */

document.getElementsByClassName('liItem')[2].textContent = 'Suris';

/* 4. Ištaisykite klaidą. Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esančio <span> tekstą - iš 'red' į 'blue':

<p class="redtext">This text will be in <span>red</span></p>
<p class="bluetext">This text will be in <span>red</span></p>
<p class="yellowtext">This text will be in <span>yellow</span></p> */

document.querySelector('.bluetext span').textContent = 'blue';

/* 5. Sukurkite ordered list su trimis list item duota eilės tvarka: "BMW group", "VW group" ir "GE".

<ol>
  <li>BMW group</li>
  <li>VW group</li>
  <li>GE</li>
<ol>

Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti teksto (kitaip tariant hard-codinti). Pirma Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius. */

let liFirst = document.querySelector("li:nth-child(1)").innerHTML;   // .querySelectorAll("li")[0]; // bmw
let liSecond = document.querySelector("li:nth-child(2)").innerHTML;  // .querySelectorAll("li")[1]; // vw
console.log('liFirst ', liFirst);  // bmw
console.log('liSecond', liSecond); // vw

let temp = liFirst.innerHTML;
liFirst.innerHTML = liSecond.innerHTML;
liSecond.innerHTML = temp;

console.log('liFirst', liFirst);   // vw
console.log('liSecond', liSecond); // bmw