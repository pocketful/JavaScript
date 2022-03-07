'use strict';

/* Viewing DOM as an object - propertiesmethods. */
/* Basic DOM properties e.g. location, document.body, document.forms. */


window.subtitleEl = document.body.children[1];
// nudazom pries tai esancio el spalva
subtitleEl.previousElementSibling.style.color = 'blue';
// padidinti font size po subtitleEl esancio elemento antram vaikiniam el
subtitleEl.nextElementSibling.children[1].style.fontSize = '50px';

document.body.addEventListener('click', (event) => {
    console.log('clicked');
    console.log('event ===', event); // visas event object
    console.log('event.target ===', event.target); // event ant kurio paspausta, grazins konkretu elementa
    const clickedEl = event.target;

    if (clickedEl.style.color === 'green') {
        clickedEl.style.color = 'black';
        // const textNow = clickedEl.textContent;
        clickedEl.textContent = clickedEl.textContent.replace(' changed', '');
    } else {
        clickedEl.style.color = 'green';
        clickedEl.textContent += ' changed';
    }
});

/* Button Sort ASC */
const buttonSortEl = document.getElementById('button-sort');
const buttonSortSpanEl = document.getElementById('button-sort-span');

buttonSortEl.addEventListener('click', (event) => {
    if (buttonSortSpanEl.textContent === 'ASC') {
        buttonSortSpanEl.textContent = 'DESC';
    } else {
        buttonSortSpanEl.textContent = 'ASC';
    }
});


/* Show and hide text after clicking on Question */
// const titlesEl = document.querySelectorAll('.acc__title');
// length = titlesEl.length;

// for (let i = 0; i < length; i++) {
//     titlesEl[i].addEventListener('click', (event) => {
//         // console.log(titlesEl[i]);
//         // console.log(titlesEl.classList);
//         titlesEl[i].nextElementSibling.classList.toggle('acc__text');
//     });
// }


/* Show and hide text on all elements, after clicking on any Question element */
/* padarom kad paspaudus ant bet kurio Question el butu parodomas po juo esantis el */

// const titlesEl = document.querySelectorAll('.acc__title');
// length = titlesEl.length;

// for (let i = 0; i < length; i++) {
//     titlesEl[i].addEventListener('click', (event) => {
//         for (let i = 0; i < length; i++) {
//         titlesEl[i].nextElementSibling.classList.toggle('acc__text');
//         }
//     });
// }


/* padarom kad kai paspaudziam ant elemento, jei yra atsidares kazkuris kitas, tai uzdarom atsidariusius ir paliekam atidaryta tik ta kuri paspaudem. */

// const titlesEl = document.querySelectorAll('.acc__title');
// length = titlesEl.length;

// for (let i = 0; i < length; i++) {
//     titlesEl[i].addEventListener('click', (event) => {
//         for (let i = 0; i < length; i++) {
//             titlesEl[i].nextElementSibling.classList.add('acc__text');
//         }
//         titlesEl[i].nextElementSibling.classList.remove('acc__text');
//     });
// }


/* Animated accordion */
/* Show and hide text after clicking on Question */
const titlesAnimEl = document.querySelectorAll('.acc__title-anim');
length = titlesAnimEl.length;

for (let i = 0; i < length; i++) {
    titlesAnimEl[i].addEventListener('click', (event) => {
        const text = titlesAnimEl[i].nextElementSibling;

        if (text.style.maxHeight) {
            text.style.maxHeight = null;
        } else {
            text.style.maxHeight = text.scrollHeight + "px";
        }
    });
}