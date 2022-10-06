"use strict";

// sukurti funkcija kuri ima 2 argumenus. pirmas argumentas yra reiksme, antras argumentas yra el html elementas kur ta reiksme atspaudinti html

export default function render(result, output) {
  output.textContent = result;
}

export const colors = ["red", "green", "blue"];
