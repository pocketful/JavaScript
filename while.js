/* while loop 0-9 */
let w = 0;
while (w < 10) {
    console.log("while loop", w);
    w++;
}

/* do while skiriasi nuo while, nes pasileidzia bent viena karta butinai
/* do while 0-9 */ 
i = 0;
do {
    console.log('do while loop', i);
    i++;
}
while (i < 10);


/* do while. ridenti kauliukius kol ismesim 12 */
let points;
do {
    points = Math.floor(Math.random() * 11) + 2; // returns a random integer between 2 and 11 (both included)
    console.log(`isridenau ${points}`);
} while (points !== 12);


/* mine. text. The number is 0, The number is 1, ... */
let text = '';
let sk = 0;
while (sk < 5) {
  text = 'The number is - ' + sk;
  console.log(text);
  sk++;  
}


/* text to HTML. The number is 0, The number is 1, ... */
// https://www.w3schools.com/js/js_loop_while.asp
// <p id="whileText"></p>

let textt = "";
let skk = 0;
while (skk < 5) {
  textt += "<br>The number is " + skk;
  skk++;
}
document.getElementById("whileText").innerHTML = textt;


/* CAO */ /* ============================== */
/* ------------------ WHILE LOOP ------------------- */
/* Su while ciklu pasirašykite, kad jūsų vardą alertintų 3 kartus. */

let i = 0;

while (i < 3) {
    // alert('Iveta'); 
    console.log('Iveta');
    i++;
}

/* ------------------ DO LOOP ------------------- */
/* Sukurkite kintamąjį (let combo = ""). Kiekvieną kartą paleidus loopą į combo prisirašo jūsų vardas (t.y. combo += "Petras" viduje while loop). Sukurkite programą, kur bus kintamasis (const times = 5), kuris nurodys kiek kartų combo atsiras jūsų vardas. Jei skaičius 0 ar neigiamas - vis tiek bent vieną kartą atsiras jūsų vardas.
Pvz:
times = 0; combo = "Petras"
times = 1; combo = "Petras"
times = 2; combo = "PetrasPetras"
times = 3; combo = "PetrasPetrasPetras" */

let combo = "";
const times = 5;
let j = 0;

do {
    combo += "Iveta";
    j++;
    console.log(`times = ${j}; combo = "${combo}"`);
} while (j < times);

