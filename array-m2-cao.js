'use strict';

/* Part 1 (sort) ========================================================================================= */

/* 1. Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok. */


/* ---------------------------------------------------------------------------------- */
/* 2. Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka. */


/* ---------------------------------------------------------------------------------- */
/* 3. Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki /* mažiausio). */


/* ---------------------------------------------------------------------------------- */
/* 4. Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių). */



/* Part 2 (reduce) ========================================================================================= */

/* 1. Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių. */


/* ---------------------------------------------------------------------------------- */
/* 2. Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce). */


/* ---------------------------------------------------------------------------------- */
/* 3. Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce. */



/* Part 2 (reduce) ========================================================================================= */
/* https://javascript.info/array-methods */

/* 1. Nusikopijuokite array. Kaip matome - šitame masyve yra objektai (o iš objekto pasiimame reikšmę - t.y. property, rašydami objektas.property). Prafiltruojame masyvą, kad rodytų tik pilnamečius. */ // apacioj susije pratimai

const people = [
    {
        name: "Petras",
        age: "18"
    },
    {
        name: "Jonas",
        age: 15
    },
    {
        name: "Antanas",
        age: 20
    },
    {
        name: "Urtė",
        age: 10
    },
    {
        name: "Diana",
        age: 25
    },
    {
        name: "Ieva",
        age: 16
    }
];


/* ---------------------------------------------------------------------------------- */
/* 2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"]. */


/* ---------------------------------------------------------------------------------- */
/* 3.  Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę. */


/* ---------------------------------------------------------------------------------- */
/* 4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).
Pvz:
iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
grąžins: {brangiausias: "lemonade", pigausias: "lime"} */