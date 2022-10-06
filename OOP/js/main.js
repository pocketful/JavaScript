"use strict";

const partner1 = new Partner("James", "Smith", 33);
const partner2 = new Partner("Jaill", "Smithson", 28);
console.log("partner1 ===", partner1);
console.log("partner2 ===", partner2);

const proj1 = new Project("Header", 100);
const proj2 = new Project("Footer", 50);
console.log("proj1 ===", proj1);
console.log("proj2 ===", proj2);

partner1.addProject(proj1);
partner1.addProject(proj2);
partner1.addProject({ title: "article", price: 10 });
console.log("partner1 ===", partner1);

// pirmas programuotojas baigia pirma darba
partner1.workDone(proj1);
partner1.calcPay();
console.log("partner1 after work done ===", partner1);
