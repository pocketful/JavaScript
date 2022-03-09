'use strict';

/* STRING METHODS ========================================================================================= */
/* https://www.w3schools.com/js/js_string_methods.asp */

const replaceStringEl = document.getElementById('replace');

/* <h1>String methods</h1>
<p id="replace">The fat cat ran down the street. It was searching for a mouse to eat</p> */

/* paimti paskutinius 6 simbolius ir irasyti juos i paragrafa einanati po dabartiniu paragrafu */
let part1 = replaceStringEl.textContent.slice(-6);

const p1El = document.createElement('p');
p1El.textContent = part1;
replaceStringEl.after(p1El);

/* ---------------------------------------------------------------------------- */
/* is replaceStringEl teksto paimti zodeli cat ir ji ikelti i papildoma h3 el po paskutiniu el. */

let part2 = replaceStringEl.textContent.slice(8, 11);
let part2b = replaceStringEl.textContent.substr(8, 3); // 2 way

const h3El = document.createElement('h3');
h3El.textContent = part2;
p1El.after(h3El);

/* ---------------------------------------------------------------------------- */
/* paragrafe pakeisti zodeli 'street' i zodeli 'building' */

replaceStringEl.textContent = replaceStringEl.textContent.replace('street', 'building');

/* ---------------------------------------------------------------------------- */
/* sukurti dar viena paragrafa po paskutiniu el ir jame turi buti visas sakinys didziosiomis raidemis */

const p2El = document.createElement('p');
p2El.textContent = replaceStringEl.textContent.toUpperCase();
h3El.after(p2El);

/* ---------------------------------------------------------------------------- */
/* gauti pirma sakinio raide (ne su slice ir ne su substring ar substr) */

const part3 = replaceStringEl.textContent.charAt(0);
const firstLetter = document.createElement('p');
firstLetter.textContent = part3;
p2El.after(firstLetter);

/* ---------------------------------------------------------------------------- */
/* paversti sakini i masyva kuriame kiekvienas elementas yra zodis */

const arrayText = replaceStringEl.textContent.split(' ');
const p3El = document.createElement('p');
p3El.textContent = arrayText.join(' ');
firstLetter.after(p3El);

/* ---------------------------------------------------------------------------- */
/* visa sakini parasyti naujame paragrafe is priesingos puses dabartinei tvarkai. */

const text = replaceStringEl.textContent;
const length = text.length;

let reverseText = '';
for (let i = length - 1; i >= 0; i--) {
    reverseText += text[i];
}
firstLetter.after(reverseText);

/* 2 way with replace(); */

/* ---------------------------------------------------------------------------- */
/* kiekviena zodi sakinyje pradeti is didziosios raides. ir irasyti i dar viena paragrafa */

const lowercaseStringEl = document.getElementById('replace2');
const lowercaseArray = lowercaseStringEl.textContent.split('. ');

console.log('lowercaseArray ===', lowercaseArray); // ['the fat cat ran down the street', 'it was searching for a mouse to eat', 'lalala']

// iterate over every sentence
for (let i = 0; i < lowercaseArray.length; i++) {
    // capitalize first letter, add the rest of the string
    lowercaseArray[i] = lowercaseArray[i].charAt(0).toUpperCase() + lowercaseArray[i].slice(1);
         // arrayText2[i][0] = arrayText2[i][0].toUpperCase(); // testing
}
console.log('lowercaseArray after ===', lowercaseArray); // ['The fat cat ran down the street', 'It was searching for a mouse to eat', 'Lalala']

// join string again
const firstSentenceLetterCapital = lowercaseArray.join('. ');
console.log('firstSentenceLetterCapital ===', firstSentenceLetterCapital); // The fat cat ran down the street. It was searching for a mouse to eat. Lalala

// create element in html
const firstCapitalLetter = document.createElement('p');
firstCapitalLetter.textContent = `Every sentence first letter is capital === ${firstSentenceLetterCapital}`;
lowercaseStringEl.after(firstCapitalLetter);

/* ---------------------------------------------------------------------------- */
/* gauti reiksme ir reiksmes ilgi i console   <input id="inp" type="text" value="  labas    " />  */

const inpEl = document.getElementById('inp');
const inpValue = inpEl.value.trim(); // nuimti tarpus paliktus sonuose
const inputValueLength = inpValue.length;

console.log(inpEl);
console.log(inpValue);
console.log(inputValueLength);

/* ---------------------------------------------------------------------------- */
/* suzinoti ar reiksme nuemus tarpus is sonu yra lygi 'lAbAs ' reiksmei sumazinus raides iki mazuju raidziu */

const inpValueLower = inpValue.toLowerCase();
console.log(inpValueLower);

const compareValue = 'lAbAs '.toLowerCase().trim();
console.log(inpValueLower === compareValue);


/* NUMBER METHODS ======================================================================================== */

/* ---------------------------------------------------------------------------- */
/* paimti reiksme is p#one ir prie jos prideti 100 ir gauti rezultata */
/* <p id="one">500</p> */

const oneEl = document.getElementById('one');
const oneValue = parseInt(oneEl.textContent); // same as Number();
const sudetis = oneValue + 100;
console.log(sudetis);

const p3aEl = document.createElement('p');
p3aEl.textContent = `500 + 100 === ${sudetis}`;
oneEl.after(p3aEl);

/* ---------------------------------------------------------------------------- */
/* paimti reiksme is ivesties lauko ir prideti 50. atsakyma isvesti i nauja el po input */
/* <input id="favorite" type="number" value="50"> </input> */

const inputEl = document.getElementById('favorite');
const inputValue = Number(inputEl.value);
const sudetis2 = inputValue + 50;

const p4El = document.createElement('p');
p4El.textContent = `50 + 50 === ${sudetis2}`;
inputEl.after(p4El);

const p5El = document.createElement('p');
p5El.textContent = `inputValue + 50 === ${sudetis2}`;
p4El.after(p5El);

/* atsakyma atnaujinti kai keiciasi reiksme ivesties lauke */
inputEl.addEventListener('input', (event) => {
    const inputValue = Number(inputEl.value);
    const sudetis2 = inputValue + 50;
    p5El.textContent = `inputValue + 50 === ${sudetis2}`;
});

/* ---------------------------------------------------------------------------- */
/* pagaminti masyva is // <p id="nr">20, 50, 60, 0, -42, -2, 100</p> el reiksmiu */

const numbersEl = document.getElementById('nr');
// i array, atskirta , 
const arrayNumbers = numbersEl.textContent.split(', '); // arrayNumbers === (7) [40, 100, 120, 0, -84, -4, 200]
console.log('arrayNumbers ===', arrayNumbers);

/* masyvo reiksmes padvigubinti ir ikelti i nauja paragrafa po esamu */
// dubliuoju masyva su tom paciom reiksmem
const arrayNumbersNew = arrayNumbers.slice();

for (let i = 0; i < arrayNumbersNew.length; i++) {
    arrayNumbersNew[i] = Number(arrayNumbersNew[i]) * 2;
}
console.log('arrayNumbers ===', arrayNumbersNew);

const p6El = document.createElement('p');
    // p6El.textContent = arrayNumbersNew; // same as arrayNumbersNew.toString();
// join array elements into a string
p6El.textContent = arrayNumbersNew.join(', '); // 40, 100, 120, 0, -84, -4, 200
p5El.after(p6El);

/* ---------------------------------------------------------------------------- */
/* suapvalinti 8.5471 iki 2 skaiciu po kablelio */

const number = 8.5471;
const roundedNumber = number.toFixed(2); // suapvalina du skaiciai po kablelio, bet grazina string
    console.log(`Du sk po kablelio ${number.toFixed(2)}`);
const p7El = document.createElement('p');
p7El.textContent = roundedNumber;
p6El.after(p7El);


/* BOOLEAN METHODS ======================================================================================== */

const isActive = true;
const name = 'James';
const age = '';

// i priesinga name ir age
console.log('isActive ===', !isActive);

const nameBoo = Boolean(name);
const nameBoo2 = !!name;
console.log('nameBoo ===', nameBoo);
console.log('nameBoo2 ===', nameBoo2);

const ageBoo = Boolean(age);
console.log('ageBoo ===', ageBoo);


/* TASKS ================================================================================================ */

/* atrinkti i atskirus masyvus visus */
const mixedArray = [5, 'blue', true, false, 'Mike', 10, '50', 0, -1, 'age']

// const mixedArrayCopy = mixedArray.slice(); // jei reiktu copy
const stringsArray = [];
const numbersArray = [];
const booleansArray = [];

for (let i = 0; i < mixedArray.length; i++) {
    let item = mixedArray[i];
    console.log('item === ', item ); 
    if (typeof(item) === 'string') {
        stringsArray.push(item);
    } else if (typeof(item) === 'number') {
        numbersArray.push(item);
    } else if (typeof(item) === 'boolean') {
        booleansArray.push(item);
    } else {
        console.log('this one is something else');
    }
}
console.log('stringsArray ===', stringsArray);    // ['blue', 'Mike', '50', 'age']
console.log('numbersArray ===', numbersArray);    // [5, 10, 0, -1]
console.log('booleansArray ===', booleansArray);  // [true, false]

/* gauti skaiciu tipo duomenu vidurki */

let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}
const average = sum / numbersArray.length;
console.log('average === ', average);





