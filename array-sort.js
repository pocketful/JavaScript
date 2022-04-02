// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_with_map
// https://github.com/Pimm/mapsort
// The more work a compareFunction does and the more elements there are to sort, it may be more efficient to use map() for sorting.

// INSTEAD OF:
const data1 = ['12.4hh', '1.62tt', '3.35hh'];

data1.sort((a, b) => {
  console.log('a ===', a); // "3.35hh"
  console.log('b ===', b); // "1.62tt"
  console.log('a - b ===', a - b); // NaN // return ['12.4hh', '1.62tt', '3.35hh']
  console.log('parseFloat(a) ===', parseFloat(a)); // 1.62
  console.log('parseFloat(b) ===', parseFloat(b)); // 12.4
  console.log('parseFloat(a) - parseFloat(b) ===', parseFloat(a) - parseFloat(b)); // -10.780000000000001
  return parseFloat(a) - parseFloat(b);
});
console.log('data ===', data1); // ['1.62tt', '3.35hh', '12.4hh']

// SORT WITH MAP
// the array to be sorted
const data = ['12.4hh', '1.62tt', '3.35hh'];
console.log('data ===', data);

// temporary array holds objects with position and sort-value
const mapped = data.map((item, i) => {
  console.log('i, value: parseFloat(item) ===', i, parseFloat(item)); // 0 12.4 // 1 1.62 // 2 3.35
  return { i, value: parseFloat(item) };
});
console.log('mapped ===', mapped); // { 0, value: 12.4 } {i: 1, value: 1.62} {i: 2, value: 3.35}

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  console.log('a.value ===', a.value); // 1.62
  console.log('b.value ===', b.value); // 12.4
  if (a.value > b.value) {
    return 1;
  } else if (a.value < b.value) {
    return -1;
  } else {
    return 0;
  }
});
console.log('mapped sort ===', mapped); // {i: 1, value: 1.62} {i: 2, value: 3.35} {i: 0, value: 12.4}
console.log('data ===', data); // ['12.4hh', '1.62tt', '3.35hh']

const result = mapped.map((obj) => {
  console.log('obj ===', obj); // {i: 1, value: 1.62} // {i: 2, value: 3.35} // {i: 0, value: 12.4}
  console.log('[obj.i] ===', [obj.i]); // [1] // [2] // [0]
  // data[1], data[2], data[0]
  console.log('data[obj.i] ===', data[obj.i]); // 1.62tt // 3.35hh // 12.4hh
  return data[obj.i];
});
console.log('result ===', result); // ['1.62tt', '3.35hh', '12.4hh']

/* Sort stability ----------------------------------------------------------------------------------------------------- */

const students = [
  { name: 'Alex', grade: 15 },
  { name: 'Devlin', grade: 15 },
  { name: 'Eagle', grade: 13 },
  { name: 'Sam', grade: 14 },
];

students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
console.log(students);

// The students variable will then have the following value:
[
  { name: 'Eagle', grade: 13 },
  { name: 'Sam', grade: 14 },
  { name: 'Alex', grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: 'Devlin', grade: 15 }, // original maintained for similar grade (stable sorting)
];
// It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.

// Before version 10 (or EcmaScript 2019), sort stability was not guaranteed, meaning that you could end up with the following:
[
  { name: 'Eagle', grade: 13 },
  { name: 'Sam', grade: 14 },
  { name: 'Devlin', grade: 15 }, // original order not maintained
  { name: 'Alex', grade: 15 }, // original order not maintained
];

/* edabit =================================================================================================================== */

/* You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted: */
drinks = [
  { name: 'lemonade', price: 50 },
  { name: 'cola', price: 40 },
  { name: 'fanta', price: 70 },
  { name: 'lime', price: 10 },
];

function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => a.price - b.price);
}
console.log(sortDrinkByPrice(drinks));

/* ------------------------------------------------------------------ */
/*
In this challenge you will be given an array similar to the following: 
[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

Examples:
sortIt([4, 1, 3]) ➞ [1, 3, 4]
sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]
sortIt([4, [1], 3]) ➞ [[1], 3, 4]
sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]
sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
* Notes: To reiterate, elements of the array will be either integers or arrays with a single integer.
*/

const arr = [[3], 4, [2], [5], 1, 6];
console.log(arr);
function sortIt(arr) {
  return arr.sort((a, b) => a - b);
  // return arr.sort();
}

const sortIt = (arr) => arr.sort((a, b) => a - b);

const sortIt = (arr) => arr.sort((a, b) => (a[0] || a) - (b[0] || b));

function sortIt(arr) {
  return arr.sort((a, b) => {
    console.log('a ===', a); // 4
    console.log('b ===', b); // [3]
    console.log('a[0] ===', a[0]); // undefined
    console.log('b[0] ===', b[0]); // 3
    console.log('a - b ===', a - b); // 1
    console.log('a - b[0] ===', a - b[0]); // 1
    console.log('a[0] - b[0] ===', a[0] - b[0]); // NaN
    // if (a > b) {
    //     return 1;
    // } else {
    //     return -1;
    // }
    return a - b;
  });
}
console.log(sortIt(arr)); // [1, [2], [3], 4, [5], 6]
