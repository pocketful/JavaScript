// https://www.w3schools.com/js/js_object_constructors.asp

// export default class PersonEs6 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log(`Hello I am ${this.name} and I Am ${this.age} years old`);
//     }
// }

export default function PersonEs5(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log(`ES5: Hello I am ${this.name} and I Am ${this.age} years old`);
    }
}

// const personEs5a = new PersonEs5('Mike', '25');
// console.log('personEs5a', personEs5a);
