"use strict";

const baseUrl = "https://one-more-mca.herokuapp.com/api/posts";
// {"_id":"624165bcf0048a09af8b471d","title":"Post 1","author":"Jills","body":"Body of post 1","year":2000}

const cardsEl = document.querySelector(".cards");

// get cards
async function getPosts() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  console.log(data);

  // generate cards
  if (data.success === true) {
    generateCards(data.data, cardsEl);
  } else {
    console.warn("error");
  }
}
getPosts();

// generate cards
function generateCards(array, output) {
  output.innerHTML = "";
  // output.innerHTML = array.map((element) => renderCard(element)).join('');
  array.forEach((element) => {
    output.append(renderCard(element));
  });
}

function renderCard(element) {
  const divEl = document.createElement("div");
  divEl.classList = "card";
  divEl.innerHTML = `<h3 class="card__title">${element.title}</h3>
     <p class="card__author">${element.author}</p>
     <p class="card__body">${element.body}</p>
     <p class="card__year"><em>${element.year}</em></p>
     <a class="btn" href="posts-single.html?postId=${element._id}">Read more</a>`;
  /* <a class="btn" href="posts-edit.html?postId=${element._id}">Edit</a> */
  // delete btn
  const btnEl = document.createElement("button");
  btnEl.classList = "btn";
  btnEl.textContent = "Delete X";
  btnEl.addEventListener("click", () => deletePost(element._id));
  divEl.append(btnEl);
  return divEl;
}

async function deletePost(postId) {
  // console.log('delete', postId);
  const confirmation = confirm("Do you really want to delete it?");
  if (!confirmation) return;
  // DELETE  http://localhost:3003/api/posts/62429bc6f94300d1b8a1c8f1
  const response = await fetch(`${baseUrl}/${postId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
  if (data.data.deletedCount === 1) {
    getPosts();
  }
}
