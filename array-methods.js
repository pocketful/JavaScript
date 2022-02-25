let colors = ['green', 'blue', 'red'];
console.log('colors ===', colors);

// array.push() - prideti reiksme i masyvo gala (modifikuoja originala)
colors.push('yellow', 'brown');
console.log('colors po push ===', colors);

// array.unshift() - prideti reiksme i masyvo pradzia (modifikuoja originala)
colors.unshift('pink');
console.log('colors po unshift ===', colors);

// array.shift() - istrina pirma reiksme is masyvo (modifikuoja originala)
colors.shift();
console.log('colors po shift ===', colors);

// array.pop() - istrina paskutine reiksme is masyvo (modifikuoja originala)
colors.pop();
console.log('colors po pop ===', colors);

// pirma atimta reiksme is masyvo issisaugot
const firstColor = colors.shift();
console.log('firstColor ===', firstColor);
console.log('colors po shift ===', colors);

// array slice() - isima reiksmes i new array, nekeicia originalo. paskutinio neiskaiciuoja
let colorsBig = ['green', 'blue', 'red', 'yellow', 'pink'];
console.log('colorsBig ===', colorsBig);
colorsBig = colorsBig.slice(2, 4);  // (0) paima visus skaicius nuo pradzios iki galo. -1 paims paskutini elemeta
console.log('colorsBig po slice ===', colorsBig);  // ['red', 'yellow']

// array splice() - ideda reiksmes
let colorsBig2 = ['green', 'blue', 'red', 'yellow', 'pink'];
console.log('colorsBig2 ===', colorsBig2);
colorsBig2.splice(1, 2); // // At position 1, remove 2 items: ['blue'], ['red'] pasalina
console.log('colorsBig2 ===', colorsBig2);
    colorsBig2 = colorsBig2.splice(1, 2);  // issaugoti pasalintus elementus var ['blue', 'red']
    console.log('colorsBig2 po splice ===', colorsBig2);  // ['blue', 'red', 'yellow']
