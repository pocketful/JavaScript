'use strict';

/* CAO FETCH POST 1 ========================================================================================== */
/* 1. Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL. */
/* 2. Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model). */
/* 3. Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą. */
/* 4. Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite ar įrašyti duomenys atsivaizduoja */

// const baseUrl = 'https://olive-bead-glazer.glitch.me';
const baseUrl = 'fetch-post-cao.json';

const tableContainerEl = document.querySelector('.table-container');
const tbodyEl = document.querySelector('tbody');

// get data
function getData() {
    fetch(`${baseUrl}`)
        .then(response => response.json())
        .then(data => {
            // create rows for a table
            data.forEach((element) => {
                tbodyEl.append(createRows(element.brand, element.model));
            });
            return data;
        })
        // .then(data => console.log('final ===', data))
        .catch((error) => console.warn(error.message));
}
getData();

// -------------------------- 
// create td rows from data
function createRows(brand, model) {
    const trEl = document.createElement('tr');
    // tbodyEl.append(trEl);
    trEl.append(createTd(brand), createTd(model));
    return trEl;
}

// -------------------------- 
// create one td element
function createTd(key) {
    const tdEl = document.createElement('td');
    tdEl.textContent = key;
    return tdEl;
}
