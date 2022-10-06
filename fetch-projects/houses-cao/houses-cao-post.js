"use strict";

const baseUrl = "https://radial-reinvented-shoe.glitch.me";

const formEl = document.forms.formpost;

formEl.addEventListener("submit", (event) => {
  newPost();
  event.preventDefault();
});

// new post
async function newPost() {
  try {
    // post new post
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        image: formEl.elements.img.value,
        city: formEl.elements.city.value,
        price: Number(formEl.elements.price.value),
        description: formEl.elements.description.value,
      }),
    });
    const post = await response.json();
    formEl.reset();
    showAlert("success");
    return post;
  } catch (error) {
    showAlert("error");
    console.log(error.message);
  }
}

// show alert
function showAlert(result) {
  const feedbackEl = document.getElementById("feedback");
  feedbackEl.innerHTML = "";
  const pEl = document.createElement("p");
  pEl.classList = "feedback";
  pEl.textContent =
    result === "success"
      ? "Your post was created successfully."
      : "Your post wasn't created.";
  feedbackEl.append(pEl);
}
