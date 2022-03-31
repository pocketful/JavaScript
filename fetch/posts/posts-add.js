'use strict';

const baseUrl = 'https://one-more-mca.herokuapp.com/api/posts';
const cardsEl = document.querySelector('.cards');
const formEl = document.forms.formpost;

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    /* save values from inputs to an object --------------------- */

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

    const keys = ['title', 'author', 'body', 'year'];

    // foreach way
    // const newPostObj = {};
    // keys.forEach((key) => {
    //     newPostObj[key] = formEl.elements[key].value; // new key iprastai newPostObj.title
    //     console.log(newPostObj);
    // });

    // reduce way
    const newPostObj = keys.reduce((properties, key) => {
        properties[key] = formEl.elements[key].value.trim();
        return properties;
    }, {});
    console.log('newPostObj', newPostObj);


    /* client side form validation ---------------------------------------------- */
    
    // validate empty fields
    keys.forEach((key) => validateEmpty(key, newPostObj));

    // validate fields for min chars (except last, number field)
    keys.forEach((key) => {
        if (key !== 'year') {
            validateMinStr(key, newPostObj)
        }
    });
    // validate number field
    validateMinMaxNum('year', newPostObj);

    /* create new post ---------------------------------------------------------- */
    newPost(newPostObj);
})


// new post
async function newPost(newPostObj) {
    // post new post
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(newPostObj),
    })
    const dataObj = await response.json()
    console.log('dataObj', dataObj);

    // errors
    if (dataObj.success === true) {
        formEl.reset();
        showSuccess(dataObj.data);
        // window.location.href = 'posts.html'; // redirect to posts
    }
    if (dataObj.success === false) {
        showErrors(dataObj.error);
        console.log('aa', dataObj.error);
    }
}


/* server side validation ============================================================================ */

// show success message
function showSuccess(message) {
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.classList = 'feedback';
    feedbackEl.innerHTML = '';
    feedbackEl.innerHTML = message;
    // const pEl = document.createElement('p');
    // pEl.classList = 'feedback';
    // pEl.textContent = message;
    // feedbackEl.append(pEl);
}

// show errors
function showErrors(errorsArr) {
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.classList = 'feedback';
    feedbackEl.innerHTML = '';
    feedbackEl.innerHTML = errorsArr.map((error) => `<p>${error.message}</p>`).join('');
    // const pEl = document.createElement('p');
    // pEl.classList = 'feedback';
    // pEl.innerHTML += errorsArr.map((error) => `${error.message}<br>`).join('');
    // feedbackEl.append(pEl);
}


/* Client side form validation ======================================================================= */
// const errors = {};
const errors = { title: [], author: [], body: [], year: [] };

/* validate functions -------------------------------------- */
function validateEmpty(key, newPostObj) {
    const output = clearOutput(key);
    const outputStyle = clearOutputStyle(key);
    if (newPostObj[key] === '') {
        outputErrors(errors, key, outputStyle, output, 'required field');
    }
}

function validateMinStr(key, newPostObj) {
    const output = clearOutput(key);
    const outputStyle = clearOutputStyle(key);
    if (newPostObj[key].length < 5) {
        outputErrors(errors, key, outputStyle, output, 'too short');
    }
}

function validateMinMaxNum(key, newPostObj) {
    const output = clearOutput(key);
    const outputStyle = clearOutputStyle(key);
    if (newPostObj[key] < 1970 || newPostObj[key] > 2022) {
        outputErrors(errors, key, outputStyle, output, 'number value must be between 1970 and 2022');
    }
}

/* additional functions for validate functions ------------- */
function clearOutput(key) {
    const output = document.querySelector(`.err-${key}`);
    output.textContent = '';
    return output;
};
function clearOutputStyle(key) {
    let outputStyle = formEl.elements[key].style;
    outputStyle.border = '1px solid var(--light2)';
    return outputStyle;
};
function outputErrors(errors, key, outputStyle, output, message) {
    errors[key].push(message);
    outputStyle.border = '1px solid var(--danger)';
    output.textContent = errors[key].join(', ');
}

// validateEmpty('title', newPostObj); // newPostObj.title
// validateMinStr('title', newPostObj);
// validateEmpty('author', newPostObj);
// validateMinStr('author', newPostObj);
// validateEmpty('body', newPostObj);
// validateMinStr('body', newPostObj);
// validateEmpty('year', newPostObj);
// validateMinMaxNum('year', newPostObj); // different

// // these were directly in a form eventListener
// if (newPostObj.title === '') {
//     // errors.title = 'required field';
//     errors.title.push('required field');
//     console.log('errors', errors);
//     formEl.elements.title.style.border = '2px solid var(--danger)';
//     titleErrorEl.textContent = errors.title.join(', ');
// }
// if (newPostObj.title.length < 5) {
//     // errors.title = 'too short';
//     errors.title.push('too short');
//     console.log('errors2', errors);
//     formEl.elements.title.style.border = '2px solid var(--danger)';
//     titleErrorEl.textContent = errors.title.join(', ');
// }
// if (newPostObj.author === '') {
//     // errors.author = 'required field';
//     errors.author.push('required field');
//     console.log('errors3', errors);
//     formEl.elements.author.style.border = '2px solid var(--danger)';
//     authorErrorEl.textContent = errors.author.join(', ');
// }
// if (newPostObj.author.length < 5) {
//     // errors.author = 'too short';
//     errors.author.push('too short');
//     console.log('errors4', errors);
//     formEl.elements.author.style.border = '2px solid var(--danger)';
//     authorErrorEl.textContent = errors.author.join(', ');
// }
// }

// // form title errors
// const titleErrorEl = document.querySelector('.err-title');
// titleErrorEl.textContent = '';
// if (newPostObj.title === '') {
//     formEl.elements.title.style.border = '2px solid var(--danger)';
//     titleErrorEl.textContent = 'required field';
//     return;
// }
// if (newPostObj.title.length < 5) {
//     formEl.elements.title.style.border = '2px solid var(--danger)';
//     titleErrorEl.textContent = 'title too short';
//     // formEl.elements.title.insertAdjacentHTML('afterend', '<span class="form-error">title too short</span>');
//     return;
// }