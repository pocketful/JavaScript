/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį jis kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => generateCards(data))
    .catch((error) => console.warn(error));


function generateCards(array) {
    const outputEl = document.getElementById('output');
    array.forEach((car) => {
        outputEl.innerHTML += `
        <div class="card__car">
            <h2 class="car__brand">${car.brand} models:</h2>
            <p class="car__models">${car.models}</p>
        </div>
        `;
    });
}
