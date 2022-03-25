'use strict';

/* <form>
     <input type="text" name="title" placeholder="Title" />
     <textarea name="body" cols="30" rows="4" placeholder="Enter body text"></textarea>
     <input type="hidden" name="userId" value="5" />
     <button>Create</button>
   </form> */

// 1. nusitaikyti i forma
// 2. uzdeti submit event listeneri
// 3. sustabdyti formos siuntima su perkrovimu
// 4. surinkit inputu reiksmes ir sudeti i objekta
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
    .then((response) => response.json())
    .then((data) => console.log('data ===', data))
    .catch((err) => console.log(err.message));

  // get all posts
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => console.log('data all ===', data))
    .catch((err) => console.log(err.message));

});