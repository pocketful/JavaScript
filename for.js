/* while loop 0-10 */
let w = 0;
while (w < 10) {
    console.log("while cycle", w);
    w++;  // kas antras: w += 2; arba w = w + 2;   
}
console.log("while cycle", w);


/* same with for loop */
for (let f = 0; f < 10; f++) {
    console.log("for cycle", (f + 1)); // jeigu norim pradet nuo 1, nekeiciant salygos tai + 1
}


/* atspausdinti skaicius nuo 15 iki 55 */
for (let i = 15; i <= 55; i++) {
    console.log(i);
}


/* atspausdinti skaicius nuo 100 iki 40 mazejancia tvarka */
for (let i = 100; i >= 40; i--) {
    console.log(i);
}


/* atspausdinti skaicius nuo -50 iki 300 kas trecia skaiciu */
for (let i = -50; i <= 300; i += 3) {
    console.log(i);
}


/* sudeti visus skaicius nuo 1 iki 6 */   /* ( 1 + 2 + 3 + 4 + 5 + 6 = 21 ); */
/* 0 + 1 = 1;   1 + 2 = 3;   3 + 3 = 6;   6 + 4 = 10;   10 + 5 = 15;   15 + 6 = 21;   21 */
let sum = 0;
for (let sk = 1; sk <= 6; sk++) {
    // console.log('sk ===', sk);
    sum = sum + sk;  // sum += sk;
    console.log('sum ===', sum);
}
console.log('Gaulutine sum ===', sum);


/* sudauginti skaicius nuo 60 iki 70 */   /* (60 * 61 * 62 * 63 * 64 * 65 * 66 * 67 * 68 * 69 * 70) */
let daugyba = 60;  // arba 1, bet tada papildomas pradzioj veiksmas vienas
for (let i = 61; i <= 70; i++) {   // arba nuo 60, bet tada papildomas pradzioj veiksmas vienas
    console.log(`${daugyba} * ${i}`);
    daugyba *= i;
    console.log('daugyba ===', daugyba);
}
console.log('Galutine daugyba ===', daugyba);


    /* 60 * 61, 60 * 62, 60 * 63.. */
    let sum = 0;
    for (let i = 60; i <= 70; i++) {
        for (let y = 60; y <= 70; y++) {
            // console.log('i ===', i);
            // console.log('y ===', y);
            // let sum = i * y; /* 3600 3660 3720 ... */  /* 60 * 61, 60 * 62, 60 * 63.. */
            sum = sum + i * y;  /* 3600 7260 10980 ... */  /* 60 * 61 + 60 * 62 + 60 * 63.. */
            console.log(`${sum} === ${i}(i) * ${y}(y)`);
        }
    }
    console.log('Galutine sum ===', sum);


/* paimti skaicius nuo 2 iki 10 ir isvesti ju vidurki su for ciklo pagalba */
/* (2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 54 / 9 = 6) */
let sum = 0;
let counter = 0;
for (let i = 2; i <= 10; i++) {
    counter++;
    console.log('counter ===', counter);
    sum = sum + i;
    console.log('sum ===', sum);
}
const vid = sum / counter;
console.log('sum ===', sum);
console.log('vidurkis ===', vid);
// arba tiesiog
console.log(`Skaiciu nuo 2 iki 10 suma yra ${sum}, o juos padalinus is ${counter}, gauname, kad ju vidurkis yra ${sum / counter}`);


/* paimti skaicius nuo 11 iki 22 ir atspausdinti kiekviena skaiciu padauginta is 2 */
for (let i = 11; i <= 22; i++) {
    let y = i * 2;
    console.log(y);
    // console.log(`${i} * 2 = ${i * 2}`);
}


/* paimti skaicius nuo 11 iki 22 ir atspausdinti kiekviena skaiciu padauginta is 2 ir prideta 7 */
for (let i = 11; i <= 22; i++) {
    let y = i * 2 + 7;
    console.log(y);
    // console.log(`${i} * 2 + 7 = ${i * 2 + 7}`);
}


/* CAO */ /* ----------------------------------------------------------- */
/* Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą (atsimink, konsolė tas pačias eilutes grupuoja ir šalia parašo skaičiuką dažniausiai, vietoj to, kad išmestų kiekvienoje eilutėje). */
for (let i = 0; i < 10; i++) {
    console.log('Iveta');
}

/* Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji. */ 
const vardas = 'Iveta';
const n = 10;
for (let j = 0; j < n; j++) {
    console.log(vardas);
}
/* Prie savo vardo atspaudink ir 'i' raidę, t.y. kelintas ciklas yra (pvz.: "0. Petras", "1. Petras", "2. Petras")... */
for (let j = 0; j < n; j++) {
    console.log(`${j}. ${vardas}`);
}

/* Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje. */
for (let sk = 10; sk > 0; sk--) {
    console.log(sk);
}
