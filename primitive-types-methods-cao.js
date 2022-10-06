"use strict";

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

const pricel1El = document.getElementById("price1");
const quantity1El = document.getElementById("quantity1");
const submit1El = document.getElementById("submit1");
const result1El = document.createElement("h1");

submit1El.addEventListener("click", function () {
  const pricel1Value = Number(pricel1El.value);
  const quantity1Value = Number(quantity1El.value);
  const result1Value = pricel1Value * quantity1Value;

  result1El.textContent = result1Value.toFixed(2);
  submit1El.after(result1El);
});

// arba is karto EventListenery:
// const price = Number(document.getElementById('price').value);

/* String methods ======================================================================== */
/* https://www.w3schools.com/js/js_string_methods.asp */
/*  Tiek boolean, tiek number galime konvertuoti į string'us. Keli, mano galva, populiariausi:
 * tekstas1.includes(tekstas2) <- tikrina ar tekstas2 yra tekstas1 viduje (grąžina boolean reikšmę);
 * tekstas.slice() <- apkarpo tekstą pagal paduodamus parametrus (t.y. nukerpa pradžią ar/ir galą);
 * tekstas.trim() <- ištrina priekyje teksto padėtus tarpelius;
 * tekstas.toUpperCase(), tekstas.toLowerCase() <- didina/mažina teksto kapitalizaciją (pvz. "a" => "A").
 * tekstas.repeat(skaičius) <- atkartoja tekstą tiek kartų, kiek nurodo skaičius.
 * tekstas.split(parametras) <- padalina tekstą į kelias dalis (pagal paduotą parametrą) ir grąžina array (pvz. per tarpelį: "BMW AUDI".split(" ") => ["BMW", "AUDI"]). */

/* 1. Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo. */
/*
  <form id="nameForm">
    <input type="text" id="name" name="name" placeholder="name" value="Iveta" />
    <input type="number" id="number" name="number" placeholder="number" value="3" />
    <button type="submit">Repeat</button>
  </form>
*/

const formNameEl = document.forms.nameForm;

formNameEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const numberValue = Number(formNameEl.elements.number.value);
  const nameValue = formNameEl.elements.name.value;

  if (Number.isInteger(numberValue) && nameValue) {
    const resultEl = document.createElement("h1");
    resultEl.textContent = nameValue.repeat(numberValue);
    formNameEl.after(resultEl);
    console.log(nameValue);
    console.log(numberValue);
    console.log(resultEl);
  } else {
    alert("iveskite sveika skaiciu arba varda");
    return;
  }
});

/* !nameValue ????????????????????? */
// const formNameEl = document.forms.nameForm;

// formNameEl.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const numberValue = Number(formNameEl.elements.number.value);
//     const nameValue = formNameEl.elements.name.value;
//     console.log('nameValue ===', nameValue);

//     console.log('nameValue bool ===', Boolean(nameValue));
//     if (!Number.isInteger(numberValue) && !nameValue) {
//         alert('iveskite sveika skaiciu arba varda');
//         return;
//     }

//     const resultEl = document.createElement('h1');
//     resultEl.textContent = nameValue.repeat(numberValue);
//     formNameEl.after(resultEl);

//     console.log(nameValue);
//     console.log(numberValue);
//     console.log(resultEl);
// });

/* 2. Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai. */
/*  <form id="name2Form">
      <input type="text" id="name" name="name" placeholder="name" />
      <button type="submit">Length</button>
    </form> */

const formName2El = document.forms.name2Form;

formName2El.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = formName2El.elements.name.value.trim();
  const resultEl = document.createElement("h1");
  resultEl.textContent = `Length: ${nameValue.length}`;
  formName2El.after(resultEl);
});

/* 3. Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė. */
/* 4. Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis. */

/* <form id="name3Form">
     <input type="text" id="fullname" name="fullname" placeholder="name surname" />
     <button type="submit">Submit</button>
   </form> */

const formName3El = document.forms.name3Form;

formName3El.addEventListener("submit", function (event) {
  event.preventDefault();

  // get all input value
  const fullnameValue = formName3El.elements.fullname.value.trim(); // Iveta Jac Kun Ai

  // splits a string into an array
  const fullnameArray = fullnameValue.split(" "); // ['Iveta', 'Jac', 'Kun', 'Ai']

  // name is array's first element
  const nameEl = document.createElement("h1");
  nameEl.textContent = `Name: ${fullnameArray[0]}`; // Name: Iveta
  console.log("nameEl ===", nameEl.textContent);

  const surnameEl = document.createElement("h1");

  /* if surname is one word */
  // surnameEl.textContent = `Surname: ${fullnameArray[1]}`;  // Surname: Jac

  /* if surname consists of more than 1 words */

  // new array, sliced beginning from [1]
  const surnameArray = fullnameArray.slice(1); // ['Jac', 'Kun', 'Ai']
  // join new array elements into a string, separate with blank spaces
  surnameEl.textContent = `Surname: ${surnameArray.join(" ")}`; // Surname: Jac Kun Ai

  formName3El.after(nameEl, surnameEl);
});
