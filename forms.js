'use strict';

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

// nusitaikom i forma
const formEl = document.forms.userForm;

// 2 way, prastesnis. jeigu id turi galima susirasyti ir taip
const ageEl = document.getElementById('age');

// consolej: formEl.elements pasiziureti galima elementus
// geriausia pagal 'name' inputus pasiimti javascripte 

// formos issiusntimo ivykis yra submit (ar mygtuko paspaudimu, ar enter paspaudimu inpute)
// kai 'addEventListener' tai function argument bus 'event'
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