'use strict';

/* CAO FETCH POST 2, 3 ==================================================================================== */
/* 1. Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL. */
/* 2. Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model). */
/* 3. Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą. */
/* 4. Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite ar įrašyti duomenys atsivaizduoja */

const baseUrl = 'https://olive-bead-glazer.glitch.me';
// const baseUrl = 'fetch-post-cao.json'; // error
const formEl = document.forms.form1;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  // new object from form inputs
  const newPost = {
    brand: formEl.elements.brand.value,
    model: formEl.elements.model.value,
  };
  console.log('newPost ===', newPost);

  // post new post
  fetch(`${baseUrl}`, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('error');
      }
      return response.json();
    })
    .then((data) => {
      formEl.reset();
      showAlert('success');
      console.log('data ===', data)
    })
    .catch((err) => {
      showAlert('error');
      console.log(err.message);
    });
});

// show alert
function showAlert(result) {
  const feedbackEl = document.getElementById('feedback');
  feedbackEl.innerHTML = '';
  const pEl = document.createElement('p');

  if (result === 'success') {
    pEl.textContent = 'Your post was created successfully.';
  } else {
    pEl.textContent = "Your post wasn't created.";
  }

  // style
  pEl.style.backgroundColor = 'gainsboro';
  pEl.style.borderRadius = '10px';
  pEl.style.padding = '10px';
  pEl.style.textAlign = 'center';

  feedbackEl.append(pEl);

  // setTimeout(() => {
  //   pEl.remove();
  // }, 3000);
}