// Paprasyti is kliento ivesti Varda (jei Jonas)
// Paprasyti is kliento ivesti Pavarde (jei Jonaitis)
// Paprasyti ivesti gimimo menesio skaiciu (jei 08)
// Paprasyti ivesti gimimo menesio diena (jei 17)
// Paprasyti ivesti megstamiausia skaiciu (jei 11)

const vardas = prompt("Iveskite varda:");
const pavarde = prompt("Iveskite pavarde:");
const gimMen = prompt("Iveskite gimimo menesio skaiciu:");
const gimDien = prompt("Iveskite gimimo menesio diena:");
const megSk = prompt("Iveskite megstamiausia skaiciu:");

// 1. Isvesti: "Mano draugas Jonas Jonainaitis yra gimes 08 men 17 diena"
console.log('Mano draugas ' + vardas + ' ' + pavarde + ' yra gimes ' + gimMen + ' men ' + gimDien + ' diena');

// 2. Isvesti: "Vardas: Jonas, Pavarde: Jonaitis ir sudejus jo gimimo men ir diena gaunama 25"
console.log('Vardas: ' + vardas + ', ' + 'Pavarde: ' + pavarde + ' ir sudejus jo gimimo men ir diena gaunama ' + (Number(gimMen) + Number(gimDien)));

// 3. Isvesti: "Vartotojas ivede skaicius 08, 17, 11. Ju suma yra 36, o daugyba yra 1496"
console.log('Vartotojas ivede skaicius ' + gimMen + ', ' + gimDien + ', ' + megSk + '. Ju suma yra ' + (Number(gimMen) + Number(gimDien) + Number(megSk)) + ', o daugyba yra ' + (Number(gimMen) * Number(gimDien) * Number(megSk)));

// 4. Isvesti: "Visu ivestu skaiciu vidurkis yra 496.66"
console.log('Visu ivestu skaiciu vidurkis yra ' + (Number(gimMen) + Number(gimDien) + Number(megSk)) / 3);

// render to HTML
answer1 = 'Mano draugas ' + vardas + ' ' + pavarde + ' yra gimes ' + gimMen + ' men ' + gimDien + ' diena';
answer2 = 'Vardas: ' + vardas + ', ' + 'Pavarde: ' + pavarde + ' ir sudejus jo gimimo men ir diena gaunama ' + (Number(gimMen) + Number(gimDien));
answer3 = 'Vartotojas ivede skaicius ' + gimMen + ', ' + gimDien + ', ' + megSk + '. Ju suma yra ' + (Number(gimMen) + Number(gimDien) + Number(megSk)) + ', o daugyba yra ' + (Number(gimMen) * Number(gimDien) * Number(megSk));
answer4 = 'Visu ivestu skaiciu vidurkis yra ' + (Number(gimMen) + Number(gimDien) + Number(megSk)) / 3;

// const an1 = document.getElementById('ans1HTML');
// console.log(an1);
ans1HTML.textContent = answer1;

// const an2 = document.getElementById('ans2HTML');
// console.log(an2);
ans2HTML.textContent = answer2;

// const an3 = document.getElementById('ans3HTML');
// console.log(an3);
ans3HTML.textContent = answer3;

// const an4 = document.getElementById('ans4HTML');
// console.log(an4);
ans4HTML.textContent = answer4;
