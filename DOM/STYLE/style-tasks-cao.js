'use strict';

/* 1. H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva. */

const h1El = document.querySelector('.name');

let toggle1 = true;

h1El.addEventListener('click', () => {
    if (toggle1 === true) {
        h1El.style.fontSize = '4em';
        h1El.style.color = 'red';
        h1El.style.textAlign = 'center';
        toggle1 = false;
    }
    else {
        h1El.style.fontSize = '';
        h1El.style.color = '';
        h1El.style.textAlign = '';
        toggle1 = true;
    }
});

// OR
// h1El.addEventListener('click', () => {
//     h1El.classList.add('duoble-size', 'red', 'center');
// });


/* 2. Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu. */
/* <button id="button-jump" class="button-style">Jump</button> */

const buttonJumpToggleEl = document.getElementById('button-jump-toggle');
buttonJumpToggleEl.style.position = 'absolute';

let toggle = true;

buttonJumpToggleEl.addEventListener('click', () => {
    if (toggle === true) {
        moveToToggle('auto', 'auto', '0', '0');
        toggle = false;
    } else {
        moveToToggle('0', '0', 'auto', 'auto');
        toggle = true;
    }
});

function moveToToggle(top, right, bottom, left) {
    buttonJumpToggleEl.style.top = `${top}`;
    buttonJumpToggleEl.style.right = `${right}`;
    buttonJumpToggleEl.style.bottom = `${bottom}`;
    buttonJumpToggleEl.style.left = `${left}`;
}
moveToToggle('0', '0', 'auto', 'auto');


/* 3. Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle. */

const buttonJumpAroundEl = document.getElementById('button-jump-around');
buttonJumpAroundEl.style.position = 'absolute';

let position = 'topLeft';

buttonJumpAroundEl.addEventListener('click', () => {
    if (position === 'topLeft') {
        moveTo('0', '0', 'auto', 'auto');
        position = 'topRight';
    } else if (position === 'topRight') {
        moveTo('auto', '0', '0', 'auto');
        position = 'bottomRight';
    } else if (position === 'bottomRight') {
        moveTo('auto', 'auto', '0', '0');
        position = 'bottomLeft';
    } else {
        moveTo('0', 'auto', 'auto', '0');
        position = 'topLeft';
    }
});

function moveTo(top, right, bottom, left) {
    buttonJumpAroundEl.style.top = `${top}`;
    buttonJumpAroundEl.style.right = `${right}`;
    buttonJumpAroundEl.style.bottom = `${bottom}`;
    buttonJumpAroundEl.style.left = `${left}`;
}
moveTo('0', 'auto', 'auto', '0');


/* 4. Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius. Jei įrašyti du simboliai arba mažiau - viso puslapio fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias. */
/* <input type="text" id="input4" placeholder="Your name" name="input4" /> */

const nameInputEl = document.getElementById('input4');

nameInputEl.addEventListener('blur', () => {
    const nameValueLength = nameInputEl.value.length;
    // console.log('aaa',nameValueLength);
    if (nameValueLength <= 2) {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = 'green';
    }
});


/* 5. Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom (["red", "green", "blue", "yellow"]). Paspaudus ant mygtuko - tegul jo spalva pasikeičia į atsitiktinę spalvą. */

const buttonColorfulEl = document.getElementById('button-colorful');

const colorsArray = ['red', 'green', 'blue', 'yellow'];

buttonColorfulEl.addEventListener('click', () => {
    length = colorsArray.length;
    const randomNumber = Math.floor(Math.random() * length) + 0;
    const color = colorsArray[randomNumber];
    buttonColorfulEl.style.backgroundColor = color;
});


/* 6. Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas. Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai), šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB). Padarykite, kad paspaudus ant mygtuko, jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.*/
// rgb(255, 255, 255)

const buttonColorfulRgbEl = document.getElementById('button-colorful-rgb');

buttonColorfulRgbEl.addEventListener('click', () => {
    const randomNumber1 = Math.floor(Math.random() * 255) + 0;
    const randomNumber2 = Math.floor(Math.random() * 255) + 0;
    const randomNumber3 = Math.floor(Math.random() * 255) + 0; 
    const color = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
    buttonColorfulRgbEl.style.backgroundColor = color;

    // buttonColorfulRgbEl.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
    // console.log(buttonColorfulRgbEl.style.backgroundColor);
});