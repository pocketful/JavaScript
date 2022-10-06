"use strict";

class Project {
  static proCount = 0;
  #id;
  #done;
  #title;
  #price;
  constructor(newTitle, newPrice) {
    this.#title = newTitle;
    this.#price = newPrice;
    this.#done = false;
    this.#id = `proj_${++Project.proCount}`;
  }
  finishProject() {
    this.#done = true;
  }
  get done() {
    return this.#done;
  }
  get price() {
    return this.#price;
  }
}

// id, done (lygu false), title, price
