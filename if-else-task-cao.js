/* 1. Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne. */

const legalAge = 20;
const clientAge = 35;

if (clientAge >= legalAge) {
    alert('Has reached a legal age');
} else {
    alert('Havent reached a legal age');
}

/* 2. Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length). */

const name = 'Iveta';

if (name.length > 6) {
    console.log('Ilgas vardas')
}

/* 3. Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult". */   // Nulis, simtas?? 

const age = 101;

if (0 <= age && age <= 18) {
    console.log('Child');
} else if (19 <= age && age <= 100) {
    console.log('Adult');
} else {
    console.log('Invalid age');
}

/* 
if (age < 0 || 100 < age) {
    console.log('Invalid age');
} else if (0 <= age && age <= 18) {
    console.log('Child');
} else if (19 <= age && age <= 100) {
    console.log('Adult');
} */

/* 4. Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
BMW group priklauso: BMW, Mini, Rolls-Royce. */

const car = 'Mini';

if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
    console.log('VW Group');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
    console.log('BMW Group');
} else {
    console.log('Nepriklauso nei vienam');
}