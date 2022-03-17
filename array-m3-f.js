'use strict';

const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];
console.log('numbers === ', numbers);


// 3. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;
const doubleNumbersArray = numbers.map(sk => sk * sk);
console.log('doubleNumbersArray === ', doubleNumbersArray);


// 4. Sukurkite ir atvaizduokite masyvą su kvadratu pekltomis reikšmėmis;
const kvadratuNumbersArray = numbers.map(sk => sk ** 2);
console.log('doubleNumbersArray === ', kvadratuNumbersArray);

// 2 way, fn
const kvadratuNumbersArray2 = numbers.map(kvadratu);

function kvadratu(num) {
    return num * num;
}


// 5. Sukurkite ir atvaizduokite masyvą su reikšmėmis padaugintomis iš jų vietos masyve indekso
const indexNumbersArray = numbers.map((sk, i) => sk * i);
console.log('indexNumbersArray === ', indexNumbersArray);


// 6. Atrinkti tiktai teigimų elementų masyvą
const positiveNumbersArray = numbers.filter(sk => sk > 0);
console.log('positiveNumbersArray === ', positiveNumbersArray);


// 7. Atrinkti vertes didesnes uz 3
const biggerThan3NumbersArray = numbers.filter(sk => sk > 3);
console.log('biggerThan3NumbersArray === ', biggerThan3NumbersArray);


// 12. Suapvalinti visas masyvo reikšmes iki sveikų skaičių
const roundedNumbersArray = numbers.map(sk => Math.round(sk));
console.log('roundedNumbersArray === ', roundedNumbersArray);


// 13. Atrinkti kas antrą elementą į naują masyvą
const everySecondNumbersArray = numbers.filter((sk, i) => i % 2 === 0);
console.log('everySecondNumbersArray === ', everySecondNumbersArray);


// 7.1 Parasyti funkcija kuri ima 2 argumentus, masyva ir skaiciu uz kuri didesnes vertes grazina ir atspausdina.

function biggerThan(array, num) {
    const newArray = array.filter(sk => sk > num);
    return console.log(newArray);
}
biggerThan(numbers, 5);

// const biggerThan5 = biggerThan(numbers, 5);
// const biggerThan1 = biggerThan(numbers, 1);
// console.log(biggerThan5.concat(biggerThan1));


// 15. Atspausdinti kiekvieną masyvo reikšmę atskiroje eilutėje: [0] => 64.
numbers.forEach((sk, i) => console.log(`[${i}] => ${sk}`));


// 15.1 Grazinti nauja masyva kuriame yra objektai
// [
//   {index: 0, reiksme: 64}
//   {index: 1, reiksme: 25}
//    ...
// ]
// keiciant struktura map tinka

function objectsArray(array) {
    // const newArray = array.slice();
    const newArray = array.map((value, i) => ({ index: i, reiksme: value }));
    return console.log('newArray', newArray);
}
objectsArray(numbers);


// 16. Suskaičiuoti visų elementų sumą
const sumNumbers = numbers.reduce((total, num) => total + num);
console.log('sumNumbers ===', sumNumbers);


// 18. Rasti didžiausią skaičių masyve
const maxNumber = numbers.reduce((total, item) => Math.max(total, item), numbers[0]);
const maxNumber2 = numbers.reduce((total, item) => total > item ? total : item);
console.log('maxNumber ===', maxNumber);
console.log('maxNumber2 ===', maxNumber);


/* ============================================================================ */
/* students object, generate html  ============================================ */

const students = [
    {
        name: 'James',
        gender: 'male',
        age: 25,
        town: 'Vilnius',
        hasCar: true,
    },
    {
        name: 'Jill',
        gender: 'female',
        age: 28,
        town: 'Kaunas',
        hasCar: true,
    },
    {
        name: 'Mike',
        gender: 'male',
        age: 18,
        town: 'Kaunas',
        hasCar: false,
    },
    {
        name: 'Jane',
        gender: 'female',
        age: 22,
        town: 'Klaipeda',
        hasCar: false,
    },
    {
        name: 'Jannet',
        gender: 'female',
        age: 29,
        town: 'Klaipeda',
        hasCar: true,
    },
    {
        name: 'Cory',
        gender: 'male',
        age: 30,
        town: 'Siauliai',
        hasCar: true,
    },
    {
        name: 'Minks',
        gender: 'male',
        age: 19,
        town: 'Siauliai',
        hasCar: false,
    },
];


// st2. Parasyti funkcija, kuriai paduodam miesta kaip argumenta ir ji atrenka studentus is to miesto
const kaunieciai = fromCityStudents(students, 'Kaunas');
console.log('kaunieciai ===', kaunieciai);

function fromCityStudents(array, city) {
    return array.filter((studentObj) => studentObj.town === city);
}
fromCityStudents(students, 'Kaunas');


// st3. Parasyti funkcija, kuriai paduodam amziu kaip argumenta ir ji atrenka studentus kuriu amzius didesnis uz argumenta.

function olderThanAgeStudents(array, year) {
    const studentsOlderThanAge = array.filter((studentObj) => studentObj.age > year);
    console.log('studentsOlderThanAge ===', studentsOlderThanAge);
}
olderThanAgeStudents(students, 21);


// st1. sugeneruoti studentu nerikiuota sarasa htmle kuriame butu studentu vardai

// 1 way
// function generateNameList(array) {
//     const ulEl = document.createElement('ul');
//     array.map((arrayObj) => { // forEach irgi ok
//         const liEl = document.createElement('li');
//         liEl.textContent = `${arrayObj.name}`;
//         ulEl.append(liEl);
//     });
//     document.body.append(ulEl);
// }
// generateNameList(students);

// 2 way
function generateNameList(array) {
    const ulEl = document.createElement('ul');
    // map way
    ulEl.innerHTML = array.map((arrayObj) => `<li> ${arrayObj.name} </li>`).join('');
    // reduce way
    // ulEl.innerHTML = array.reduce((totalString, arrayObj) => totalString + `<li> ${arrayObj.name} </li>`, '');
    document.body.append(ulEl);
}
generateNameList(students);


// st4. prie st1 sugeneruoto saraso pridedam mygtuka su textu 'delete'. mygtuka paspaudus istriname ta li el kuriame yra paspaustas mygtukas

// 1 way
// function generateNameList(array) {
//     const ulEl = document.createElement('ul');
//     array.map((arrayObj) => {  // map - forEach
//         const liEl = document.createElement('li');
//         liEl.innerHTML = `${arrayObj.name} <button>delete</button>`;
//         ulEl.append(liEl);
//     });
//     document.body.append(ulEl);
// }
// generateNameList(students);

// 2 way
function generateNameList(array) {
    const ulEl = document.createElement('ul');
    // map way
    ulEl.innerHTML = array.map((arrayObj) => `<li> ${arrayObj.name} <button class="del-stud">delete</button> </li>`).join(''); // class tik teachers way
    // reduce way
    // ulEl.innerHTML = array.reduce((totalString, arrayObj) => totalString + `<li> ${arrayObj.name} </li>`, '');
    document.body.append(ulEl);
}
generateNameList(students);


//  paspaudus mygtuka trinam ta el
// 1 way
// const buttonElArray = document.querySelectorAll('button');
// for (let i = 0; i < buttonElArray.length; i++) {
//     buttonElArray[i].addEventListener('click', (event) => {
//         const clickedEl = event.target;
//         clickedEl.parentElement.remove();
//     });
// }

// teachers way
document.body.addEventListener('click', (e) => {
    // console.log('clicked on', e.target);
    // suzinoti ar paspaude ant el kuris turi klase 'del-stud'
    if (e.target.classList.contains('del-stud')) {
        // console.log('delete', e.target.parentElement);
        // e.target yra button, o istrinti norim li el
        e.target.parentElement.remove();
    }
});


// st5. is studentu masyvo informacijos sugeneruoti korteles htmle.
// korteles turi tureti apvada ir visa su studentu susijusia info. korteles turi tilpti 3 per pulapio ploti.
/*
<div class="stud-card">
    <h3>James</h3>
    <p>A man from Vilnius</p>
    <p>He is 25 years old and has a car</p>
</div> */

// function generateCards(array) {
//     const cardsEl = document.createElement('div');
//     // cardsEl.classList.add('cards');
//     cardsEl.innerHTML = array.map((arrayObj) => `<div class='card'><h3>${arrayObj.name}</h3><p>A ${arrayObj.gender} from ${arrayObj.town}.</p><p>${arrayObj.age} years old.</p><p> A car: ${arrayObj.hasCar}.</div>`).join('');
//     document.body.append(cardsEl);
// }
// generateCards(students);


// st6 paspaudus atitinkamus mygtukus mes htmle atvaizduojam visus, kauniecius arba vilniecius korteliu pavidalu (st5)
/* <button id="all">Visi</button>
<button id="kaunas">Kaunieciai</button>
<button id="vilnius">Vilnieciai</button> */

function generateCityCards(array) {
    const buttonAllEl = document.getElementById('all');
    const buttonKnsEl = document.getElementById('kaunas');
    const buttonVlnEl = document.getElementById('vilnius');

    buttonAllEl.addEventListener('click', (event) => {
        const cardsEl = document.createElement('div');
        // cardsEl.classList.add('cards');
        cardsEl.innerHTML = array.map((arrayObj) => `<div class='card'><h3>${arrayObj.name}</h3><p>A ${arrayObj.gender} from ${arrayObj.town}.</p><p>${arrayObj.age} years old.</p><p> A car: ${arrayObj.hasCar}.</div>`).join('');
        document.body.append(cardsEl);
    });

    buttonKnsEl.addEventListener('click', (event) => {
        const cardsEl = document.createElement('div');
        // cardsEl.classList.add('cards');
        cardsEl.innerHTML = array.filter((arrayObj) => arrayObj.town === 'Kaunas').map((arrayObj) => `<div class='card'><h3>${arrayObj.name}</h3><p>A ${arrayObj.gender} from ${arrayObj.town}.</p><p>${arrayObj.age} years old.</p><p> A car: ${arrayObj.hasCar}.</div>`).join('');
        document.body.append(cardsEl);
    });

    // 2 way
    // aprasyta pries tai:
    // function fromCityStudents(array, city) {
    //     return array.filter((studentObj) => studentObj.town === city);
    // }
    // fromCityStudents(students, 'Kaunas');
    // const knsStuds = fromCityStudents(students, 'Kaunas');
    const vlnStuds = fromCityStudents(students, 'Vilnius');

    buttonVlnEl.addEventListener('click', (event) => {
        const cardsEl = document.createElement('div');
        // cardsEl.classList.add('cards');
        cardsEl.innerHTML = vlnStuds.map((arrayObj) => `<div class='card'><h3>${arrayObj.name}</h3><p>A ${arrayObj.gender} from ${arrayObj.town}.</p><p>${arrayObj.age} years old.</p><p> A car: ${arrayObj.hasCar}.</div>`).join('');
        document.body.append(cardsEl);
    });
}
generateCityCards(students);


/* teacher's way -------------------------------------------------------------------*/

// st5. is studentu masyvo infomracijos sugeneruoti korteles htmle.
// korteles turi tureti apvada ir visa su studentu susijusia info. korteles turi tilpti 3 per puslapio ploti.
/* <div class="stud-card">
     <h3>James</h3>
     <p>A man from Vilnius</p>
     <p>He is 25 years old and has a car</p>
   </div> */

function makeStudCard(stObj) {
    const gender = stObj.gender === 'male' ? 'man' : 'woman';
    const who = stObj.gender === 'male' ? 'He' : 'She';
    const car = stObj.hasCar ? 'and has a car' : '';

    return `
    <div class="stud-card">
      <h3>${stObj.name}</h3>
      <p>A ${gender} from ${stObj.town}</p>
      <p>${who} is ${stObj.age} years old ${car}</p>
    </div>
    `;
    // console.log('studString ===', studString);
}
const divEl = document.createElement('div');
divEl.className = 'grid';
document.body.append(divEl);

function generateCards(arr) {
    // clear el
    divEl.innerHTML = '';
    // gen
    arr.forEach((el) => {
        divEl.innerHTML += makeStudCard(el);
    });
}
// generateCards(students);

const allBtn = document.getElementById('all');
const kaunasBtn = document.getElementById('kaunas');
const vilniusBtn = document.getElementById('vilnius');

// allBtn.addEventListener('click', clickLog);
allBtn.addEventListener('click', () => generateCards(students));
kaunasBtn.addEventListener('click', () => generateCards(studentsFrom('Kaunas')));
vilniusBtn.addEventListener('click', () => generateCards(students.filter((studObj) => studObj.town === 'Vilnius')));

function clickLog() {
    console.log('clicked');
}

function makeEl(tag, className, text, dest) { }
makeEl('h2', 'title', 'yes', divEl);

/* Array tasks from edabit ========================================================================================== */

// 1. Destructuring Arrays
// Create variables a and b from the given array using es6 array destructuring
/* Example
const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]
console.log(a) // outputs 1
console.log(b) // outputs 2
*/

const arr = [1, 2, 3, 4, 5, 6];
const [first, second] = arr;
// const [first,second,...rest] = arr; // ?
console.log('Task 1. Destructuring:', first, second);

/* 2 way */
function getArray(array) {
    return array;
}
const result = getArray(arr);
const [a, b, c, d, e, f] = result;
// console.log('Task 1. Destructuring:', a, b, c, d, e, f);

// instead of
// const first = result[0];

/* ------------------------------------------------------------------------------------------ */
// 2. Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher. All numbers will be integers. You can expect negative numbers too. */
/* Examples:
numberSplit(4) ➞ [2, 2]
numberSplit(10) ➞ [5, 5]
numberSplit(11) ➞ [5, 6]
numberSplit(-9) ➞ [-5, -4]
*/
function numberSpli2(n) {
	return [Math.floor(n / 2), Math.ceil(n / 2)]; 
}

function numberSplit(n) {
    const half = n / 2;  // 5.5
    const result = [Math.floor(half), Math.ceil(half)];    
	return console.log('Task 2. Two halves of the number:', result);
}
// numberSplit(4);
// numberSplit(10);
numberSplit(11);
// numberSplit(-9);

/* ------------------------------------------------------------------------------------------ */
// 3. Create a function that returns an array of strings sorted by length in ascending order
/* Example: sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"] */

function sortByLength(arr) {
    const sortedArray = arr.sort((a, b) => a.length - b.length);
    return console.log('Task 3: Sort ASC.length ===', sortedArray);
}
sortByLength(["a", "ccc", "dddd", "bb"]);


/* ------------------------------------------------------------------------------------------ */
// 4. Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

/* Examples:
isAvgWhole([1, 3]) ➞ true
isAvgWhole([1, 2, 3, 4]) ➞ false
isAvgWhole([1, 5, 6]) ➞ true
isAvgWhole([1, 1, 1]) ➞ true
isAvgWhole([9, 2, 2, 5]) ➞ false
*/

function isAvgWhole(arr) {
    const average = Number.isInteger(arr.reduce((total, num) => total + num) / arr.length);
    // 2 way
	const average2 = Number.isInteger(arr.reduce((total, num) => total + num / arr.length, 0));
    // 3 way
	const average3 = arr.reduce((total, num) => total + num) % arr.length; // jei su liekana,tai true,!(2)===false
    // 4 way 
    const average4 = !(arr.reduce(function(total,num){return total + num}) % arr.length);

    console.log('Task 4: Average ===', average3);
}
isAvgWhole([1, 3]);
isAvgWhole([1, 2, 3, 4]);
isAvgWhole([1, 5, 6]);
isAvgWhole([1, 1, 1]);
isAvgWhole([9, 2, 2, 5]);
