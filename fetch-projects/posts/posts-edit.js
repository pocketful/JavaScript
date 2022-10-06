"use strict";

// 1 pasiimti postId is query params
const baseUrl = "https://one-more-mca.herokuapp.com/api/posts";
const formEl = document.forms.formpost;
// http://127.0.0.1:5500/fetch/posts/posts-edit.html?postId=624346f37d41bef6c82fa3b0
// <a class="btn" href="posts-edit.html?postId=${element._id}">Edit</a>`; // edit post button

// https://reactgo.com/javascript-get-query-parameters/
// Get the value of postId parameter
// const params = new URLSearchParams(window.location.search);
// const postId = params.get('postId');
// console.log(postId);

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}
const postId = getQueryParam("postId"); // console.log('postId', postId);

// 2 parsisiusti posta su id is query params
// get post by id (fetch by id)
async function getPost() {
  const response = await fetch(`${baseUrl}/${postId}`);
  const obj = await response.json(); // console.log(obj);
  if (obj.success === true) {
    fillForm(obj.data);
    console.log(obj.data);
  } else {
    console.warn("error");
  }
}
getPost();

// // get post by id (fetch all)
// async function getPost() {
//     const response = await fetch(`${baseUrl}`);
//     const obj = await response.json(); // console.log(obj);
//     if (obj.success === true) {
//         const post = obj.data.find(element => element._id === postId);
//         fillForm(post);
//         console.log(post);
//     }
//     else {
//         console.warn('error')
//     }
// }
// getPost();

// 3 parsiusto posto duomenis supildyti i forma
// fill a form with a post from id
function fillForm(post) {
  formEl.elements.title.value = post.title;
  formEl.elements.author.value = post.author;
  formEl.elements.body.value = post.body;
  formEl.elements.year.value = post.year;
}

// submit updated form
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  // const newPostObj = {
  //     title: formEl.elements.title.value,
  //     author: formEl.elements.author.value,
  //     body: formEl.elements.body.value,
  //     year: formEl.elements.year.value
  // }
  // console.log(newPostObj);

  // one key
  // const newPostObjTitle = {
  //    [keys[0]]: formEl.elements[keys[0]].value,
  // };

  const keys = ["title", "author", "body", "year"];

  // foreach way
  // const newPostObj = {};
  // keys.forEach((key) => {
  //     newPostObj[key] = formEl.elements[key].value; // new key iprastai newPostObj.title
  //     console.log(newPostObj);
  // });

  // reduce way
  const updatedPostObj = keys.reduce((properties, key) => {
    properties[key] = formEl.elements[key].value;
    return properties;
  }, {});
  console.log("updatedPostObj", updatedPostObj);

  updatePost(updatedPostObj);
});

// 4 po to kai forma paeditinama ir submitinama mes siunciam ta forma
// update post
// PUT http://localhost:3003/api/posts/62416561f0048a09af8b471b
async function updatePost(updatedPostObj) {
  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(updatedPostObj),
  };
  const response = await fetch(`${baseUrl}/${postId}`, fetchOptions);
  const dataObj = await response.json();
  console.log("dataObj", dataObj);
  // show success and redirect to posts
  if (dataObj.success === true) {
    showSuccess();
    setTimeout(() => (window.location.href = "posts.html"), 2000);
  }
  // errors
  if (dataObj.success === false) {
    showErrors(dataObj.error);
    console.log("aa", dataObj.error);
  }
}

// show success message
function showSuccess() {
  const feedbackEl = document.getElementById("feedback");
  feedbackEl.classList = "feedback";
  feedbackEl.innerHTML = "";
  feedbackEl.innerHTML = "Your post was successfully updated.";
  // const pEl = document.createElement('p');
  // pEl.classList = 'feedback';
  // pEl.textContent = message;
  // feedbackEl.append(pEl);
  // setTimeout(() => pEl.remove(), 3000);
}

// show errors
function showErrors(errorsArr) {
  const feedbackEl = document.getElementById("feedback");
  feedbackEl.classList = "feedback";
  feedbackEl.innerHTML = "";
  feedbackEl.innerHTML = errorsArr
    .map((error) => `<p>${error.message}</p>`)
    .join("");
  // const pEl = document.createElement('p');
  // pEl.classList = 'feedback';
  // pEl.innerHTML += errorsArr.map((error) => `${error.message}<br>`).join('');
  // feedbackEl.append(pEl);
}
