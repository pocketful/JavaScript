// palyginimai
// === lygina reiksmes ir kintamuju tipus
// console.log('5 === 5 ', 5 === 5);
// == lygina tik reiksmes ir bando pasiversti tipus
// console.log("5 == '5' ", 5 == '5');

let age = 10;
// gauti age is vartotojo
// age = prompt('Kiek metu?');
// consoleje prideti ivesta amziu

// conditionals
if (age > 18) {
  // jei skliausteliuose TRUE vykdom sita
  console.log(`Jums yra ${age}. Jus esate pilnametis zmogus, sveikinimai`);
} else {
  console.log(`Jums yra ${age}. Jus esate nepilnametis zmogus, sveikinimai`);
}
console.log("Po visko");

// paprastas if else
if (true) {
  // vykdom jei true
} else {
  // vykdom jei false
}

let sal1 = true;
let sal2 = false;

// suradus pirma true reiksme ivykdomas kodas ir iseinama is ciklo
// else if
// console.log('salyga 1 yra ' + sal1 + ', salyga 2 yra ' + sal2);
// template litterals
console.log(`salyga1 === ${sal1}, salyga2 === ${sal2}`);
if (sal1) {
  // vykdom jei sal1 true
  console.log("1 salyga 1 yra true");
} else if (sal2) {
  // vykdom jei sal1 false ir sal2 true
  console.log("2 sal1 false ir sal2 true");
} else {
  // vykdom jei sal1 false ir sal2 false
  console.log("3 sal1 false ir sal2 false");
}

console.log("po visko");

// jei skliausteliuose false vykdom sita
