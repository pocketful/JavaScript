// https://javascript.info/modules
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

import { multiplication } from "./modules/multi.js";
import { renderHeader } from "./modules/header.js";
import { renderArray } from "./modules/array.js";

const result = multiplication(10, 5);
console.log(result);

renderHeader(document.body);
renderArray(document.body);
