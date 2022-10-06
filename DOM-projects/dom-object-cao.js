"use strict";
// console.dir(document);
// document.location

/* 1. Susikuriame objektą "car". Duodame jam tris properties: "doors", "color", "brand". Reikšmes įrašykite patys, tik atminkite - doors bus skaičius, o color ir brand - string'ai. Pasiconsole'inkite ir patikrinkite ar matosi car objektas, ar galite atskirai pasiimti vieną iš jo parametrų (pvz. car.doors). */

const car = {
  doors: 4,
  color: "black",
  brand: "VW",
};
console.log(car);
console.log(car.doors);
console.log(car.color);
console.log(car.brand);

/* 2. Sukuriame formą su dviem input - name ir surname. Pateikus formą, JS turi pasiimti vardą ir pavardę ir sukurti objektą pavadinimu 'person'. Šis objektas turės du parametrus - name ir surname. Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje) - atsispausdink objektą ir pažiūrėk ar viskas gerai veikia. Hint: už funkcijos ribų negali atspausdinti objekto, nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja. */

/* <form id="userForm2" autocomplete="off">
      <input type="text" name="name" id="name" placeholder="Name" value="Iveta" />
      <input type="text" name="surname" id="surname" placeholder="Surname" value="Jac" />
      <button type="submit">Submit</button>
   </form> */

const form2El = document.forms.userForm2;
// const form2El = document.getElementById('userForm2');
console.log(form2El);

form2El.addEventListener("click", (event) => {
  event.preventDefault();
  const nameValue = form2El.name.value;
  const surnameValue = form2El.surname.value;
  console.log(nameValue, surnameValue);

  const person = {
    name: nameValue,
    surname: surnameValue,
  };
  console.log(person); // veiks tik sitoj funkcijoj
});

/* 3. Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių. Pateikus duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge. Name - string, o isLegalAge - boolean. */

/* <form id="userForm3" autocomplete="off">
     <input type="text" name="name" id="name" placeholder="Name" value="Iveta" />
     <input type="number" name="age" id="age" placeholder="Age" value="30" />
     <button type="submit">Submit</button>
   </form> */

const form3El = document.forms.userForm3;
console.log(form3El);

form3El.addEventListener("click", (event) => {
  event.preventDefault();
  const nameValue = form3El.name.value;
  // const nameValue = e.target.elements.name.value; // same
  const ageValue = Number(form3El.age.value);

  let legalValue = true;
  if (ageValue >= 18) {
    legalValue = true;
  } else {
    legalValue = false;
  }

  // vietoj virsutines dalies trumpiau:
  // const legalValue = ageValue >= 18;

  const person = {
    name: nameValue,
    isLegalAge: legalValue,
  };
  console.log(person);
});
