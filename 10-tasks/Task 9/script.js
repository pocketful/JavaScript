/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 100000000;
  }
}

const movie1 = new Movie("Harry Potter", "Someone", 100000001);
const movie2 = new Movie("Harry Potter II", "Someone", 100000);

console.log("movie1 ===", movie1);
console.log("movie2 ===", movie2);
console.log("movie1 exp ===", movie1.wasExpensive());
console.log("movie2 exp ===", movie2.wasExpensive());
