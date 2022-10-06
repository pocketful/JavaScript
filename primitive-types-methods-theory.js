/* String methods */
/* https://www.w3schools.com/jsref/jsref_obj_string.asp */

charAt();        // Returns the character at a specified index (position)
charCodeAt();    // Returns the Unicode of the character at a specified index
concat();        // Returns two or more joined strings
endsWith();      // Returns if a string ends with a specified value
fromCharCode();  // Returns Unicode values as characters
includes();      // Returns if a string contains a specified value
indexOf();       // Returns the index (position) of the first occurrence of a value in a string
lastIndexOf();   // Returns the index (position) of the last occurrence of a value in a string
localeCompare(); // Compares two strings in the current locale
match();         // Searches a string for a value, or a regular expression, and returns the matches
repeat();        // Returns a new string with a number of copies of a string
replace();       // Searches a string for a value,or a regular expression,and returns a string where the values are replaced
search();        // Searches a string for a value,or regular expression,and returns the index (position) of the match
slice();         // Extracts a part of a string and returns a new string
split();         // Splits a string into an array of substrings // text.split(', ')>> words; || text.split('') >> separate letters; || text.split()>>one array item;
startsWith();    // Checks whether a string begins with specified characters
substr();        // Extracts a number of characters from a string, from a start index (position)
substring();     // Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase(); // Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase(); // Returns a string converted to uppercase letters, using the host's locale
toLowerCase();   // Returns a string converted to lowercase letters
toString();      // Returns a string or a string object as a string
toUpperCase();   // Returns a string converted to uppercase letters
trim();          // Returns a string with removed whitespaces
valueOf();       // Returns the primitive value of a string or a string object

/* ---------------------------------------------------------------------------------- */
/* Number methods */
/* https://www.w3schools.com/jsref/jsref_obj_number.asp */

isFinite();        // Checks whether a value is a finite number
isInteger();       // Checks whether a value is an integer
isNaN();           // Checks whether a value is Number.NaN
isSafeInteger();   // Checks whether a value is a safe integer
toExponential(x);  // Converts a number into an exponential notation
toFixed(x);        // Formats a number with x numbers of digits after the decimal point
toLocaleString();  // Converts a number into a string, based on the locale settings
toPrecision(x);    // Formats a number to x length
toString();        // Converts a number to a string
valueOf();         // Returns the primitive value of a number
