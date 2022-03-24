'use strict';

/* https://fakestoreapi.com/ - free online REST API for some fake data */
/* https://preview.colorlib.com/theme/winkel/# - Best Sellers design */

const baseUrl = 'https://fakestoreapi.com';

function getProduct() {
    fetch(`store.json`) // jei parsisiunciam products is fake store api
    // fetch(`${baseUrl}/products`) n
        .then((response) => response.json())
        // .then((response) => response.text()) Network>Fetch/XHR
        .then((data) => console.log(data))
        .catch((err) => console.log(err.message));
}
getProduct();

// sugeneruojam produktu korteles kaip pavyzdyje

// 1. pasirasyti html ir css vienos prekes sukukrimui

// 2. kartoti ta htmla konteineryje su duomenimis is fake store ir sukurti 20 prekiu

// 3. sukurti funkcija kuriai padavus ratinga, ji grazina zvaigzdutes.

