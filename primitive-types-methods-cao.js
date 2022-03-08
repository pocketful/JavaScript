'use strict';

/* Boolean methods ======================================================================== */
/* toString() konvertuoja boolean į tekstą. true => 'true', false => 'false'. Atrakina duris boolean reikšmei paleisti String metodus. */

/* 1. Pasirašykite variable isLegalAge, kurį priskirkite true arba false. Console.log'e atvaizduokite šį variable. Sukurkite antrą console.log, kuriame atvaizduokite šį variable su toString() metodu. Turėtų skirtis spalva teksto. */

const isLegalAge = true;
console.log(isLegalAge); // boolean
console.log(isLegalAge.toString()); // string


/* Number methods ======================================================================== */

/*  Jau skaičiai pas mus turės daugiau metodų, kai kurie populiariausi (ne visi):
    * Number.isInteger(jūsų skaičius) <- tikrina ar skaičius sveikasis;
    * Number.MAX_VALUE ir Number.MIN_VALUE <- paduoda didžiausią/mažiausią skaičių skaičiuotiną su JS (bet kas daugiau ar mažiau - taps begalybe);
    * jūsųskaičius.toFixed(skaičius po kablelio) <- suformatuos skaičių, kad turėtų atitinkamą tikslumą po kablelio. */

/* 1. Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).
2. Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur) */

const milkPrice = 1.22;

if (Number.isInteger(milkPrice)) {
    console.log(`centu nereikes, nes kaina ${milkPrice.toFixed(2)} Eur`);
}
console.log(`centu reikes, nes kaina ${milkPrice.toFixed(2)} Eur`);


