export default class PersonEs6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`ES6: Hello I am ${this.name} and I Am ${this.age} years old`);
  }
}
