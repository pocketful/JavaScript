/* 1. Veiksmų eiliškumas
   2. Susikuriame formą HTML. Neužmirštame mygtukui duoti type="submit".
   3. Su JavaScript pasirenkame formą ir jai pritaikome addEventListener su submit event'u.
   4. Pasirašome funkciją, kuri pasileidžia submit eventui įvykus. Funkcija pasiima event kaip parametrą ir sustabdo default veiksmą (šiuo metu - formos duomenų siuntimą ir dėl to puslapio persikrovimą).
   5. Pasitikrinę su console.log(), kad funkcija pasileidžia po submit event - pasiimame input elementus ir jų reikšmias. Vėl pasitikriname ar tikrai teisingai pasiėmėme duomenis.
   6. Laikas įgyvendinti logiką su seniau išmoktais metodais viduj funkcijos, kad atliktume pratimus! */


/* ======================================== Part 1 ====================================== */

/* 1. Sukurk input į kurį įvestum savo vardą. Submit paspaudus - išoktų alert su tavo vardu. */


/* 2. Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 elemente atsirastų "Tavo amžius: [amžius]". */


/* 3. Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių. Jei daugiau nei 18 - išmeta h1 elemente "Vairuoti gali: [vardas]"; jei nėra išmeta: "Dar mokysis vairuotis: [vardas]". */


/* ======================================== Part 2 ====================================== */

/* 1. Apšilome ir išmokome dirbti su formos elementais, laikas pradėti žiūrėti į labiau kompleksinius sprendimus - jie ne tik reikalaus pasiimti duomenis iš formos, bet ir juos pasikoreguoti/paleisti kitas funkcijas, ciklus ir pan. Tad pradedam (nuo lengvesnių iki sudėtingesnių): */


/* 1. Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo . savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist. */


/* 2. Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo. Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę. */


/* ======================================== Part 3 ====================================== */

/* 1. Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
Pvz: [16] => "Jūsų bonusas: 100 eurų". */

/* 1 way - form */

/* <form id="caoForm1">
     <input type="number" placeholder="How many years" name="years" /><br />
     <button type="submit">Submit</button>
   </form>
   <p id="caoResult1">Submit and find out your bonus:</p> */

// nusitaikyt i forma
const caoFormEl1 = document.forms.caoForm1;

// formos paspaudimui eventListener
caoFormEl1.addEventListener('submit', function (event) {
   event.preventDefault();

   // inputo reiksme issaugom kintamajame
   const yearsValue = caoFormEl1.elements.years.value;
   // console.log(yearsValue);

   // nusitaikyt i atsakymo eilute
   const resultEl1 = document.getElementById('caoResult1');

   if (yearsValue > 20) {
      resultEl1.textContent = 'Submit and find out your bonus: 200e';
      console.log('Jūsų bonusas: 200 eurų');
   } else if (yearsValue > 10) {
      resultEl1.textContent = 'Submit and find out your bonus: 100e';
      console.log('Jūsų bonusas: 100 eurų');
   } else {
      resultEl1.textContent = 'Submit and find out your bonus: 50e';
      console.log('Jūsų bonusas: 50 eurų');
   }
});

/*  2 way - without form, only input and button */

/* <input type="text" id="input1" placeholder="How many years 1" name="years1" /><br />
<button id="button1">Submit 1</button> */

// button paspaudus
const button1El = document.getElementById('button1');
const inputEl1 = document.getElementById('input1');

button1El.addEventListener('click', function() {
   const yearsValue1 = parseInt(inputEl1.value);

   if (yearsValue1 > 20) {
      console.log('Jūsų bonusas: 200 eurų');
   } else if (yearsValue1 > 10) {
      console.log('Jūsų bonusas: 100 eurų');
   } else {
      console.log('Jūsų bonusas: 50 eurų');
   }
});


/* 2. Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliamieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas. */
/* <form id="caoForm2">
       <input type="number" placeholder="Year" name="year" /><br />
       <button type="submit">Submit</button>
   </form> */


/* 3. Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu. */


/* 4. Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas". */


/* 5. Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :) */


/* 6. Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
Pvz:
Įvesta: 2
Rezultatas:
*
**

Įvesta: 5
Rezultatas:
*
**
***
****
*/ // last line is comment


/* ======================================== Part 4 ====================================== */

/* 1. Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš mažų L raidžių ASCII būdų).
t.y. jei kviesite funkciją fn(4), tai turėtų atspaudinti tokį rezultatą:
L
L
L
L L L L 
*/


/* 2. Sukurkite tokią pačią funkciją, bet kad spausdintų I raidę. Vartotojas gali įrašyti tik nelyginį teigiamą skaičių, kitaip išmeta klaidą.
pvz.:
I I I I I
I
I
I
I I I I I
*/


/* 3. Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
Pvz.: Petras, Jonas, Mantas, Antanas. */


/* 4. Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.
Pvz.: fn(101, 81) grąžins 101. */


/* 5. Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius tarp 1 ir 5. Vartotojas turi formą su vienu input - gali spėti skaičių. Atspėjus - išmeta alert(atspejai), kitaip alert(neatspejai). */


/* 6. Pakoreguokite penktą pratimą, kad skaičiuotų iš kelinto karto atspėjai ir tai parašytų alert'e. */