'use strict';

/* 1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds"). 
Pvz: fn(3) => "180 seconds". */
function minToSec(min) {
    const sec = min * 60;
    console.log(`${min} min is ${sec} sec`);
    return sec;
}
minToSec(3);

// cao
const fn1 = (n1) => n1 * 60 + " seconds";


/* 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
Pvz: fn(20) => 7300. */
function ageToDaysLived(age) {
    const daysLived = age * 365;
    console.log(`${age} years is ${daysLived} days lived`);
    return daysLived;
}
ageToDaysLived(18);

// cao
const fn2 = (n1) => n1 * 365;


/* 3. Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
Pvz.: fn(5) -> 25 */
const kvadratu = (sk) => sk ** 2;
console.log('pakeltas kvadratu ===', kvadratu(3));

// cao
const fn3 = (n1) => n1 ** 2;


/* 4. Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
Pvz: fn(10, 10) -> 50 */
const plotas = (h, a) => h * a / 2;
console.log('plotas ===', plotas(5, 3));

// cao
const fn4 = (n1, n2) => n1 * n2 / 2;


/* 5. Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
pvz. Paduodu: "Petras", grąžina "s". */
function lastLetter(text) {
    // return string.slice(-1); // or
    return text.charAt(text.length - 1);
}
console.log('lastLetter ===', lastLetter('hello'));

// cao
const fn5 = (text) => text.charAt(text.length - 1);


/* 6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
T.y. "Petras" -> "sartep" */
function reverseString(text) {
    return text.split('').reverse().join('');
}
console.log('reverseString ===', reverseString('hello'));

// cao
const fn6 = (text) => text.split("").reverse().join("").toLowerCase();


/* 7. Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
pvz: [-1, -100, -5, 10, 0, 11] -> "-1" */
function maxNegativeNum(array) {
    return array.filter((num) => num < 0).reduce((total, num) => Math.max(total, num), array[0]);
}
console.log('maxNegativeNum ===', maxNegativeNum([-1, -100, -5, 10, 0, 11]));

// cao
const fn7 = (nums) => nums.filter(x => x < 0).sort((a, b) => b - a)[0];


/* 8. Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
T.y. "3" => [1, 6, 3]. */
function randomNumbersArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 10) + 1);
    }
    return array;
}
console.log('randomNumbersArray ===', randomNumbersArray(5));

// cao
const randomNumbers = (quant) => {
    const generatedNums = [];
    for (let i = 0; i < quant; i++) {
        generatedNums.push(Math.floor(Math.random() * 10) + 1)
    }
    return generatedNums;
}


/* 9. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
Pvz.: fn(10, 50) -> true */
const sumGreaterThan100 = (x, y) => x + y > 100 ? true : false;
console.log('sumGreaterThan100 ===', sumGreaterThan100(30, 2));

// cao
const sumOverHundred = (n1, n2) => n1 + n2 > 100;


/* 10. Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrikiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}] */

// const people = [
//     { name: 'Alfredas', age: 25 }, 
//     { name: 'Jonas', age: 25 }, 
//     { name: 'Kasparas', age: 20 }
// ];
const sortedArray = (array) => {
    const newArray = array.sort((peopleObjA, peopleObjB) => (peopleObjA.name > peopleObjB.name ? 1 : -1)).sort((peopleObjA, peopleObjB) => peopleObjA.age - peopleObjB.age);
    console.group('sortedArray ===');
    console.table(newArray);
    console.groupEnd();
    return newArray;
}
// sortedArray(people);
sortedArray([{ name: 'Jonas', age: 25 }, { name: 'Alfredas', age: 25 }, { name: 'Kasparas', age: 20 }]);

// cao
const fn10 = (array) => array.sort((a, b) => a.name > b.name ? 1 : -1).sort((a, b) => a.age - b.age);


/* 11. Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
Pvz.: fn(new Date(2020, 12, 25)) -> true */
function isItHoliday(date) {
    const holidays = ['2022 01 01', '2022 05 01', '2022 08 15'];
    const holiday = holidays.some((holidayDate) => holidayDate === date);
    console.log('holiday ===', holiday);
    return holiday;
};
isItHoliday('2022 01 01');

// cao -- tik pagal diena
function isItHoliday2(date) {
    const holidays = ["2020-01-01", "2020-05-25"];
    return holidays.some(holiday => (new Date(holiday)).getDate() === date.getDate())
}
console.log(isItHoliday2(new Date("2020-05-25")))
// The getDate() method returns the day of the month for the specified date according to local time.


/* 12. Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array. Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3 */

// cao
const missingNumber = (array) => array.find((x, i) => x + 1 !== array[i + 1]) + 1;
console.log('missingNumber ===', missingNumber([1, 2, 4, 5, 7]));

// teachers way
const numbers = [1, 2, 4, 5];
const numbers2 = [5, 6, 8, 9, 10];

function missingNr(arr) {
  const findGraza = arr.find((sk, i, masyvas) => {
    // console.log(sk);
    const dabartineReiksme = masyvas[i];
    const priekineReiksme = masyvas[i + 1];
    // console.log('dabartineReiksme, priekineReiksme ===', dabartineReiksme, priekineReiksme);
    if (dabartineReiksme + 1 !== priekineReiksme) {
      // console.log('blogai dabartineReiksme', dabartineReiksme);
      return true;
    }
  });
  console.log('findGraza ===', findGraza);
  return findGraza + 1;
}

const miss1 = missingNr(numbers);
const miss2 = missingNr(numbers2);
console.log('miss1 ===', miss1);
console.log('miss2 ===', miss2);