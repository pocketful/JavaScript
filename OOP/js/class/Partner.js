"use strict";

class Partner extends Person {
  #projects = [];
  constructor(name, surname, age) {
    super(name, surname, age);
  }
  addProject(project) {
    if (!(project instanceof Project)) return console.log("bad object");
    this.#projects.push(project);
    // 2 way, longer:
    if (project instanceof Project) {
        this.#projects.push(project);
    }
    else {
        console.log('bad object');
    }
  }
  workDone(project) {
    if (!(project instanceof Project)) return console.log("bad object");
    project.finishProject();
  }
  calcPay() {
    // const doneProjects = this.#projects.map((project) => project); //
    const doneProjects = this.#projects.filter(
      (project) => project.done === true
    );
    console.log("doneProjects ===", doneProjects);
    const totalPay = doneProjects.reduce(
      (total, prObj) => total + prObj.price,
      0
    );
    console.log("totalPay ===", totalPay);
  }
}
