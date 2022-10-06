/* Regular Expression Patterns */
/* https://www.w3schools.com/js/js_regexp.asp */
/* https://www.w3schools.com/jsref/jsref_obj_regexp.asp */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
/* https://regex101.com/ */
// /pattern/modifier(s);
// let pattern = /w3schools/ig;
// g	 Perform a global match (find all matches rather than stopping after the first match)
// i	 Perform case-insensitive matching
// m	 Perform multiline matching

//   /[\d{3}]/g;    // 1,0,0 - nzn ar ok
//   /\d{3}/g;      // 100

/* Regular Expression Search Methods
In JavaScript, a regular expression text search, can be done with different methods.
With a pattern as a regular expression, these are the most common methods:
Example	                Description
text.match(pattern)	    The String method match()
text.search(pattern)	The String method search()
pattern.exec(text)	    The RexExp method exec()
pattern.test(text)	    The RegExp method test()  */

// let text = "Th A E";
let text = "The ee Ae E";
console.log(text.match(/e/g)); // (4) ['e', 'e', 'e', 'e']  ||  null
console.log(text.search(/e/g)); // 2  ||  -1
console.log(/e/g.exec(text)); // ['e', index: 2, input: 'The ee Ae E', groups: undefined]  ||  null
console.log(/e/g.test(text)); // true  ||  false

// The match() method matches a string against a regular expression ** If the search value is a string, it is converted to a regular expression.
// The match() method returns an array with the matches, otherwise it returns null.
text.match(/e/g); // an array with the matches. null if no match

// The search() method matches a string against a regular expression **
// The search() method returns the index (position) of the first match.
// The search() method returns -1 if no match is found.
// The search() method is case sensitive.
text.search(/e/g); // The position of the first match. -1 if no match.

// The exec() method tests for a match in a string.
// If it finds a match, it returns a result array, otherwise it returns null.
/e/g.exec(text); // search a string for 'e', returns ['e', index: 2, input: 'The ee Ae E', groups: undefined]

// The test() method tests for a match in a string.
// If it finds a match, it returns true, otherwise it returns false.
/e/g.test(text); // search a string for 'e', returns true

match(); // Searches a string for a value,or a regular expression, and returns the matches
search(); // Searches a string for a value,or regular expression,and returns the index of the match

repeat(); // Returns a new string with a number of copies of a string
replace(); // Searches a string for a value,or a regular expression,and returns a string where the values are replaced
