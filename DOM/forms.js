'use strict';

/* CAO -------------------------------------------------------------------- */ 
/*  <h1>Title</h1>
    <form id="caoForm">
      <input type="text" placeholder="Name" name="nameee" /><br />
      <button type="submit">Add</button>
   </form>  */

// B. CAO is karto apraso. i pirma psl forma nusitaiko
/* Paimam forma, pasakom kai forma submitins, paleidziam funkcija.
   Vartotojas iraso kazkokius duomenis.
   Ir kai submitinam funkcija, tuos duomenis nuskaitom ir prilyginam nameValue2. 
   Tada nameValue2 galim atvaizduoti kazkur textContent */

document.getElementById('caoForm').addEventListener('submit', myFunction);

function myFunction(event) {   // nebutinai event, gali but (e) ir bet kas. pagal eiliskuma
    event.preventDefault(); 
    // console.log(event);
    // console.log(event.target); // forma html visas
    // console.log(event.target.elements.nameee); // form input visas html (name="nameee")
    // console.log(document.querySelector('input[name=nameee]')); // form input visas html (kitas budas)
    console.log(event.target.elements.nameee.value); // paims i nameee reiksme ivesta 'ivestas text'
    // console.log(document.querySelector('input[name=nameee]').value); // paims i name reiksme ivesta (kt budas)
    const nameValue2 = event.target.elements.nameee.value; // variable. paimti funkcijoj butinai
    document.querySelector('h1').textContent = nameValue2;
}
/* ------------------------------------------------------------------------- */ 

/*  <form id="userForm">
      <input type="text" placeholder="Name" name="name" /><br />
      <input type="text" placeholder="Surname" name="surname" id="surname "/><br />
      <input type="text" placeholder="Town" name="town" /><br />
      <input type="number" placeholder="Age" name="age" id="age" /><br />
      <h3>Favorite color</h3>
      <input type="radio" value="blue" id="col1" name="color" /><label for="col1">Blue</label><br />
      <input type="radio" value="green" id="col2" name="color" /><label for="col2">Green</label><br />
      <input type="radio" value="yellow" id="col3" name="color" /><label for="col3">Yellow</label><br />
      <button type="submit">Click</button>
    </form>  */

// A. nusitaikom i forma
const formEl = document.forms.userForm;

// 2 way, prastesnis. jeigu id turi galima susirasyti ir taip
const ageEl = document.getElementById('age');

// consolej: formEl.elements pasiziureti galima elementus
// geriausia pagal 'name' inputus pasiimti javascripte 

// formos issiusntimo ivykis yra submit (ar mygtuko paspaudimu, ar enter paspaudimu inpute)
// kai 'addEventListener' tai function argument bus 'event'
// A. formai eventListener
formEl.addEventListener('submit', function (event) {
    console.log(event);

    // kai valdom forma su JS tai mes nenorim kad psl persikrautu
    // sustabdyti puslapi nuo perkrovimo paspaudus button, nors forma ir pasubmitina
    event.preventDefault();
    console.log('formos valdymas perimtas');

    // 1 way, nereikia tada isoreje nusitaikyti, galima tik formos viduje sita eilute
    const nameValue = formEl.elements.name.value;
    const townValue = formEl.elements.town.value;
    const favColor = formEl.elements.color.value; // radio buttons]]  reik duot value html, kitu value yra inpute

    // 2 way jeigu id turi galima susirasyti ir taip
    const ageValue = ageEl.value;     // per value visada reiksme gausim kaip stringa

    // 3 way irgi apribotas tik formos elemente ieskom
    const surnameValue = formEl.querySelector('#surname').value;

    // surinkti ivesties laukus ir jo reiksmes sudeti i objekta
    const formosDuomenys = {
        name: nameValue,
        surname: surnameValue,
        town: townValue,
        age: ageValue,
        color: favColor,
    };
    console.log('formosDuomenys ===', formosDuomenys);

    // tikrinam pagal inputo reiksme ar pilnametis
    if (Number(ageValue) < 18) {  // (formosDuomenys.age < 18)
        console.log('priejimas negalimas');
    }
});