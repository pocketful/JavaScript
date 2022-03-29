'use strict';

// const baseUrl = 'https://radial-reinvented-shoe.glitch.me';
const baseUrl = 'houses-cao.json';

const housesCardsEl = document.querySelector('.cards');
// const showAllBtnEl = document.querySelector('.fb-city-all');
// const activeEl = document.querySelector('.active');


// get data
async function getData() {
    try {
        const response = await fetch(`${baseUrl}`);
        const data = await response.json();
        // generate cards
        generateCards(data);
    } catch (error) {
        console.warn(error.message);
    }
}
getData();


// filter houses from a selected city
document.querySelector('.fb__cities').addEventListener('click', (event) => {
    // console.log('event.target.value ===', event.target.value);
    // const clickedEl = event.target;
    // clickedEl.classList.add = 'active';
    const clickedValue = event.target.textContent;
    if (clickedValue === 'All') {
        getData();
    } else {
        // console.log('clickedValue ===', clickedValue);
        fetch(`${baseUrl}`)
            .then(response => response.json())
            .then(data => data.filter((element) => element.city === clickedValue))
            // generate cards
            .then(data => generateCards(data))
            .catch((error) => console.warn(error.message))
    }
});


// generate cards
function generateCards(array) {
    housesCardsEl.innerHTML = array
        .map((element) => `
    <article class="card">
        <div class="card__img">
            <img src="${element.image}" alt="a house" />
        </div>
        <div class="card__text">
            <p class="ct-price">&euro;${new Intl.NumberFormat().format(element.price)}</p>
            <p class="ct-city">${element.city}</p>
            <p class="ct-description">${element.description}</p>
        </div>
    </article>`)
        .join('');
};





/* ---------------------------------------------

// get data
function getData() {
    fetch(`${baseUrl}`)
        .then(response => response.json())
        .then(data => {
            // generate cards
            data.forEach((element) => {
                let price = new Intl.NumberFormat().format(element.price);                
                createCard(element.image, price, element.city, element.description)
            });
            return data;
        })
        .then(data => console.log('cards ===', data))
        .catch((error) => console.warn(error.message));
}
getData(); */