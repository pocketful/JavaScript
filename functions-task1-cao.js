/* 1. Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :) */ 

function nameAlert(name) {
    //alert(name); // CORRECT ONE
    console.log(name); // TEMPORARY
}
nameAlert('Iveta');


/* 2. Ir ne visos funkcijos turi parametrus - sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5. */

function random() {
    return Math.floor(Math.random() * 5) + 1;    
}
random();
console.log('random skaicius tarp 1 ir 5 ===', random());


/* 3. Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12). */ 

function nameSum(name, surname) {
    const length = name.length + surname.length;
    return length; 
}
nameSum('Iveta', 'Jac');
console.log('vardo ir pavardes raidziu ilgiu suma ===', nameSum('Iveta', 'Jac'));


/* 4. Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. */

function aBC(number) {
    const array = ['A', 'B', 'C', 'D', 'E', 'F'];
    return array[number];
}
aBC(2);
console.log('Abeceles raide pagal skaiciu ===', aBC(2));


/* 5. Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch. */ 




/* 6. Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100). */

