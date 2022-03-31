'use strict';

const baseUrl = 'https://one-more-mca.herokuapp.com/api/posts';

function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}
const postId = getQueryParam('postId'); // console.log('postId', postId);


// get post by id (fetch by id)
async function getPost() {
    const response = await fetch(`${baseUrl}/${postId}`);
    const obj = await response.json(); // console.log(obj);
    if (obj.success === true) {
        fillHtml(obj.data);
        createEditLink();
        console.log(obj.data);
    }
    else {
        console.warn('error')
    }
}
getPost();

function fillHtml(element) {
    document.querySelector('.card__title').textContent = element.title;
    document.querySelector('.card__author').textContent = element.author;
    document.querySelector('.card__body').textContent = element.body;
    document.querySelector('.card__year').textContent = element.year;
}

// create edit link 
function createEditLink() {
    const cardEl = document.querySelector('.card');
    const editLinkEl = `<a class="btn" href="posts-edit.html?postId=${postId}">Edit post</a>`;
    cardEl.insertAdjacentHTML('beforeend', editLinkEl); // Before the end of the element (last child)
    // cardEl.innerHTML += editLinkEl; // same
}
