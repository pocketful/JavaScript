// globali erdve arba global scope -- kas yra deklaruota ne kitos strukturos viduje
const resultEl = document.getElementById("result");
const btn1El = document.getElementById("btn1");

let globVar1 = 10;
function globalFunction() {
  // lokali globalFunction erdve. joje galioja viskas kol vykdoma funkcija
  let localKint1 = 50;
  // funkcijos viduje matom ir galim dirbti su globaliais kintamaisiais
  console.log(globVar1);
  globVar1++;
}
globalFunction();
// globVar1 bus pasikeites jeigu globalu kintamaji keitem funkcijos viduje
console.log("globVar1 ===", globVar1);

/* --------------------------------------------------------- */
let counter = 0;
btn1El.addEventListener("click", function () {
  counter++;
  resultEl.textContent = `Paspaudei ${counter} kartu mygtuka`;
});
