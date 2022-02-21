/* console.log('Hello world');
2 + 2;
bloko komentaras
console.log(2 + 2 + 4); */

// = assignement operatorius. ima kas yra desineje ir priskiria tam kas yra kaireje
let x = 30;
let y = '50';
// string tipo duomens pavertimas i skaiciu
y = Number(y);  // parseInt() irgi ok   -----jei be sito ismeta 3050 - automatiskai pavers i stringa ir 30

let suma = x + y;
console.log(suma);  // 80

let atimtis = x - y;
console.log(atimtis);

// string tipo duomenu sujungimas i viena stringa
let word1 = 'As mokausi';
let word2 = ' javascript';
let sakinys = word1 + word2;
console.log(sakinys);

console.log('x = ' + x + ' y = ' + y);
console.log('Sudetis');
console.log(suma);
console.log('Atimtis');
console.log(atimtis);
console.log('Daugyba');
console.log(x * y);
console.log('Dalyba');
console.log(x / y);
