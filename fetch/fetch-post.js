'use strict';

// 1. nusitaikyti i forma
// 2. uzdeti submit event listeneri
// 3. sustabdyti formos siuntima su perkrovimu
// 4. surinkti inputu reiksmes ir sudeti i objekta
// 5. siusti naujo post duomenis su fetch

const formEl = document.forms.form1;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  // new object from form inputs
  const newPost = {
    title: formEl.elements.title.value,
    body: formEl.elements.body.value,
    userId: Number(formEl.elements.userId.value),
  };
  console.log('newPost ===', newPost);

  // post new post
  fetch('https://jsonplaceholder.typicode.com/posts', {
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
      showAlert('success', data.id);
      console.log('data ===', data)
    })
    .catch((err) => {
      showAlert('error');
      console.log(err.message);
    });
});

// show Alert
function showAlert(result, id) {
  const feedbackEl = document.getElementById('feedback');
  feedbackEl.innerHTML = '';
  const pEl = document.createElement('p');

  if (result === 'success') {
    pEl.textContent = `Your post ${id} was created successfully.`;
  } else {
    pEl.textContent = `Your post wasn't created.`;
  }

  // style
  pEl.style.backgroundColor = 'gainsboro';
  pEl.style.borderRadius = '10px';
  pEl.style.padding = '10px';
  pEl.style.textAlign = 'center';

  feedbackEl.append(pEl);

  setTimeout(() => {
    pEl.remove();
  }, 3000);
}

/* -------------------------------------------------------------------------------------------------- */

// 0. sukurti forma pagal kuria nusiusim naujo produkto sukurimo uzklausa
// 1. nusitaikyti i forma
// 2. uzdeti submit event listeneri
// 3. sustabdyti formos siuntima su perkrovimu
// 4. surinkit inputu reiksmes ir sudeti i objekta
// 5. siusti naujo post duomenis su fetch
// 6. parodom sekmes pranesima kai sekmingai nusiusta forma
// 7. klaidos kai ne 

const formStoreEl = document.forms.form2;

formStoreEl.addEventListener('submit', (event) => {
  event.preventDefault();

  // new object from form inputs
  const newPost = {
    title: formStoreEl.elements.title.value,
    price: formStoreEl.elements.price.value,
    description: formStoreEl.description.value,
    image: formStoreEl.elements.image.value,
    category: formStoreEl.elements.category.value,
  };
  console.log('newPost ===', newPost);

  // post new product
  fetch('https://fakestoreapi.com/products', {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('error');
      }
      return response.json();
    })
    .then((data) => {
      formStoreEl.reset();
      showAlert('success', data.id);
      console.log('data ===', data)
    })
    .catch((err) => {
      showAlert('error');
      console.log(err.message);
    });
});

/* -------------------------------------------------------------------------------------------------- */
// gauti kategorijas is fakestoreapi.com ir is ju suformuoti select input lauka su options

fetch('https://fakestoreapi.com/products/categories')
  .then(response => response.json())
  .then(data => createCategories(data))
  .catch((error) => console.log(error.message))


// create categories element
function createCategories(array) {
  // create container
  const divEl = document.createElement('div');
  document.body.append(divEl);
  // create label
  const labelEl = document.createElement('label');
  labelEl.htmlFor = 'category';
  labelEl.textContent = 'Choose a category:';
  divEl.append(labelEl);
  // create select
  const selectEl = document.createElement('select');
  divEl.append(selectEl);

  // create options for a select
  array.forEach(element => {
    createSelectOption(element, selectEl)
  });
}

// create options for a select
function createSelectOption(option, select) {
  const optionEl = document.createElement('option');
  optionEl.value = option;
  optionEl.text = option;
  select.append(optionEl);
}
