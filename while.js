/* while loop 0-9 */
let w = 0;
while (w < 10) {
    console.log("while loop", w);
    w++;
}


/* do while 0-9 */
i = 0;
do {
    console.log('do while loop', i);
    i++;
}
while (i < 10);


/* do while. ridenti kauliukius kol ismesim 12 */
let points;
do {
    points = Math.floor(Math.random() * 11) + 2; // returns a random integer between 2 and 11 (both included)
    console.log(`isridenau ${points}`);
} while (points !== 12);


/* mine. text. The number is 0, The number is 1, ... */
let text = '';
let sk = 0;
while (sk < 5) {
  text = 'The number is - ' + sk;
  console.log(text);
  sk++;  
}


/* text to HTML. The number is 0, The number is 1, ... */
// https://www.w3schools.com/js/js_loop_while.asp
// <p id="whileText"></p>

let textt = "";
let skk = 0;
while (skk < 5) {
  textt += "<br>The number is " + skk;
  skk++;
}
document.getElementById("whileText").innerHTML = textt;
