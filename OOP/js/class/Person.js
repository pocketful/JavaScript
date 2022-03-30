'use strict';

class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    greet() {
        const greetString = `Hello my name is ${this.name} and I am ${this.age} years old.`;
        console.log(greetString);
    }
    calcPay() {}
}

const p1 = new Person('James', 'Jameson', 25);
const p2 = new Person('Jill', 'Smith', 22);
console.log('p1 ===', p1);
console.log('p2 ===', p2);
p1.greet();
p2.greet();