'use strict';

console.log('Gauti is vartotojo varda');

// pranesimo langas issoka. issokancios lenteles sustabdo html vykdyma kol lenteles nesutvarkom
alert('Hello world');

/* --------------------------------------------------------- */ 

// atsakyma pasirinkti
confirm('Ar tikrai nori istrinti?');

// atsakyma pasirinkti
const atsakymas2 = confirm('Ar tikrai nori istrinti?');
console.log(atsakymas2);  // true | false  gaunam pagal pasirinkima

/* --------------------------------------------------------- */ 

// atsakyma ivesti teksta
prompt('Ar tikrai nori istrinti?');

// atsakyma ivesti teksta
const atsakymas1 = prompt('Ar tikrai nori istrinti?');
console.log(atsakymas1);  // ivesta teksta gaunam

/* --------------------------------------------------------- */ 

// atsakyma ivesti teksta
const vardas = prompt('Koks tavo vardas?');  // jeigu pasirinkt cancel, tai bus null
console.log('Gavome varda =', vardas)

// atsakymus du is karto, atspausdinti
const amzius = prompt('Kiek tau metu?');
console.log('as esu ' + vardas + ', man yra ' + amzius + ' metu');

// tas pats atspausdinimas, tik atskiromis dalimis
const s1 = 'As esu ' + vardas;
const s2 = ', man yra ' + amzius;
const s3 = ' metu';
console.log(s1 + s2 + s3);

/* --------------------------------------------------------- */ 

// paimti is is vartotojo 1 skaiciu ir padauginti ji is 10
const sk = prompt('Iveskite skaiciu:');
const daugyba = sk * 10;
console.log(sk + ' * 10 = ' + daugyba);
    // arba
    console.log(sk * 10);
    // arba
    console.log(sk + ' * 10 = ' + sk * 10);

// paimti 2 skaicius ir juos sudauginti
const sk1 = prompt('Iveskite pirmaji skaiciu:');
const sk2 = prompt('Iveskite antraji skaiciu:');
const daugybaDvieju = sk1 * sk2;
console.log(sk1 + ' * ' + sk2 + ' = ' + daugybaDvieju);

// paimti 2 skaicius ir juos sudeti
const ska1 = prompt('Iveskite pirmaji skaiciu:');
const ska2 = prompt('Iveskite antraji skaiciu:');
const sudetis = Number(ska1) + Number(ska2);  // hmm man nemete situo budu kad reikia butinai let daryti vietoj const viska
console.log(ska1 + ' + ' + ska2 + ' = ' + sudetis);
    // arba
    let sk1a = prompt('Iveskite pirmaji skaiciu:');
    let sk2a = prompt('Iveskite antraji skaiciu:');
    sk1a = Number(sk1a);  //let, o ne const
    sk2a = Number(sk2a);
    console.log(sk1a + sk2a);

// suzinoti koks tipas
// console.log(typeof 100); // number
// console.log(typeof '100'); // string
// console.log(typeof amzius); // string
// console.log(typeof Number(amzius));  // number bus

// pakelti y kvadratu
let y = 5;
let w = y ** 2;
console.log(w);
    // pakelti y treciuoju
    let z = y ** 3;
