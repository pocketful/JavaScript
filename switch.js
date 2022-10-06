"use strict";

/* savaites dienos skaiciaus konvertavimas i zodi */
const s = 8;

if (s === 1) {
  console.log(`Pasirinkta diena: ${s} === Pirmadienis`);
} else if (s === 2) {
  console.log(`Pasirinkta diena: ${s} === Antradienis`);
} else if (s === 3) {
  console.log(`Pasirinkta diena: ${s} === Treciadienis`);
} else if (s === 4) {
  console.log(`Pasirinkta diena: ${s} === Ketvirtadienis`);
} else if (s === 5) {
  console.log(`Pasirinkta diena: ${s} === Penktadienis`);
} else if (s === 6) {
  console.log(`Pasirinkta diena: ${s} === Sestadienis`);
} else if (s === 7) {
  console.log(`Pasirinkta diena: ${s} === Sekmadienis`);
} else {
  console.log(`Pasirinkta diena: ${s} === Nera savaites diena`);
}

switch (s) {
  case 1:
    console.log(`Pasirinkta diena: ${s} === Pirmadienis`);
    break;
  case 2:
    console.log(`Pasirinkta diena: ${s} === Antradienis`);
    break;
  case 3:
    console.log(`Pasirinkta diena: ${s} === Treciadienis`);
    break;
  case 4:
    console.log(`Pasirinkta diena: ${s} === Ketvirtadienis`);
    break;
  case 5:
    console.log(`Pasirinkta diena: ${s} === Penktadienis`);
    break;
  case 6:
    console.log(`Pasirinkta diena: ${s} === Sestadienis`);
    break;
  case 7:
    console.log(`Pasirinkta diena: ${s} === Sekmadienis`);
    break;
  default:
    console.log(`Pasirinkta diena: ${s} === Nera savaites diena`);
}

/* ----------------------------------------------------------- */
/* 7 amziaus grupes paduodam i age 10, 25, 70, 110 reiksmes ir isitikinam kad veikia
0-17 - vaikas
18-60 - suauges
61-100 - saulelydis
daugiau nei 100 - nezinau ar tiesa kad naudojiesi kompiuteriu...
paduota neigiama reiksme paverciama teigiama
*/

let age = 101;
age = Math.abs(age);

switch (true) {
  case age < 18:
    console.log(`${age} metu yra vaikas`);
    break;
  case age <= 60:
    console.log(`${age} metu yra suauges`);
    break;
  case age <= 100:
    console.log(`${age} metu yra saulelydis`);
    break;
  default:
    console.log(
      `Jeigu tau ${age}, tai nezinau ar tiesa, kad naudojiesi kompiuteriu`
    );
}

/* if else */
if (age < 18) {
  console.log(`if else: ${age} metu yra vaikas`);
} else if (18 <= age && age <= 60) {
  console.log(`if else: ${age} metu yra suauges`);
} else if (61 <= age && age <= 100) {
  console.log(`if else: ${age} metu yra saulelydis`);
} else {
  console.log(
    `if else: Jeigu tau ${age}, tai nezinau ar tiesa, kad naudojiesi kompiuteriu`
  );
}

/* CAO */ /* ============================================== */
/* Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
BMW group priklauso: BMW, Mini, Rolls-Royce. */
/* Better with switch than if else */

const car = "Mini";

switch (car) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bugatti":
  case "Lamborghini":
  case "Porsche":
    console.log("VW Group");
    break;
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    console.log("BMW Group");
    break;
  default:
    console.log("Nepriklauso nei vienam");
}

/* if else */
if (
  car === "VW" ||
  car === "Audi" ||
  car === "Bentley" ||
  car === "Bugatti" ||
  car === "Lamborghini" ||
  car === "Porsche"
) {
  console.log("if else: VW Group");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
  console.log("if else: BMW Group");
} else {
  console.log("if else: Nepriklauso nei vienam");
}

/* Sukurkite variable 'userInput' ir pradžioje prilyginkite 'Obuolys'. Su Switch statement apsirašyk, kad pasakytų ar vartotojo įvestas laukelis - vaisius ar daržovė. Pridėkite bent 5 kiekvienos kategorijos. */

const userInput = "Obuolys";

switch (userInput) {
  case "Melionas":
  case "Apelsinas":
  case "Kivis":
  case "Obuolys":
  case "Ananasas":
    console.log("Vaisius");
    break;
  case "Salotos":
  case "Svogunas":
  case "Bulve":
  case "Ridikas":
  case "Spinatai":
    console.log("Darzove");
    break;
  default:
    console.log("Nei vaisius, nei darzove");
}

/* Kokia šiandien diena? Sukurkite variable 'weekDay', kuris būtų lygus skaičiui - savaitės dienai, skaičiuojant nuo 0 (t.y. pirmadienis - 0; antradienis - 1; trečiadienis - 2 ir t.t.). Parašykite Switch statement, kuris paimtų skaičių ir jį pakeistų (ne sukurtų naują kintamąjį, o pakeistų 'weekDay' reikšmę) į savaitės dieną žodžiu. Vėliau, atspausdink kintamąjį. */

let weekDay = 1;

switch (weekDay) {
  case 1:
    weekDay = "Pirmadienis";
    console.log(`Pasirinkta diena: ${weekDay}`);
    break;
  case 2:
    weekDay = "Antradienis";
    console.log(`Pasirinkta diena: ${weekDay}`);
    break;
  case 3:
    weekDay = "Treciadienis";
    console.log(`Pasirinkta diena: ${weekDay}`);
    break;
  case 4:
    weekDay = "Ketvirtadienis";
    console.log(`Pasirinkta diena: ${weekDay}`);
    break;
  case 5:
    weekDay = "Penktadienis";
    console.log(`Pasirinkta diena: ${weekDay}`);
    break;
  case 6:
    weekDay = "Sestadienis";
    console.log(`Pasirinkta diena: ${weekDay}`);
    break;
  case 7:
    weekDay = "Sekmadienis";
    console.log(`Pasirinkta diena: ${weekDay}`);
    break;
  default:
    console.log(`Pasirinkta diena ${weekDay} - nera savaites diena`);
}
