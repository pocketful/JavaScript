'use strict';

const users = [
    {
        id: 1,
        username: 'Bob',
        password: 'secret123',
        department: 'A',
        avatar: 'https://placeimg.com/500/300/nature',
        online: false,
    },
    {
        id: 2,
        username: 'Jill',
        password: 'secret456',
        department: 'B',
        avatar: 'https://placeimg.com/500/480/nature',
        online: true,
    },
    {
        id: 3,
        username: 'James',
        password: 'secret789',
        department: 'B',
        avatar: 'https://placeimg.com/800/480/nature',
        online: true,
    },
    {
        id: 4,
        username: 'Mike',
        password: 'secret111',
        department: 'C',
        avatar: 'https://placeimg.com/640/480/nature',
        online: false,
    },
];


// 1. parasyti funkcija kuri atrenka visus online esancius vartotojus

function isOnline(array) {
    const onlineUsers = array.filter((user) => user.online === true);
    console.group('isOnline ===');
    console.table(onlineUsers);
    console.groupEnd();
    return onlineUsers;
}
isOnline(users);

/* ---------------------------------------------------------------- */
// 2. su funkcija atrinkti B ir C departameto userius
function fromDepartmentsBC(array) {
    const departmentBC = array.filter((user) => user.department === 'B' || user.department === 'C');
    console.group('fromDepartmentsBC ===');
    console.table(departmentBC);
    console.groupEnd();
    return departmentBC;
}
fromDepartmentsBC(users);


// norint atrinkt kai argumentu paduodi raide
function fromDepartments(array, letters) {

    debugger
    const departmentUsers = array.filter((user) => letters.includes(user.department));

    // 2 way, for
    const departmentUsers2 = array.filter((user) => {
        for (let i = 0; i < letters.length; i++) {
            if (user.department === letters[i]) {  // same: if (user.department.includes(letters[i])) {
                return true;
            }
        }
        return false;
    });

    // su viena raide ok:
    // const departmentUsers = array.filter((user) => user.department.includes(letters[1]));
    // fromDepartments(users, ['A']);
    //const departmentUsers = array.filter((user) => user.department.includes(letters));

    console.group('fromDepartments ===', letters);
    console.table(departmentUsers);
    console.groupEnd();
    return departmentUsers;
}
fromDepartments(users, ['A', 'C']);
// fromDepartments(users, ['A']);


/* ---------------------------------------------------------------- */
// 3. parasyti funkcija kuri sugeneruoja htmle nuotrauku galerija is user paveiksleliu, su username pavadinimu

function generateGallery(array) {
    // container
    const divEl = document.createElement('div');
    divEl.className = 'container';

    array.forEach((user) => {
        // user card
        const userCardEl = document.createElement('figure');
        userCardEl.className = 'user-card';

        // user username
        const figcaptionEl = document.createElement('figcaption');
        figcaptionEl.textContent = user.username;
        figcaptionEl.className = 'user-card-figcaption';
        userCardEl.append(figcaptionEl);

        // user img
        const imgEl = document.createElement('img');
        imgEl.src = user.avatar; //   `img/${user.avatar}` - if it's in folder
        imgEl.alt = 'nature image of ' + user.username;
        imgEl.className = 'user-card-img';
        userCardEl.append(imgEl);

        // append card to container
        divEl.append(userCardEl);
    });

    //append container
    document.body.append(divEl);
}
generateGallery(users);

/* ---------------------------------------------------------------- */
// 4. parasyti funkcija kuriai paduodam id ir ji grazina objekta kurio id sutampa su duotu. jei toks nerandamas tai grazina { found: false, msg: 'user not found', }

function objectFromId(id, array) {
    const userWithId = array.find((user) => user.id === id) || { found: false, msg: 'user not found' };

    console.group('userWithId ===');
    console.table(userWithId);
    console.groupEnd();
}
objectFromId(8, users);


/* ---------------------------------------------------------------- */
// 5. Parasyti funkcija kuriai paduodam username ir password.
// 5.1 jei pasword ir username sutampa tai iskonsolinam loggin success
// 5.2 jei pasword ir username nesutampa tai iskonsolinam loggin fail
// 5.3 jei pasword ir username sutampa tai padarom vartotoja kad jis butu online





/* CAO objects array ================================================================================== */

const data = [{ id: 1, first_name: "Lief", gender: "Female", car_model: "Corolla", car_year: 2002, shirt_size: "3XL" }, { id: 2, first_name: "Danya", gender: "Male", car_model: "911", car_year: 2008, shirt_size: "XS" }, { id: 3, first_name: "Marsha", gender: "Male", car_model: "V50", car_year: 2009, shirt_size: "XL" }, { id: 4, first_name: "Clim", gender: "Genderqueer", car_model: "Sebring", car_year: 2000, shirt_size: "XS" }, { id: 5, first_name: "Merlina", gender: "Polygender", car_model: "Corvette", car_year: 2012, shirt_size: "2XL" }, { id: 6, first_name: "Danila", gender: "Genderfluid", car_model: "1 Series", car_year: 2011, shirt_size: "3XL" }, { id: 7, first_name: "Homere", gender: "Male", car_model: "Sunbird", car_year: 1983, shirt_size: "S" }, { id: 8, first_name: "Dayna", gender: "Non-binary", car_model: "Sigma", car_year: 1989, shirt_size: "2XL" }, { id: 9, first_name: "Chickie", gender: "Agender", car_model: "Esteem", car_year: 1997, shirt_size: "L" }, { id: 10, first_name: "Haley", gender: "Bigender", car_model: "Neon", car_year: 1999, shirt_size: "XL" }, { id: 11, first_name: "Ajay", gender: "Genderqueer", car_model: "Edge", car_year: 2012, shirt_size: "3XL" }, { id: 12, first_name: "Cyb", gender: "Bigender", car_model: "Tahoe", car_year: 2009, shirt_size: "XS" }, { id: 13, first_name: "Ewell", gender: "Agender", car_model: "9-7X", car_year: 2007, shirt_size: "XS" }, { id: 14, first_name: "Charyl", gender: "Genderqueer", car_model: "Sidekick", car_year: 1994, shirt_size: "XL" }, { id: 15, first_name: "Ottilie", gender: "Genderfluid", car_model: "Continental GTC", car_year: 2012, shirt_size: "M" }, { id: 16, first_name: "Sammy", gender: "Genderqueer", car_model: "Sonata", car_year: 2013, shirt_size: "XS" }, { id: 17, first_name: "Giorgio", gender: "Genderfluid", car_model: "S40", car_year: 2011, shirt_size: "2XL" }, { id: 18, first_name: "Cedric", gender: "Agender", car_model: "Thunderbird", car_year: 2006, shirt_size: "S" }, { id: 19, first_name: "Holli", gender: "Non-binary", car_model: "Prius c", car_year: 2012, shirt_size: "2XL" }, { id: 20, first_name: "Neil", gender: "Genderqueer", car_model: "Taurus", car_year: 2003, shirt_size: "M" }, { id: 21, first_name: "Lynnett", gender: "Female", car_model: "Mirage", car_year: 1994, shirt_size: "M" }, { id: 22, first_name: "Thacher", gender: "Genderqueer", car_model: "Navigator L", car_year: 2012, shirt_size: "S" }, { id: 23, first_name: "Glenna", gender: "Non-binary", car_model: "Aero 8", car_year: 2008, shirt_size: "2XL" }, { id: 24, first_name: "Nicol", gender: "Agender", car_model: "GTO", car_year: 1968, shirt_size: "XS" }, { id: 25, first_name: "Bernadine", gender: "Non-binary", car_model: "928", car_year: 1991, shirt_size: "S" }, { id: 26, first_name: "Joanna", gender: "Genderqueer", car_model: "S60", car_year: 2013, shirt_size: "XS" }, { id: 27, first_name: "Celesta", gender: "Female", car_model: "Esprit", car_year: 2001, shirt_size: "L" }, { id: 28, first_name: "Adi", gender: "Agender", car_model: "RAV4", car_year: 2008, shirt_size: "S" }, { id: 29, first_name: "Nan", gender: "Non-binary", car_model: "Town Car", car_year: 2007, shirt_size: "3XL" }, { id: 30, first_name: "Reynold", gender: "Female", car_model: "Blackwood", car_year: 2003, shirt_size: "2XL" }, { id: 31, first_name: "Raina", gender: "Non-binary", car_model: "Tempo", car_year: 1987, shirt_size: "S" }, { id: 32, first_name: "Eward", gender: "Non-binary", car_model: "Milan", car_year: 2008, shirt_size: "2XL" }, { id: 33, first_name: "Teresa", gender: "Genderqueer", car_model: "Econoline E150", car_year: 1997, shirt_size: "3XL" }, { id: 34, first_name: "Delmar", gender: "Female", car_model: "Legend", car_year: 1990, shirt_size: "XL" }, { id: 35, first_name: "Koral", gender: "Agender", car_model: "B-Series", car_year: 1992, shirt_size: "3XL" }, { id: 36, first_name: "Karil", gender: "Non-binary", car_model: "MR2", car_year: 1986, shirt_size: "S" }, { id: 37, first_name: "Stepha", gender: "Polygender", car_model: "Daewoo Magnus", car_year: 2004, shirt_size: "S" }, { id: 38, first_name: "Jaclyn", gender: "Genderfluid", car_model: "Grand Marquis", car_year: 2000, shirt_size: "M" }, { id: 39, first_name: "Peria", gender: "Polygender", car_model: "Evora", car_year: 2011, shirt_size: "2XL" }, { id: 40, first_name: "Cecelia", gender: "Genderfluid", car_model: "Accent", car_year: 1998, shirt_size: "L" }, { id: 41, first_name: "Katha", gender: "Female", car_model: "RDX", car_year: 2011, shirt_size: "XS" }, { id: 42, first_name: "Beverie", gender: "Male", car_model: "Probe", car_year: 1992, shirt_size: "2XL" }, { id: 43, first_name: "Pavla", gender: "Polygender", car_model: "Colt", car_year: 1994, shirt_size: "XL" }, { id: 44, first_name: "Sonnie", gender: "Non-binary", car_model: "Impreza", car_year: 2012, shirt_size: "3XL" }, { id: 45, first_name: "Jordan", gender: "Genderqueer", car_model: "Cougar", car_year: 1994, shirt_size: "2XL" }, { id: 46, first_name: "Court", gender: "Female", car_model: "Civic", car_year: 2005, shirt_size: "2XL" }, { id: 47, first_name: "Berton", gender: "Female", car_model: "xB", car_year: 2012, shirt_size: "2XL" }, { id: 48, first_name: "Maryl", gender: "Bigender", car_model: "LaCrosse", car_year: 2010, shirt_size: "XS" }, { id: 49, first_name: "Robinson", gender: "Non-binary", car_model: "Dakota", car_year: 1992, shirt_size: "XS" }, { id: 50, first_name: "Nerissa", gender: "Male", car_model: "F150", car_year: 2002, shirt_size: "3XL" }]

/* example
  {
    id: 50,
    first_name: "Nerissa",
    gender: "Male",
    car_model: "F150",
    car_year: 2002,
    shirt_size: "3XL",
  },
*/
/* -----------------------------------------------------------------------*/
/* 1. Pasakykite skaičių kiek vyrų yra tarp šių duomenų (t.y. console'log skaičių).*/

const howManyMan = data.reduce((total, obj) => obj.gender === "Male" ? total + 1 : total, 0);
console.log('howManyMan ===', howManyMan);

    // cao 
    console.log(data.filter((person) => person.gender === "Male").length);


/* -----------------------------------------------------------------------*/
/* 2. Sukurkite masyvą, kuriuose būtų id visų žmonių, kurie turi automobilius naujesnius nei 2000 metai. */

const newerCars = data.filter((obj) => obj.car_year > 2000).map((obj) => obj.id);
console.log('newerCars ===', newerCars);


/* -----------------------------------------------------------------------*/
/* 3. Sukurkite masyvą visų žmonių, kurių marškinių dydžiai XS arba S; ir surūšiuokite šį masyvą pagal vardus, A-Z tvarka (alfabetiškai). */
/* 4. Pakoreguokite trečią pratimą, kad masyve matytųsi tik id, vardas bei marškinių dydis. */

const smallShirts = data.filter((obj) => obj.shirt_size === 'XS' || obj.shirt_size === 'S')
  .sort((objA, objB) => objA.first_name > objB.first_name ? 1 : -1)
  // .map((obj) => ({ id: obj.id, first_name: obj.first_name, shirt_size: obj.shirt_size, }));
  .map(({ id, first_name, shirt_size }) => ({ id, first_name, shirt_size }));

console.group('smallShirts ===');
console.table(smallShirts);
console.groupEnd();

// cao
console.log(data.filter((person) => person.shirt_size === "XS" || person.shirt_size === "S")
  .map((person) => ({ id: person.id, first_name: person.first_name, shirt_size: person.shirt_size, }))
  .sort((a, b) => (a.first_name > b.first_name ? 1 : -1)));