/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function wasExpensive() {
  if (budget > 100000000) {
    return true;
  } else {
    return false;
  }
}
class Movie {
  constructor(title, director, budget, myFunc) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.myFunc = myFunc;
  }
}

const x = new Movie("zultas", "ulduzas", 120000000000, wasExpensive);

console.log(x);
