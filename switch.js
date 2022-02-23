"use strict";
// savaites dienos skaicio konvertavimas i zodi
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

switch(s) {
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

let age = 101;
age = Math.abs(age);

switch(true) {
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
      console.log(`Jeigu tau ${age}, tai nezinau ar tiesa, kad naudojiesi kompiuteriu`);
}