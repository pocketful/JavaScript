/* 1. Parasykite programa kuri apskaiciuoja 5 duotu skaiciu vidurki. */

// console.log('5, 2, 7, 9, 10 vidurkis ===', (5 + 2 + 7 + 9 + 10) / 5);

const n1 = 5; const n2 = 2; const n3 = 7; const n4 = 9; const n5 = 10;
console.log(`${n1}, ${n2}, ${n3}, ${n4}, ${n5} vidurkis yra ${(n1 + n2 + n3 + n4 + n5) / 5}`);

/* 2. Parasyt koda kad apskaiciuoti apskritimo plota, perimetra, diametra pagal duota spinduli. */

const r = 5;
console.log(`Apskritimo spindulys: ${r}`)

const S = Math.PI * r ** 2;                 // S = pi * r_kvadratu
console.log(`Apskritimo plotas: ${S}`)

const C = 2 * Math.PI * r;
console.log(`Apskritimo perimetras: ${C}`)

const D = 2 * r;
console.log(`Apskritimo diametras: ${D}`)

/* 3. Jus turite kambario ilgi, ploti ir auksti.
Reikia apskaiciuoti viso kambario plota.
Susikurti kintamuosius ilgis, plotis ir aukstis.
Atspausdinti konsolej.
Jusu kambario plotas yra xxx kai ilgis: 12, plotis: 15, aukstis: 3
Yra 2 langai 1.5 x 1.5 ir durys 0.8 x 2 reikia atimti ju plota is bendro. */

const ilgis = 12;
const plotis = 15;
const aukstis = 3;
console.log(`Kambario ilgis: ${ilgis}, plotis: ${plotis}, aukstis: ${aukstis}`);

const plotas = ilgis * plotis;
console.log(`Kambario plotas (grindys): ${plotas}`);

// Sienos plotas apskaičiuojamas pagal formulę:
// S = P * C, kur P yra kambario perimetras, C - sienų aukštis.
// Kambario perimetras apskaičiuojamas pagal formulę:
// P = (A + B) * 2, kur A yra ilgis, B - plotis.

// Apskaičiuojame kambario plotą išilgai sienų pagal šią formulę: h * (a * 2 + b * 2).

const langPlotas = 1.5 * 1.5 * 2;
const durPlotas = 0.8 * 2;
// const kambPerimetras = (ilgis + plotis) * 2;
// const sienuPlotas = kambPerimetras * aukstis - langPlotas - durPlotas;
const sienuPlotas = aukstis * (ilgis * 2 + plotis * 2);
const sienuPlotasBe = sienuPlotas - langPlotas - durPlotas;

console.log(`Kambario sienu plotas: ${sienuPlotas}`);
console.log(`Kambario sienu plotas be 2 langu ir duru: ${sienuPlotasBe}`);

// console.log(`Kambario sienu plotas be 2 langu ir duru: ${aukstis * (ilgis * 2 + plotis * 2) - 1.5 * 1.5 * 2 - 0.8 * 2}`);

/* CAO */ /* ============================================================== */

/* Suskaičiuok su JS koks bus cos(0) (t.y. cos, kai kampas 0 radians). Hint, atsakymas: 1. */
const x = 0; // angle in radians
console.log('Math.cos(x) ===', Math.cos(x));

/* Sukurk random skaičių tarp 1 ir 5 (įskaitant abu). Pasitikrink su console.log(). */
console.log('Math.random(1 - 5) ===', Math.floor(Math.random() * 5) + 1);

/* Sukurk random skaičių tarp 5 ir 12 (įskaitant abu). Pasitikrink su console.log(). */
console.log('Math.random(5 - 12) ===', Math.floor(Math.random() * 12) + 5);

/* Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne. Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random). */

let sk = Math.floor(Math.random() * 5) + 1;
console.log(sk);
if (sk === 1) {
    console.log('Laimejote');
} else {
    console.log('Nieko nelaimejote');
}

/* Patobulink programą, kad atsirastų daugiau prizų (naudok switch statement vietoj if-else).
1/15 tikimybė laimėti automobilį
3/15 tikimybė laimėti televizorių
5/15 tikimybė laimėti 2 eurus
kitais atvejais - nieko nelaimi */

let num = Math.floor(Math.random() * 15) + 1;
console.log(num);

switch (num) {
    case 1:
        console.log('Laimejote automobili');
        break;
    case 2:
    case 3:
    case 4:
        console.log('Laimejote televizorių');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log('Laimejote 2 eurus');
        break;
    default:
        console.log('Nieko nelaimejote');
}

