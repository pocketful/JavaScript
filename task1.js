'use strict';

let name = "Iveta";
let country = "kosmosa";
let bestNumber = 13;
let bestWeekDay = 6;

console.log(name);
console.log(country);
console.log(bestNumber);
console.log(bestWeekDay);

let daugyba = bestNumber * bestWeekDay;
console.log(daugyba);

let sudetis = bestNumber + bestWeekDay;
console.log(sudetis);

// 1 way
console.log('As esu ' + name + '. Noreciau keliauti i ' + country + '. Mano megstamiausias skaicius yra ' + bestNumber);

// 2 way
const sentence = 'As esu ' + name + '. Noreciau keliauti i ' + country + '. Mano megstamiausias skaicius yra ' + bestNumber; 
console.log(sentence);

// 3 way
const sen1 = 'As esu ' + name + '. ';
const sen2 = 'Noreciau keliauti i ' + country + '. ';
const sen3 = 'Mano megstamiausias skaicius yra ' + bestNumber;
console.log(sen1 + sen2 + sen3);


// x element render i HTML
const x = document.getElementById('tekstas');
console.log(x);
// pakeiciam teksta jo
x.textContent = sentence;
// x.innerHTML = daugyba;  //panasiai atspausdina
