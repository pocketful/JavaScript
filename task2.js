// Paprasyti is kliento ivesti Varda (jei Jonas)
// Paprasyti is kliento ivesti Pavarde (jei Jonaitis)
// Paprasyti ivesti gimimo menesio skaiciu (jei 08)
// Paprasyti ivesti gimimo menesio diena (jei 17)
// Paprasyti ivesti megstamiausia skaiciu (jei 11)

const vardas = prompt('Iveskite varda:');
const pavarde = prompt('Iveskite pavarde:');
const gimMen = prompt('Iveskite gimimo menesio skaiciu:');
const gimDien = prompt('Iveskite gimimo menesio diena:');
const megSk = prompt('Iveskite megstamiausia skaiciu:');

// 1. Isvesti: "Mano draugas Jonas Jonainaitis yra gimes 08 men 17 diena"
console.log('Mano draugas ' + vardas + ' ' + pavarde + ' yra gimes ' + gimMen + ' men ' + gimDien + ' diena');

// 2. Isvesti: "Vardas: Jonas, Pavarde: Jonaitis ir sudejus jo gimimo men ir diena gaunama 25"
console.log('Vardas: ' + vardas + ', ' + 'Pavarde: ' + pavarde + ' ir sudejus jo gimimo men ir diena gaunama ' + (Number(gimMen) + Number(gimDien)));

// 3. Isvesti: "Vartotojas ivede skaicius 08, 17, 11. Ju suma yra 36, o daugyba yra 1496"
console.log('Vartotojas ivede skaicius ' + gimMen + ', ' + gimDien + ', ' + megSk + '. Ju suma yra ' + (Number(gimMen) + Number(gimDien) + Number(megSk)) + ', o daugyba yra ' + (Number(gimMen) * Number(gimDien) * Number(megSk)));

// 4. Isvesti: "Visu ivestu skaiciu vidurkis yra 496.66"
console.log('Visu ivestu skaiciu vidurkis yra ' + (Number(gimMen) + Number(gimDien) + Number(megSk)) / 3);
