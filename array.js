document.title = "Array";

//                      0        1         2        3       4       5      6
const pavadinimai = [
  "apple",
  "sister",
  "hammer",
  "sun",
  "table",
  "sky",
  "lake",
];
//                    0      1      2     3    4     5     6      7
const pagalbiniai = ["in", "with", "on", "my", "is", "a", "the", " "];
//               0   1  2   3  4  5  6  7  8  9
const numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];

console.log(pavadinimai);

// masyvas[index]
const treciaReiksme = pavadinimai[2];
console.log("treciaReiksme ===", treciaReiksme);

// atspausdinti su konsole skaiciu 9 is skaiciu masyvo
console.log(numbers[4]);

// prilyginti kinamajam ir atspausdinti sakinius
// my sister is in the lake
const sakinys1 =
  pagalbiniai[3] +
  pagalbiniai[7] +
  pavadinimai[1] +
  pagalbiniai[7] +
  pagalbiniai[4] +
  pagalbiniai[7] +
  pagalbiniai[0] +
  pagalbiniai[7] +
  pagalbiniai[6] +
  pagalbiniai[7] +
  pavadinimai[6];
console.log(sakinys1);

// mano pvz
const word1 = pagalbiniai[3];
const word2 = pagalbiniai[7];
const sakinys2 = word1 + word2;
console.log(sakinys2);

/* --------------------------------------------------------------------------- */
//              0        1         2        3      4        5
const pav = ["apple", "sister", "hammer", "sun", "moon", "stars"];
console.log("pav orginalas ===", pav);

// perrasyti reiksme ant virsaus (perrasys ir pirmam masyve originaliam reiksme)
pav[1] = "brother";
console.log("pav after ===", pav);

// copy. tokia butu paprasta kopija, o su masyvu taip negalima atkopijuoti, eisim metodus
let idx = 3;
let idxCopu = idx;

// paimti 3 elementa matematiniu skaiciavimu
let ketvirtas = pav[1 + 2]; // 3 index, tai 4 elementas
// let idx = 3;
// ketvirtas = pav[idx]; // irgi 3 bus
console.log("ketvirtas ===", ketvirtas);

// masyvo ilgis
const pavMasyvoIlgis = pav.length;
console.log("pavMasyvoIlgis ===", pavMasyvoIlgis);

// atspausdinti paskutini nari bet kokio ilgio masyve
const lastPavNarys = pav[pavMasyvoIlgis - 1];
console.log("lastPavNarys ===", lastPavNarys);

// atspausdinti visus pav elementus
console.log(pav[0]);
console.log(pav[1]);
console.log(pav[2]);
console.log(pav[3]);

/* parasom for cikla kuris atspausdina consolej skaicius nuo 0 iki 3 imtinai */
const length = pav.length;
for (let i = 0; i < length; i++) {
  console.log(pav[i]);
}

/* atspausdinti visu masyvo nariu suma */

let numbers2 = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];

let sum = 0;
let length2 = numbers2.length;

for (let i = 0; i < length2; i++) {
  sum += numbers2[i];
  console.log("sum ===", sum);
}
console.log("Gaulutine sum ===", sum);
