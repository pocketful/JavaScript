'use strict';

/* callbacks =============================================================================== */

/* 1. Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną parametrą - vardą. Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins. O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę, ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti). */


/* array methods =========================================================================== */

/* 1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę). */
const cars = ["BMW", "VW", "Audi"];


/* 2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.). */


/* 3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").


/* 4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.*/


/* 5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės. */


/* 6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios. */


/* 7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios. */