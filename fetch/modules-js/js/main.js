'use strict';

// https://javascript.info/modules
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

// import { countAvg, countAvgThree } from './modules/avg.js';
// const result2 = countAvg(10, 15);
// const result3 = countAvgThree(10, 15, 20);

import * as avg from './modules/avg.js';
const result2 = avg.countAvg(10, 15);
const result3 = avg.countAvgThree(10, 15, 20);

import { makeDoubleAndPlus } from './modules/double.js';
const result1 = makeDoubleAndPlus(10);

// import render from './modules/render.js'; // with default. default can be only one
import render, { colors } from './modules/render.js';
// import renderNewName from './modules/render.js'; // renaming fn is allowed
import render, { colors as colorsNewName } from './modules/render.js'; // rename fn
const h2El = document.getElementById('app');
render(result1, h2El);
// render(result2, h2El);
// render(result3, h2El);
// renderNewName(result1, h2El);
console.log('colors ===', colors);

import { p } from './modules/data.js';
const pEl = p;
document.getElementById('app2').innerHTML = pEl;
