"use strict";

// 1. nusitaikyti i forma
// 2. uzdeti submit event listeneri
// 3. sustabdyti formos siuntima su perkrovimu
// 4. surinkti inputu reiksmes ir sudeti i objekta
// 5. siusti naujo post duomenis su fetch

const formEl = document.forms.form1;

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  // new object from form inputs
  const newPost = {
    title: formEl.elements.title.value,
    body: formEl.elements.body.value,
    userId: Number(formEl.elements.userId.value),
  };
  console.log("newPost ===", newPost);

  // post new post
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    })
    .then((data) => {
      formEl.reset();
      showAlert("success", data.id);
      console.log("data ===", data);
    })
    .catch((err) => {
      showAlert("error");
      console.log(err.message);
    });
});

// show alert
function showAlert(result, id) {
  const feedbackEl = document.getElementById("feedback");
  feedbackEl.innerHTML = "";
  const pEl = document.createElement("p");

  if (result === "success") {
    pEl.textContent = `Your post ${id} was created successfully.`;
  } else {
    pEl.textContent = `Your post wasn't created.`;
  }

  // style
  pEl.style.backgroundColor = "gainsboro";
  pEl.style.borderRadius = "10px";
  pEl.style.padding = "10px";
  pEl.style.textAlign = "center";

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

formStoreEl.addEventListener("submit", (event) => {
  event.preventDefault();

  // new object from form inputs
  const newPost = {
    title: formStoreEl.elements.title.value,
    price: formStoreEl.elements.price.value,
    description: formStoreEl.description.value,
    image: formStoreEl.elements.image.value,
    category: formStoreEl.elements.category.value,
  };
  console.log("newPost ===", newPost);

  // post new product
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    })
    .then((data) => {
      formStoreEl.reset();
      showAlert("success", data.id);
      console.log("data ===", data);
    })
    .catch((err) => {
      showAlert("error");
      console.log(err.message);
    });
});

/* -------------------------------------------------------------------------------------------------- */
// gauti kategorijas is fakestoreapi.com ir is ju suformuoti select input lauka su options
const h1Task3 = document.getElementById("task3");

fetch("https://fakestoreapi.com/products/categories")
  .then((response) => response.json())
  .then((data) => createCategories(data))
  .catch((error) => console.log(error.message));

// create categories div
function createCategories(array) {
  // create container
  const divEl = document.createElement("div");
  divEl.id = "categories"; // divEl.setAttribute('id', 'categories');
  h1Task3.after(divEl);
  // create label
  const labelEl = document.createElement("label");
  labelEl.htmlFor = "category";
  labelEl.textContent = "Choose a category:";
  divEl.append(labelEl);
  // create select
  const selectEl = document.createElement("select");
  divEl.append(selectEl);

  // create options for a select
  array.forEach((element) => {
    createSelectOption(element, selectEl);
  });

  // create a button
  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Show";
  divEl.append(buttonEl);

  // generate selected category products to html
  buttonEl.addEventListener("click", () =>
    getProductsFromCategory(selectEl.value)
  );

  // // create submit
  // const submitEl = document.createElement('input');
  // submitEl.type = 'submit';
  // submitEl.value = 'Show';
}

// create options for a select
function createSelectOption(option, select) {
  const optionEl = document.createElement("option");
  optionEl.value = option;
  optionEl.text = option.charAt(0).toUpperCase() + option.substring(1); // Capitalize first letter
  select.append(optionEl);
}

// get products in a specific category
function getProductsFromCategory(category) {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((response) => response.json())
    .then((data) => showProductsToHtml(data))
    .catch((error) => console.log(error.message));
}

// generate products to html
function showProductsToHtml(array) {
  const containerEl = document.querySelector(".container");
  containerEl.innerHTML = "";

  // create products container
  // const containerEl = document.createElement('section');
  // containerEl.classList = 'container';
  // document.body.append(containerEl);

  // create products cards container
  const cardsEl = document.createElement("div");
  cardsEl.classList = "products-cards";
  containerEl.append(cardsEl);

  // create product cards
  array.forEach(
    (product) =>
      (cardsEl.innerHTML += createProduct(
        product.image,
        product.title,
        product.price,
        product.rating.rate
      ))
  );
}

// create one product card
function createProduct(image, title, price, rate) {
  return `<article class="products-card">
      <div class="products-card__img">
        <img src="${image}" alt="model" />
      </div>
      <div class="products-card__text">
        <h3 class="card__text-top">${title}</h3>
        <div class="card__text-bottom">
          <p class="ct-price">$${price}</p>
          <p class="ct-rating">${stars(rate)}</p>
        </div>
      </div>
    </article>`;
}

// generate stars from rating
function stars(ratee) {
  let rate = Math.floor(ratee);
  const star = '<i class="rating rating-4 fa fa-star" aria-hidden="true"></i>';
  const starO =
    '<i class="rating rating-4 fa fa-star-o" aria-hidden="true"></i>';
  switch (rate) {
    case 1:
      rate = star + starO + starO + starO + starO;
      break;
    case 2:
      rate = star + star + starO + starO + starO;
      break;
    case 3:
      rate = star + star + star + starO + starO;
      break;
    case 4:
      rate = star + star + star + star + starO;
      break;
    case 5:
      rate = star + star + star + star + star;
      break;
    default:
      rate = starO + starO + starO + starO + starO;
  }
  return rate;
}
