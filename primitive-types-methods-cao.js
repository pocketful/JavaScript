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


/* 3. Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trim skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur). */

/* <input type="number" id="price1" placeholder="price" step="0.001" value="1.399" />
   <input type="number" id="quantity1" placeholder="quantity" step="0.1" value="5.1" />
   <button id="submit1" type="Submit">Submit</button> */

const pricel1El = document.getElementById('price1');
const quantity1El = document.getElementById('quantity1');
const submit1El = document.getElementById('submit1');
const result1El = document.createElement('h1');

submit1El.addEventListener('click', function () {
    const pricel1Value = Number(pricel1El.value);
    const quantity1Value = Number(quantity1El.value);
    const result1Value = pricel1Value * quantity1Value;

    result1El.textContent = result1Value.toFixed(2);
    submit1El.after(result1El);

});

// arba is karto EventListenery:
// const price = Number(document.getElementById('price').value);


