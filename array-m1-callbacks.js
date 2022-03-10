'use strict';

/* callbacks ------------------------------------------------------------------------ */

    // Old way
    function multiplyOld(sk1, sk2) {
        const result = sk1 * sk2;
        return result;
    }

    displayValue(multiplyOld(5, 6)); // 1 way

    let result = multiplyOld(5, 6); // 2 way:
    displayValue(result);
    outHtmlValue(result);


// Callbacks
function multiply(sk1, sk2, callback) {
    const result = sk1 * sk2;
    callback(result);
}

function displayValue(val) {
    console.log(`The value is ${val}`);
}

function outHtmlValue(val) {
    const pEl = document.createElement('p');
    pEl.textContent = `The value is <${val}>`
    document.body.append(pEl);
}

multiply(5, 6, displayValue);
multiply(5, 6, outHtmlValue);

// if function inside
multiply(5, 6, (val) => {
    console.log(`The value again is ${val}`);
});

/* ------------------------------------------------------------------------------- */
// Asynchronous functions
// console.log('log1');
// console.log('log2');
// console.log('log3');

console.log('log1');
// setTimeout(fn kuri vyks, po kiek milisekundziu)
setTimeout(kviesk, 2000);
function kviesk() {
  console.log('log2');
}

document.body.addEventListener('click', () => {});

console.log('log3');

/* Array methods ============================================================================== */
/* https://www.w3schools.com/jsref/jsref_obj_array.asp */ 
/* map returns new array */
/* foreach returns nothing. jei reikia atlikti su kiekviena reiksme ir nesigrazina */
/* find grazins objekta pirma */
/* filter grazins array visa */

/* foreach ------------------------------------------------------------------------- */
const numbersArray = [5, 1, 2, 3];

// funkcija, kuri ima masyvą ir grąžina visų elementų vidurkį
function average(array) {
    let sum = 0;
    const length = array.length;
    for (let i = 0; i < length; i++) {
        sum += array[i];
    }
    const average = sum / length;
    return average;
}
const avg1 = average(numbersArray);
console.log('average === ', avg1);


// 1 way arrow function
let sum = 0;
numbersArray.forEach((number) => {
    console.log('number === ', number);
    sum += number;
});
const avg2 = sum / numbersArray.length;
console.log('average2 === ', avg2);

// 2 way atskira funkcija
let sum2 = 0;
numbersArray.forEach(getTotal);

function getTotal(number) {
    console.log('number === ', number);
    sum2 += number;
}
const avg3 = sum / numbersArray.length;
console.log('average3 === ', avg3);


/* array.forEach(function(currentValue, index, arr), thisValue) */
numbersArray.forEach((sk, i, arr) => {
    console.log(`${i} el, kurio reiksme yra ${sk}`);
    console.log('array === ', arr);
});


/* padvigubinti array reiksmes */
numbersArray.forEach((sk, i, arr) => {
    arr[i] = sk * 2;
    console.log('array === ', arr);
});
console.log('array padvigubintas ===', numbersArray);


/* Tasks with skArray -------------------------------------------------------------------------------- */
const skArray = [0, 10, 15, -2, 30, -15, 10, -50];


// 1. consoleje atspaustinti kiekviena reiksme
skArray.forEach((sk) => {
    console.log('sk === ', sk);
});


// 2. atspaustinti visu skaiciu suma
let sum1 = 0;
skArray.forEach((sk) => {
    sum1 += sk;
});
console.log('sum === ', sum1);


// 3. atspausdinti tik teigiamus skaicius
skArray.forEach((sk) => {
    if (sk > 0) {
        console.log('teigiamas sk === ', sk);
    }
});


// 4. grazinti nauja masyva su neigiamais skaiciais
const negativeSkArray = [];
skArray.forEach((sk) => {
    if (sk < 0) {
        negativeSkArray.push(sk);
    }
});
console.log('new negative numbers array === ', negativeSkArray);

/* filter ------------------------------- */

// jei su filter ta pati, nereik naujo masyvo kurti
// filter grazina tinkancias reiksmes

const negativeSkArrayWithFilter = skArray.filter(sk => sk < 0);  // ((sk) => sk < 0);    => === return
console.log('negative numbers array with filter === ', negativeSkArrayWithFilter);

/* 2 way, longer */
//     const negativeSkArrayWithFilter = skArray.filter((sk) => {
//         return sk < 0;
//     });
//     console.log('new negative numbers array with filter === ', negativeSkArrayWithFilter);

/* 3 way, longer  */
//     const negativeSkArrayWithFilter = skArray.filter((sk) => {
//         if (sk < 0) {
//             return true;
//         }
//     });
//     console.log('new negative numbers array with filter === ', negativeSkArrayWithFilter);

/* 4 way, longer  */
//     console.log('array before changing with filter ===', skArray);

// const moreThanTenArray = skArray.filter(ifMoreThanTen);
// console.log('moreThanTenArray filter ===', moreThanTenArray);

// function ifMoreThanTen(num) {
//     return num > 10;
// }

// 5. grazinti nauja masyva kur visos neigiamos reiksmes paverstos teigiamom
const positiveSkArray = [];
skArray.forEach((sk) => {
    positiveSkArray.push(Math.abs(sk));
    // if (sk < 0) {
    //      positiveSkArray.push(Math.abs(sk));
    // }
});
console.log('new forced positive numbers array === ', positiveSkArray);


// 6. grazinti koks yra -15 skaiciaus indexas
/* 1 way with foreach */
skArray.forEach((sk, i) => {
    if (sk === -15) {
        console.log('-15 index === ', [i]);
    }
});


/* find ------------------------------- */
// 6a. 2 way with find better. ieskom vienos reiksmes atitinkancios(ne index). 1 randa, grazina, nebevykdo
const skArrayBigger = [0, 10, 15, -2, 30, -15, 10, -50, { title: 'blue' }, { title: 'green' }];
const foundBlue = skArrayBigger.find((sk) => sk.title === 'blue');
console.log('find blue === ', foundBlue);


// 7. pakeisti -2 i -25 tame paciame masyve
console.log('array before changing ===', skArray);
skArray.forEach((sk, i) => {
    if (sk === -2) {
        skArray[i] = -25;
    }
});
console.log('array item -2 changed to -25 ===', skArray);


/* map ------------------------------- */
// 8. grazinti nauja masyva kuriame yra padvigubintos reiksmes su .map
// const skArray = [0, 10, 15, -2, 30, -15, 10, -50];
console.log('array before changing with map ===', skArray);

    // 2 way, longer
    // const newMultiplyArray = skArray.map(multiplyNum);
    // console.log('newMultiplyArray map ===', newMultiplyArray);

    // function multiplyNum(sk) {
    //     return sk * 2;
    // }

const newMultiplyArray = skArray.map(sk => sk * 2);
console.log('newMultiplyArray map, arrow ===', newMultiplyArray);


/* filter ------------------------------- */
// 9. grazinti nauja masyva kuriame yra skaiciai didesni uz 10 su .filter
console.log('array before changing with filter ===', skArray);

const moreThanTenArray = skArray.filter(ifMoreThanTen);
console.log('moreThanTenArray filter ===', moreThanTenArray);

function ifMoreThanTen(num) {
    return num > 10;
}


/* map ------------------------------- */
// 10. sukurti new array ir ideti i ji ul su map, vietoj create element

    /* 1 way, longer */
    // const ulEl = document.getElementById('ul');
    // // gaunam masyva su li el tekstu
    // const liArray = skArray.map(sk => {
    //     return `<li> skaicius ${sk} </li>`;
    // });
    // console.log('liArray ===', liArray);
    // // join new array elements into a string
    // const liStringFromArray = liArray.join('');
    // ulEl.innerHTML = liStringFromArray;


/* 2 way shorter */
const ulEl = document.getElementById('ul');
// gaunam masyva su li el tekstu
// const liArray = skArray.map(sk => `<li> skaicius ${sk} </li>`);
const liStringFromArray = skArray.map(sk => `<li> skaicius ${sk} </li>`).join('');
console.log('liStringFromArray shorter ===', liStringFromArray);
// join new array elements into a string
// const liStringFromArray = liArray.join('');
ulEl.innerHTML = liStringFromArray;


/* filter ----------- */
// example with filter
const liStringChain = skArray
.filter(sk => sk > 10)
.map(sk => `<li> skaicius ${sk} </li>`)
.join('');
console.log('liStringChain ===', liStringChain);


/* reduce =========================================================================== */

// extra sunkesnis
// e1. is skArray su reduce grazinti vidurki
// const skArray = [0, 10, 15, -2, 30, -15, 10, -50];
// reduce() - 



// e2. is skArray su reduce grazinti objekta
{
    vidurkis: '';
}
// e2. is skArray su reduce grazinti objekta
{
    vidurkis: '';
    totalSuma: '';
}
// e2. is skArray su reduce grazinti objekta
// {
//   teigiami: [...]
//   neigiami: [...]
// }

const arr2 = [
    [0, 15, 25],
    [15, -5, 30],
    [-15, 7, 12],
];
  // e2. is arr2 su reduce grazinti nauja masyva kuriame yra tik vienas masyvo lygis. is visu vidiniu masyvu istraukiam reiksmes ir sukeliam i viena masyva