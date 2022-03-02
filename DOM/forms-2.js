'use strict';

// Elements
const formEl = document.getElementById('userForm');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const townSelectEl = document.getElementById('town');
const rangeEl = document.getElementById('points');

// result Elements
const out1El = document.getElementById('out1');
const out2El = document.getElementById('out2');
const out3El = document.getElementById('out3');
const sliderValueEl = document.querySelector('.value');

// formEl.addEventListener('submit', function (event) {
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // clear errors 'Per trumpas username'
    usernameEl.nextElementSibling.textContent = '';

    /* reiksmiu paemimas */
    const usernameValue = usernameEl.value.trim(); // is kaires ir desines  tarpus nutrina 
    const emailValue = emailEl.value;
    const townSelectValue = townSelectEl.value;
    const rangeValue = rangeEl.value;
    console.log('rangeValue ===', rangeValue);

    /* username validation */
    if (!isValid(usernameValue)) {
        return;
    }

        /* iskelem i function isValid */
        // if (usernameValue.length <= 3) {
        //     // nusitaikom i po input einanti el
        //     usernameEl.nextElementSibling.textContent = 'Per trumpas username';
        //     return;
        // }

    /* Selection examples */
    // usernameEl.parentElement
    // usernameEl.nextElementSibling
    // formEl.children

        /* reiksmiu perkelimas i rezultatus */
        /* iskelem i function valuesToResults */
        // out1El.textContent = usernameValue;
        // out2El.textContent = emailValue;
        // out3El.textContent = townSelectValue;

    /* reiksmiu perkelimas i rezultatus */
    valuesToResults(usernameValue, emailValue, townSelectValue);
});

/* reiksmiu perkelimas i rezultatus */
function valuesToResults(value1, value2, value3) { 
    out1El.textContent = value1; // usernameValue
    out2El.textContent = value2; // emailValue
    out3El.textContent = value3; // townSelectValue
}

/* username validation */ 
function isValid(value) {
    if (value.length <= 3) {
        usernameEl.nextElementSibling.textContent = 'Per trumpas username';
        return false;
    } else {
        return true;
    }
}

/* range handler */
/* kad reaguotu i bet koki pasikeitima sito slaido */
rangeEl.addEventListener('input', (event) => {
    console.log('range change');
    // console.log(event); // list
    // console.log(event.target); // pats elementas rangeEl
    // console.log(event.target.value); // elemento value
    const reiksme = event.target.value;
    // jei aprasysim cia, tai kiekviena karta pasukus slideri taikysis is naujo:
    // const sliderValueEl = document.querySelector('.value');
    sliderValueEl.textContent = reiksme;
});

/* norint kad rodytu is pat pradziu default 5. apejimas */
/* irasyti reiksme */
function startValueSlider() {
    sliderValueEl.textContent = rangeEl.value; // 5
}
startValueSlider();

/* ------------------------------------------------------ */
    /* Kitas budas, tik reik pasiselectint ne su target */
    // /* perkelti i function rangeEl.addEventListener */
    // /* nedeti skliausteliu, nes tik nuoroda i funkcija sliderValueHandler */
    // rangeEl.addEventListener('input', sliderValueHandler);

    // function sliderValueHandler(event) {
    //     console.log('range change');
    //     const reiksme = event.target.value;
    //     sliderValueEl.textContent = reiksme;
    // }
    // sliderValueHandler();

    /* taip irasant reiksme ok, nes event.target.value surista prie rangeEl */
    // function startValueSlider() {
    //     sliderValueEl.textContent = rangeEl.value;
    // }
    // startValueSlider();