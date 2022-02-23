// Parašykite programą, kuri:
// » Paprašyti įvesti prisijungimo vardą ir slaptažodį
// » Jei vardas admin, slaptažodis turi būti “master”
// » Jei vardas ne admin - tai slaptažodis yra: vardas ir skaičius 11.
// Pvz.: username: andrius, psw: andrius11
// » “Sveiki, admin” arba “Neteisingas slaptažodis”
// » Jei neiįvedė nieko - “Viso gero!”

// const login = prompt('Įveskite prisijungimo vardą:');
// const password = prompt('Įveskite slaptažodį:');

const login = 'admin';
const password = 'admin11';

if (login === 'admin' && password === 'master') {
    console.log('Sveiki, admin');
} else if (login !== 'admin' && password === login + '11') {
    console.log(`Sveiki, ${login}`);
} else if (!login && !password) {
    console.log('Viso gero!');
} else {
    console.log('Neteisingas slaptažodis'); // arba prisijungimo vardas
}
