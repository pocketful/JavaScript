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
const output = document.getElementById('output');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();    
    output.innerHTML = '';
    
    const kg = formEl.elements.search.value.trim();
    if (Number(kg) != kg || kg === '') {
        return output.innerHTML = '<p class="output__units red">Enter one valid number</p>';
    }
    const lb = kg * 2.2046;
    const g = kg / 0.0010000;
    const oz = kg * 35.274;

    output.innerHTML = `
    <h2 class="output__units output__units-title">Convert <span class="red">${kg}</span> kg:</h2>
    <p class="output__units">Pounds: ${lb} lb</p>
    <p class="output__units">Grams: ${g} g</p>
    <p class="output__units">Ounces: ${oz} oz</p>
    `;

    formEl.reset();
});