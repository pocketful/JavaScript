const inputEl1 = document.getElementById('input1');
const inputEl2 = document.getElementById('input2');
const buttonEl1 = document.getElementById('button1');
const buttonEl2 = document.getElementById('button2');
const outEl1 = document.getElementById('out1');
const outEl2 = document.getElementById('out2');

const outEl10 = document.getElementById('out10');
const outEl20 = document.getElementById('out20');

const inputEl3 = document.getElementById('input3');
const outEl3 = document.getElementById('out3');

// 1 mygtukas: dauginti
buttonEl1.addEventListener('click', function() {
    outEl1.textContent = daugyba();
});

// 2 mygtukas: sudeti
buttonEl2.addEventListener('click', function() {
    outEl2.textContent = sudetis();
});


// automatiskai isvesti rezultatus kai tik ivedama reiksme i antra inputo lauka, o pirmas jau ivestas
inputEl2.addEventListener('input', function() {  /* 'keyup' neveiks jei su pele paste darysim */
    if (inputEl1.value !== '') { 
    outEl10.textContent = daugyba();
    outEl20.textContent = sudetis();
    }
});
// automatiskai isvesti rezultatus kai tik ivedama reiksme i pirma inputo lauka, o antras buna jau ivestas
inputEl1.addEventListener('input', function() {  /* 'keyup' neveiks jei su pele paste darysim */
    if (inputEl2.value !== '') { 
    outEl10.textContent = daugyba();
    outEl20.textContent = sudetis();
    }
});


// ivedant i input reiksme tikrinti reiksmes ilgi. jei trumpesne nei 5 simboliai, po apacia perspeti
inputEl3.addEventListener('input', function() {
    if (inputEl3.value.length < 5) {
        outEl3.textContent = 'Turi buti daugiau nei 5 simboliai'
    } else {
        outEl3.textContent = '';
    }
});


function daugyba() {
    return inputEl1.value * inputEl2.value;
}

function sudetis() {
    return parseInt(inputEl1.value) + parseInt(inputEl2.value);
}

/* without functions -------------------------------------------------------------- */

// // 1 mygtukas: dauginti
// buttonEl1.addEventListener('click', function() {
//     outEl1.textContent = inputEl1.value * inputEl2.value;
// });

// // 2 mygtukas: sudeti
// buttonEl2.addEventListener('click', function() {
//     outEl2.textContent = parseInt(inputEl1.value) + parseInt(inputEl2.value);
// });

// // automatiskai isvesti rezultatus kai tik ivedama reiksme i antra inputo lauka
// inputEl2.addEventListener('input', function() {  /* 'keyup' neveiks jei su pele paste darysim */
// console.log('aaa', inputEl1.value);
//     if (inputEl1.value !== '') { 
//     outEl10.textContent = inputEl1.value * inputEl2.value;
//     outEl20.textContent = parseInt(inputEl1.value) + parseInt(inputEl2.value);
//     }
// });

// // ivedant i input reiksme tikrinti reiksmes ilgi. jei trumpesne nei 5 simboliai, po apacia perspeti
// inputEl3.addEventListener('input', function() {
//     if (inputEl3.value.length < 5) {
//         outEl3.textContent = 'Turi buti daugiau nei 5 simboliai'
//     } else {
//         outEl3.textContent = '';
//     }
// });