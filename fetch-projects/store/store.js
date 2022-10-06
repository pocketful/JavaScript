"use strict";

/* https://fakestoreapi.com/ - free online REST API for some fake data */
/* https://preview.colorlib.com/theme/winkel/# - Best Sellers design */

const baseUrl = "https://fakestoreapi.com";
const cardsEl = document.querySelector(".products-cards");

function getProduct() {
  fetch(`store.json`) // jei parsisiunciam products is fake store api
    // fetch(`${baseUrl}/products`)
    .then((response) => response.json())
    // .then((response) => response.text()) Network>Fetch/XHR
    .then((data) => createProduct(data))
    .catch((err) => console.log(err.message));
}
getProduct();

// create products
function createProduct(array) {
  array.forEach((product) => {
    cardsEl.innerHTML += `
        <article class="products-card">
        <div class="products-card__img">
          <img src="${product.image}" alt="model" />
        </div>
        <div class="products-card__text">
          <h3 class="card__text-top">${product.title}</h3>
          <div class="card__text-bottom">
            <p class="ct-price">$${product.price}</p>
            <p class="ct-rating">${stars(product.rating.rate)}</p>
          </div>
        </div>
      </article>`;
  });
}

// generate stars from rating
function stars(ratee) {
  let rate = Math.floor(ratee);
  const star = '<i class="rating rating-4 fa fa-star" aria-hidden="true"></i>';
  const starO =
    '<i class="rating rating-4 fa fa-star-o" aria-hidden="true"></i>';
  switch (rate) {
    case 1:
      rate = star + starO + starO + starO + starO;
      break;
    case 2:
      rate = star + star + starO + starO + starO;
      break;
    case 3:
      rate = star + star + star + starO + starO;
      break;
    case 4:
      rate = star + star + star + star + starO;
      break;
    case 5:
      rate = star + star + star + star + star;
      break;
    default:
      rate = starO + starO + starO + starO + starO;
  }
  return rate;
}

// sugeneruojam produktu korteles kaip pavyzdyje
// 1. pasirasyti html ir css vienos prekes sukurimui
// 2. kartoti ta htmla konteineryje su duomenimis is fake store ir sukurti 20 prekiu
// 3. sukurti funkcija kuriai padavus ratinga, ji grazina zvaigzdutes.
