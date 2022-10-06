"use strict";

// parasyti funkcija checkErrors() app.js, ima klaidu masyva(errors1)
// grazinti true jei nors viena objeto reiksme yra ne tuscia
// kitu atveju false

export function checkErrors(errorObj) {
  for (let key in errorObj) {
    if (errorObj[key].length > 0) {
      return true;
    }
  }
  return false;
}

export function checkErrorsSome(errorObj) {
  return Object.values(errorObj).some((value) => value.length > 0);
}

// includes
export function checkErrorsIncludes(errorObj) {
  if (Object.values(errorObj).includes("")) {
    return true;
  }
  return false;
}

/* --------------------------------------------------------------------------------------- */

// helper.js parasyti funkcija isInputOk() kuri priima stringa ir tikrina
// jei stringas tuscias grazina "can't be blank"
// jei stringas trumpesnis nei 3 simboliai grazina "must be longer than 3"
// jei stringas ilgesnis nei 5 simboliai grazina "can't be longer than 5"

export function isInputOk(string) {
  let result = "";
  if (string.length === 0) {
    result = "can't be blank";
    return result;
  }
  if (string.length < 4) {
    result = "must be longer than 3";
    return result;
  }
  if (string.length > 6) {
    result = "can't be longer than 6";
    return result;
  }
}
