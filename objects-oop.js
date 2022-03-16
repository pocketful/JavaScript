'use strict';

const users = [
  {
    name: 'James',
    age: 25,
    info: function () {
      console.log(this.name + ' ' + this.age);
    },
    changeName: function (newName) {
      this.name = newName;
    },
  },
  {
    name: 'Bob',
    age: 30,
    info: function () {
      console.log(this.name + ' ' + this.age);
    },
    changeName: function (newName) {
      this.name = newName;
    },
  },
];
users[0].info();
users[0].changeName('Mr James');
console.table(users);

function infoOutside(name, age) {
  console.log(name + ' ' + age);
}
// infoOutside(users[0].name, users[0].age);
function User2(argName, argAge) {
  this.name = argName;
  this.age = argAge;
}
class User {
  constructor(argName, argAge) {
    console.log('user created');
    // pradines reiksmes
    this.name = argName;
    this.age = argAge;
  }
  // metodai
  info() {
    console.log(this.name + ' ' + this.age);
  }
  changeName(newName) {
    this.name = newName;
  }
}

const us1 = new User('Bob', 25);
const us2 = new User('James', 33);
us2.changeName('Mr James');
us2.info();

console.log(' us1 ===', us1, us2);


/* CAO OOP ========================================================================================== */
/* https://www.w3schools.com/js/js_classes.asp --- new way */
/* https://www.w3schools.com/js/js_object_constructors.asp --- old way*/
/* 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia. */
/* 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPrice priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice. */

// old way, object constructor ----------------------------------
function CarOld(brand, model, engine, basePrice) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = basePrice;
  this.getPrice = function () {
    let newPrice;
    if (this.engine === 'Electric') {
      newPrice = this.basePrice + 10000;
    } else if (this.engine === 'Diesel') {
      newPrice = this.basePrice + 5000;
    } else {
      newPrice = this.basePrice;
    }
    return newPrice;
  };
  this.turnOn = function () {
    console.log('vroom');
  };
}

// cao
this.getPrice = function () {
  let additionalPrice = 0;
  if (this.engine === 'Electric') {
    additionalPrice = 10000;
  } else if (this.engine === 'Diesel') {
    additionalPrice = 5000;
  }
  return this.basePrice + additionalPrice;
};


// new way, classes ---------------------------
class CarNew {
  constructor(brand, model, engine, basePrice) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = basePrice;
  }
  getPrice() {
    let newPrice;
    if (this.engine === 'Electric') {
      newPrice = this.basePrice + 10000;
    } else if (this.engine === 'Diesel') {
      newPrice = this.basePrice + 5000;
    } else {
      newPrice = this.basePrice;
    }
    return newPrice;
  };
  turnOn() {
    console.log('vroom');
  };
}

const car1 = new CarNew('Pontiac ', 'Firebird', 'Petrol', 10000);
const car2 = new CarNew('Chevrolet ', 'Lacetti', 'Diesel', 10000);
const car3 = new CarNew('Mini', 'Rover', 'Electric', 10000);

console.log('car1', car1);
console.log('car2', car2);
console.log('car3', car3);
console.log('getPrice === car1: ' + car1.getPrice() + '$; car2: ' + car2.getPrice() + '$; car3: ' + car3.getPrice() + '$');

/* ----------------------------------------------------------------------------------------------------- */
/* 1. Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais). */

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  toTable() {
    const tbody = document.querySelector('tbody')
    const trEl = document.createElement('tr');
    tbody.append(trEl);
    const tdEl1 = document.createElement('td');
    tdEl1.textContent = this.name;
    trEl.append(tdEl1);
    const tdEl2 = document.createElement('td');
    tdEl2.textContent = this.surname;
    trEl.append(tdEl2);
  }
}

// array
const personsArray = [];

const formEl = document.forms.fullnameForm;
formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  // value from input
  const fullnameValueArray = formEl.elements.fullname.value.trim().toLowerCase().split(' ');
  const nameValue = fullnameValueArray[0].charAt(0).toUpperCase() + fullnameValueArray[0].slice(1);
  const surnameValue = fullnameValueArray[1].charAt(0).toUpperCase() + fullnameValueArray[1].slice(1);

  // new object
  const newPerson = new Person(nameValue, surnameValue);
  newPerson.toTable();
  console.log(newPerson);

  // new object to array
  personsArray.push(newPerson);
  console.log(personsArray);
});



// formEl
// const formEl = document.forms.fullnameForm;
// formEl.addEventListener('submit', (event) => {
//     event.preventDefault();

//     // value from input
//     const fullnameValueArray = formEl.elements.fullname.value.trim().toLowerCase().split(' ');  
//     const nameValue = fullnameValueArray[0].charAt(0).toUpperCase() + fullnameValueArray[0].slice(1);
//     const surnameValue = fullnameValueArray[1].charAt(0).toUpperCase() + fullnameValueArray[1].slice(1);   
//     console.log('fullnameValueArray ===', fullnameValueArray);
//     console.log('nameValue ===', nameValue);
//     console.log('surnameValue ===', surnameValue);

//     // create table row
//     const tbody = document.querySelector('tbody')
//     const trEl = document.createElement('tr');
//     tbody.append(trEl);
//     const tdEl1 = document.createElement('td');
//     tdEl1.textContent = nameValue;
//     trEl.append(tdEl1);
//     const tdEl2 = document.createElement('td');
//     tdEl2.textContent = surnameValue;
//     trEl.append(tdEl2);
// });


/* ------------------------------------------------------------------------------------------- */
/* 2. Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriamas objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą. */

class Car {
  constructor(carbrand, model, mileage, price, image) {
    this.carbrand = carbrand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
  }
  toHtml() {
  }
}

// array
const carsArray = [];

const carFormEl = document.forms.carForm;
carFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  // value from input
  const carbrandValue = carFormEl.elements.carbrand.value;
  const modelValue = carFormEl.elements.model.value;
  const mileageValue = carFormEl.elements.mileage.value;
  const priceValue = carFormEl.elements.price.value;
  const imageValue = carFormEl.elements.image.value;

  // new object
  const newCar = new Car(carbrandValue, modelValue, mileageValue, priceValue, imageValue);
  // newCar.toHtml();
  console.log(newCar);

  // --------- gallery ---------------
  const containerEl = document.querySelector('.container');
  // car card
  const carCardEl = document.createElement('figure');
  carCardEl.className = 'user-card';
  // car card image
  const imgEl = document.createElement('img');
  imgEl.src = imageValue;
  imgEl.alt = 'a car';
  imgEl.className = 'card-img';
  carCardEl.append(imgEl);
  // car card text
  const figcaptionEl = document.createElement('figcaption');
  figcaptionEl.textContent = carbrandValue + ' ' + modelValue;
  figcaptionEl.className = 'card-figcaption';
  carCardEl.append(figcaptionEl);
  // append card to container
  containerEl.append(carCardEl);

  // new object to array
  carsArray.push(newCar);
  console.log(carsArray);
});


/* ------------------------------------------------------------------------------------------- */
/* 3. Prisimename darbą su masyvais: sukurkite funkciją, kuri priims masyvą ir išfiltruos visus pasikartojančius skaičius bei šį masyvą grąžins atgal.
Pvz:
paduodu: [1, 3, 3, 5, 5, 5]
grąžina: [1, 3, 5] */

function withoutRepeatingNumbers(array) {
  console.log('1. array with repeating numbers ===', array);

  const newArray = array.sort((a, b) => a - b)
    .filter((sk, i) => sk !== array[i + 1]);

  console.log('2. array without repeating numbers ===', newArray);
}
withoutRepeatingNumbers([1, 3, 3, 5, 5, 5]);
withoutRepeatingNumbers([1, 6, 5, 6, 3, 5, 3]);