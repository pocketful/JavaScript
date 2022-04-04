/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formEl = document.forms[0];

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const kg = formEl.elements.search.value;
    const lb = kg * 2.2046;
    const g = kg / 0.0010000;
    const oz = kg * 35.274;

    document.getElementById('output').innerHTML = `
    <h2 class="output__units output__units-title">Convert <span class="units__input">${kg}</span> kg:</h2>
    <p class="output__units">${lb} lb</p>
    <p class="output__units">${g} g</p>
    <p class="output__units">${oz} oz</p>
    `;

    formEl.reset();
});