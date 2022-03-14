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

function fromCityStudents(array, city) {
    const studentsFromCity = array.filter((studentObj) => studentObj.town === city);
    console.log('studentsFromCity ===', studentsFromCity);
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

function generateCards(array) {
    const cardsEl = document.createElement('div');
    // cardsEl.classList.add('cards');
    cardsEl.innerHTML = array.map((arrayObj) => `<div class='card'><h3>${arrayObj.name}</h3><p>A ${arrayObj.gender} from ${arrayObj.town}.</p><p>${arrayObj.age} years old.</p><p> A car: ${arrayObj.hasCar}.</div>`).join('');
    document.body.append(cardsEl);
}
generateCards(students);

