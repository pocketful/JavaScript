"use strict";

const baseUrl = "https://radial-reinvented-shoe.glitch.me";

const formEl = document.forms.formpost;

// post data
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  // new object from form inputs
  const newPost = {
    image: formEl.elements.img.value,
    city: formEl.elements.city.value,
    price: Number(formEl.elements.price.value),
    description: formEl.elements.description.value,
  };
  console.log("newPost ===", newPost);

  // post new post
  fetch(`${baseUrl}`, {
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
      showAlert("success");
      console.log("data ===", data);
    })
    .catch((err) => {
      showAlert("error");
      console.log(err.message);
    });
});

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
