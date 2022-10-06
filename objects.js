"use strict";

const array = ["James", 33, "male"];
array[0]; // name

const user = {
  name: "James",
  age: 33,
  gender: "male",
  sayHi: function () {
    // method
    console.log("hi");
  },
};
user.sayHi();

console.log("user object === ", user);

// pasiimti reiksme name
console.log("user object === ", user.name); // better
console.log("user object === ", user["name"]); // good for variables
// variable padavimas i keyTake
const keyTake = "gender";
console.log("user object === ", user[keyTake]);

// new property
user.hasCar = true;
console.log("user object === ", user);

// print a driver if hasCar
if (user.hasCar === true) {
  console.log(`user ${user.name} has a car and he is a driver`);
}

// array of objects
const users = [
  {
    name: "Mike",
    town: "Vilnius",
  },
  {
    name: "Jane",
    town: "Vilnius",
  },
  {
    name: "Emma",
    town: "Vilnius",
  },
  {
    name: "Olivia",
    town: "Vilnius",
  },
];

// gauti James
console.log(users[2].name);

// visi vardai
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}
// users.forEach()

/* =========================================== Objects more ========================================== */

const user1 = {
  name: "James",
  age: 25,
  // when inside object then it's a method, not a function
  greeting: function () {
    const greet = `My name is ${this.name} and I am ${this.age} years old`; // user.name user/age irgi veikia
    console.log(greet);
  },
  rename: function (newName) {
    this.name = newName;
    console.log(this);
  },
};

const user2 = {
  name: "Mike",
  age: 30,
  greeting: function () {
    const greet = `My name is ${this.name} and I am ${this.age} years old`; // user.name user/age irgi veikia
    console.log(greet);
  },
};
user1.greeting();
user2.greeting();
user1.rename("Bob");

// const userName = user1.name;
// console.log('userName ===', userName);

/* Task 1 --------------------------------------------------------------------------------------- */

const stud1 = {
  name: "Emma",
  marks: [6, 7, 8, 9, 10],
  myAverage: function () {
    length = this.marks.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += this.marks[i];
    }
    const average = sum / length;
    console.log("average1 ===", average);
    return average;
  },
};
stud1.myAverage();
// stud1.marks[2];

const stud2 = {
  name: "Harry",
  marks: [4, 7, 3, 9, 6],
  myAverage: function () {
    //  myAverage: () => {
    length = this.marks.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += this.marks[i];
    }
    const average = sum / length;
    console.log("average2 ===", average);
    return average;
  },
};
stud2.myAverage();
const studentsAverages = [];

// su arrow function objekte this eina kiaurai, error

// students array
const students = [stud1, stud2];
for (let i = 0; i < students.length; i++) {
  const currentStudentAverage = students[i].myAverage();
  studentsAverages.push(currentStudentAverage);
}
console.log("studentsAverages ===", studentsAverages);
