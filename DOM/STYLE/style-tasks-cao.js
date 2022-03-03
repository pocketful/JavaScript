'use strict';

/* 1. H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva. */

const h1El = document.querySelector('.name');

h1El.addEventListener('click', () => {
    h1El.style.fontSize = '4em';
    h1El.style.color = 'red';
    h1El.style.textAlign = 'center';
});

// OR
// h1El.addEventListener('click', () => {
//     h1El.classList.add('duoble-size', 'red', 'center');
// });


/* 2. Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu. */

// const buttonJumpEl = document.getElementById('button-jump');
// buttonJumpEl.style.position = 'absolute';

// let toggle = true;

// buttonJumpEl.addEventListener('click', () => {
//     if (toggle === true) {
//         moveTo('auto', '0', '0', 'auto');
//         toggle = false;
//     } else {
//         moveTo('0', 'auto', 'auto', '0');
//         toggle = true;
//     }
// });

// function moveTo(top, right, bottom, left) {
//     buttonJumpEl.style.top = `${top}`;
//     buttonJumpEl.style.right = `${right}`;
//     buttonJumpEl.style.bottom = `${bottom}`;
//     buttonJumpEl.style.left = `${left}`;
// }
// moveTo('0', 'auto', 'auto', '0');


/* 3. Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle. */

const buttonJumpEl = document.getElementById('button-jump');
buttonJumpEl.style.position = 'absolute';

let toggle = 'topLeft';

buttonJumpEl.addEventListener('click', () => {
    if (toggle === 'topLeft') {
        moveTo('0', '0', 'auto', 'auto');
        toggle = 'topRight';
    } else if (toggle === 'topRight'){
        moveTo('auto', '0', '0', 'auto');
        toggle = 'bottomRight';
    } else if (toggle === 'bottomRight'){
        moveTo('auto', 'auto', '0', '0');
        toggle = 'bottomLeft';
    } else {
        moveTo('0', 'auto', 'auto', '0');
        toggle = 'topLeft';
    }
});

function moveTo(top, right, bottom, left) {
    buttonJumpEl.style.top = `${top}`;
    buttonJumpEl.style.right = `${right}`;
    buttonJumpEl.style.bottom = `${bottom}`;
    buttonJumpEl.style.left = `${left}`;
}
moveTo('0', 'auto', 'auto', '0');


/* 4. Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius. Jei įrašyti du simboliai arba mažiau - viso puslapio fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias. */


/* 5. Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom (["red", "green", "blue", "yellow"]). Paspaudus ant mygtuko - tegul jo spalva pasikeičia į atsitiktinę spalvą. */


/* 6. Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas. Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai), šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB). Padarykite, kad paspaudus ant mygtuko, jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.*/
