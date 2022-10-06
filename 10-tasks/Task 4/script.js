/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį jis kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputEl = document.getElementById("output");

fetch(ENDPOINT)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  })
  .then((data) => generateCards(data))
  .catch((error) => {
    renderError(`Something went wrong: ${error.message}`);
    console.log(error);
  });

function generateCards(array) {
  array.forEach((car) => {
    const cardEl = document.createElement("div");
    cardEl.classList = "card__car";
    outputEl.append(cardEl);

    const brandEl = document.createElement("h2");
    brandEl.classList = "car__brand";
    brandEl.textContent = car.brand;
    cardEl.append(brandEl);

    const modelsEl = document.createElement("ul");
    modelsEl.classList = "car__models";
    cardEl.append(modelsEl);

    generateModels(car.models, modelsEl);
  });
}

function generateModels(modelsArr, modelsEl) {
  modelsArr.forEach((model) => {
    const liEl = document.createElement("li");
    liEl.classList = "car__model";
    liEl.textContent = model;
    modelsEl.append(liEl);
  });
}

function renderError(msg) {
  outputEl.innerHTML = `<p>'${msg}'</p>`;
}
