'use strict';

class Employee extends Person {
    //private properties
    #payPerHour;
    #hoursWorked = 0;
    constructor(name, surname, age, hourlyPay) {
        super(name, surname, age);
        this.#payPerHour = hourlyPay; // this.payPerHour = hourlyPay; ok
    }

    // geteris, leidizia tam tikru budu atvaizduoti reiksmes
    get hoursWorked() {
        // validacija
        return this.#hoursWorked;
    }
    // seteris nustatyti valandiniui
    set payPerHour([valandinis, pass]) {
        if (pass === 'blue') {
            this.#payPerHour = valandinis;
        } else {
            console.log('wrong pass');
        }
    }

    // metodas work(hours) priima kiek valandu isdirbta ir padina tuo skaiciu #hoursWorked
    work(hours) {
        this.#hoursWorked += hours;
    }
    // calcPay() - aprasyti metododa kuris apskaiciuoja kokia suma sumoketi ir nunulina isdirbtas valandas
    calcPay() {
        const totalPay = this.#hoursWorked * this.#payPerHour;
        this.#hoursWorked = 0;
        return totalPay;
    }

}

const e1 = new Employee('Mike', 'Mikson', 33, 15);
const e2 = new Employee('Mikee', 'Miksonn', 33, 10);
e1.work(160);
e2.work(100);
e2.work(20);
console.log('e1 ===', e1);
console.log('e2 ===', e2);
const e1Sallary = e1.calcPay();
const e2Sallary = e2.calcPay();
// const sallary = [e1, e2].map((employee) => employee.calcPay());
const sallary = [e1, e2].map((employee) => {
    return {
        name: employee.name,
        employeeSallary: employee.calcPay(),
    }
});

console.log('e1 after work ===', e1);
console.log('e2 after work ===', e2);
console.log('e1Sallary ===', e1Sallary);
console.log('e2Sallary ===', e2Sallary);


// console.log('e1 ===', e1);
// e1.greet();

// // e1.hourlyPay = 20; // prideta nauja
// // e1.#hourlyPay = 20; // neleidzia nes private
// console.log('e1 ===', e1);