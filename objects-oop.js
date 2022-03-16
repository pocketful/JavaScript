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
class Car {
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

const car1 = new Car('Pontiac ', 'Firebird', 'Petrol', 10000);
const car2 = new Car('Chevrolet ', 'Lacetti', 'Diesel', 10000);
const car3 = new Car('Mini', 'Rover', 'Electric', 10000);

console.log('car1', car1);
console.log('car2', car2);
console.log('car3', car3);
console.log('getPrice === car1: ' + car1.getPrice() + '$; car2: ' + car2.getPrice() + '$; car3: ' + car3.getPrice() + '$');

/* ----------------------------------------------------------------------------------------------------- */
/* 1. Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais). */


/* 2. Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą. */


/* 3. Prisimename darbą su masyvais: sukurkite funkciją, kuri priims masyvą ir išfiltruos visus pasikartojančius skaičius bei šį masyvą grąžins atgal.
Pvz:
paduodu: [1, 3, 3, 5, 5, 5]
grąžina: [1, 3, 5] */

function withoutRepeatingNumbers(array) {
  console.log('array ===', array);
  
  const newArray = array.sort((a, b) => a - b)
  .filter((sk, i) => sk !== array[i + 1]);

  console.log('array withoutRepeatingNumbers ===', newArray);
}
withoutRepeatingNumbers([1, 3, 3, 5, 5, 5]);
withoutRepeatingNumbers([1, 6, 5, 6, 3, 5, 3]);