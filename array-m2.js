"use strict";

let x = 10; // saved bu value
let xCopy = x; // transfer value to another var

xCopy = 20;

console.log({ x }, { xCopy });

// by reference
//    x0845
const numbs = [1, 2, 3];
const numbs2 = [1, 2, 3];
//  x0845       x0845
let numbsCopy = numbs;

// array copy (sekli)
// let numbsCopy = numbs.slice();
console.log(numbsCopy === numbs);
console.log("numbs2 === numbs", numbs2 === numbs);

numbsCopy.push(7);

console.log("numbsCopy ===", numbsCopy);
console.log("numbs ===", numbs);

// obj saved by reference

const user = {
  name: "james",
  age: 25,
};

const userCopy = user;
userCopy.town = "Viena";
console.log("userCopy ===", userCopy);
console.log("user ===", user);

/* ==================================================================================================== */

// new array with objects
const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
];

console.table(students);

// 1. atrinkti i nauja masyva studentus kurie turi masina
const studentsWithCar = students.filter((studObj) => studObj.hasCar);
console.table(studentsWithCar);

// 1.1 atrinkti i nauja masyva studentus kurie turi masina su forEach
const studentsWithCarForEach = [];
students.forEach((studObj) => {
  if (studObj.hasCar === true) {
    studentsWithCarForEach.push(studObj);
  }
});
console.log("studentsWithCarForEach === ", studentsWithCarForEach);
//console.table(studentsWithCarForEach, ['name', 'hasCar']);

// 2. Atrinkti i nauja masyva zmones is Vilniaus
const studentsFromVln = students.filter(
  (studObj) => studObj.town === "Vilnius"
);
console.group("studentsFromVln");
console.table(studentsFromVln);
console.groupEnd();

// 3. Atrinkti i nauja masyva moteris
const studentsFemale = students.filter(
  (studObj) => studObj.gender === "female"
);
console.table(studentsFemale);

// 4. suzinoti ar yra nors vienas zmogus is Kauno
const anyoneFromKaunas = students.some((studObj) => studObj.town === "Kaunas");
console.log("anyoneFromKaunas ===", anyoneFromKaunas);

// 4a. ar visu amzius yra skaicius
const everyAgeIsNumber = students.every(
  (studObj) => typeof studObj.age === "number"
);
console.log("everyAgeIsNumber ===", everyAgeIsNumber);

// 5. suskaiciuoti kiek zmoniu yra jaunesni nei 26
const youngerThan26 = students.filter((studObj) => studObj.age < 26); // gale studObj.age < 26).length;
const howManyYoungerThan26 = youngerThan26.length;
console.log({ howManyYoungerThan26 });

// 5.1 for each
let youngerThan26ForEach = 0;
students.forEach((studObj) => {
  if (studObj.age < 26) {
    youngerThan26ForEach++;
  }
});

// 6.0. Grazinti nauja masyva kurio objektuose butu tik amzius
const onlyAge = students.map((studObj) => ({ age: studObj.age }));
console.table(onlyAge);

// const onlyAge = students.map((studObj) => studObj.age);

// 6.1. Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas
// const newArrayOnlyNameAndCity = students.map((studObj) => studObj.name && studObj.town);
const onlyNameAndCity = students.map((studObj) => ({
  name: studObj.name,
  town: studObj.town,
}));
const onlyNameAndCity2 = students.map(({ name, town }) => ({ name, town }));
console.table(onlyNameAndCity);
console.table(onlyNameAndCity2);

// teacher's way
const nameAndTownArray = students.map((studObj) => {
  const newObj = {
    name: studObj.name,
    town: studObj.town,
  };
  return newObj;
});
console.log("nameAndTownArray ===", nameAndTownArray);

/* reduce ========================================================================================= */
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const numbers = [1, 2, 3, 4];
let sum = 0;
// numbers.forEach((num) => sum += num);
numbers.forEach((num) => {
  sum += num;
});
console.log("sum ===", sum);

const average1 = sum / numbers.length;

// const totalReduce = numbers.reduce((total, num) => {}, 0);
// jeigu irasytas gale 0, tai total bus 0, jei neirasytas tai prades nuo index 0
const totalReduce = numbers.reduce((total, num, i) => {
  return total + num;
}, 0);
console.log("totalReduce ===", totalReduce);

const totalReduceAverage = numbers.reduce((total, num, i) => {
  //    const singleNumAverage = num / numbers.length; // kiekvieno num vidurki atskirai
  //    return total + singleNumAverage;  // sudeti visu num vidurkius atskirus
  return total + num / numbers.length;
}, 0);
console.log("totalReduceAverage ===", totalReduceAverage);

// 8. Gauti visu zmoniu metu suma
const totalStudentsAge = students.reduce(
  (total, studObj) => total + studObj.age,
  0
);
console.log("totalStudentsAge ===", totalStudentsAge);

// 9. Suskaiciuoti visu zmoniu metu vidurki
const totalStudentsAgeAverage = students.reduce(
  (total, studObj) => total + studObj.age / students.length,
  0
);
console.log("totalStudentsAge ===", totalStudentsAgeAverage);

/* ---------------------------------------------------------------------------------------- */
// 10. Surasti Mike ir padaryt kad turetu masina

const studentsNew = students.slice();

console.log("students === ", students);
const studentMike = studentsNew.find((studObje) => studObje.name === "Mike");
studentMike.hasCar = true; // keicia originalu array, todel slice'inau new -- pakeicia vis tiek
console.log("studentMike", studentMike);
console.log("students === ", students);

// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu
// const onlyNameAge = students.map((studObj) => ({name: studObj.name, age: studObj.age}));
const onlyNameAge = students.map(({ name, age }) => ({ name, age }));
console.table(onlyNameAge);

function generateList() {
  const olEl = document.createElement("ol");
  students.forEach((studObj) => {
    const liEl = document.createElement("li");
    liEl.textContent = `${studObj.name} age is ${studObj.age}`;
    olEl.append(liEl);
  });
  document.body.append(olEl);
}
generateList();

// 7a. salia el teksto li viduje sukuriam mygtuka su tekstu X

function generateListAndButton() {
  const olEl = document.createElement("ol");
  students.forEach((studObj) => {
    const liEl = document.createElement("li");
    liEl.innerHTML = `${studObj.name} age is ${studObj.age} <button>X</button>`;
    olEl.append(liEl);
  });
  document.body.append(olEl);
}
generateListAndButton();

// 7b. paspaudus mygtuka trinam ta el
const buttonElArray = document.querySelectorAll("button");

for (let i = 0; i < buttonElArray.length; i++) {
  buttonElArray[i].addEventListener("click", (event) => {
    const clickedEl = event.target;
    clickedEl.parentElement.remove();
  });
}

/* sort ================================================================================== */
/* https://www.w3schools.com/js/js_array_sort.asp */

// string tipo masyvo rikiavimas sort()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits ===", fruits);
// masyvu rikiavimas
// veikia gerai tik ant string tipo duomenu
fruits.sort();
console.log("fruits sort ===", fruits);
fruits.reverse();
console.log("fruits reverse ===", fruits);

// numbers tipo masyvo rikiavimas
const numbersArr = [5, 1, 2, 3, 4, 10, 50, 112];
console.log("numbersArr ===", numbersArr);

// a-z sort
numbersArr.sort((a, b) => a - b);
// z-a sort
numbersArr.sort((a, b) => b - a);

console.log("numbersArr ===", numbersArr);

/* sort students array ------------ */
// issrikiuoti pagal amziu students
students.sort((stdObjA, stdObjB) => stdObjA.age - stdObjB.age);
console.log("students sorted by age ===", students);

// issrikiuoti pagal varda A-Z
students.sort((stdObjA, stdObjB) => {
  if (stdObjA.name > stdObjB.name) {
    return 1;
  } else {
    return -1;
  }
});
console.log("students sorted by name ===", students);

// issrikiuoti pagal gender with ternary, shorter A-Z
students.sort((stdObjA, stdObjB) => (stdObjA.gender > stdObjB.gender ? 1 : -1));
console.log("students sorted by gender ===", students);

/* Example from w3 https://www.w3schools.com/js/js_array_sort.asp */
// Comparing string:
const cars = [
  { brand: "Volvo", year: 2016 },
  { brand: "Saab", year: 2001 },
  { brand: "BMW", year: 2010 },
];
cars.sort(function (a, b) {
  let x = a.brand.toLowerCase();
  let y = b.brand.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log("cars sorted ===", cars); // BMW 2010 , Saab 2001, Volvo 2016
