// kintamuosius naujesnius visada naudosim - let, const
// pasakom pc issaugoti vieta atmintyje, kur mes noresim saugoti ir naudoti reiksmes

const x = 5;
let y = 5;
let w = "50";
let isMain = true; // boolean 1
let isYellow = false; // boolean 0
// if (isMain === true) {
//   console.log('It is main');
// }
let user = {}; // object
let myArray = []; // object / array
let isBlue = null; // kai isvalom kintamojo reiksme buna null
let notHere = undefined; // kai sukuriam kintamaji jis buna undefined
let blur;
// blur = 'labas';
console.log(blur); // undefined bus

// var - senesio tipo globalus kintamasis, gyvena visam kode, o anie veikia tik to pvz 'if' viduje
var z = 25;

// x = 50; // jeigu dabar perrasysim, tai ismes klaida, nes x yra contanta, nekeiciamas
// y = 100; // viskas ok

// string tipo duomens pavertimas i skaiciu
w = Number(w); // parseInt() irgi ok   -----jei be sito ismeta 3050 - automatiskai pavers i stringa ir 30
