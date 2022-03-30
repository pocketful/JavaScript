'use strict';

const expUrl = 'https://zany-skitter-caper.glitch.me/experiences';
const skillsUrl = 'https://zany-skitter-caper.glitch.me/skills';

// get experience
async function getData(url, fn) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.forEach(element => fn(element));
    // drawSkills(data);
}
getData(expUrl, drawExperience);
getData(skillsUrl, drawSkills);


// draw experience
function drawExperience(element) {
    document.querySelector('.about__exp').innerHTML += 
    `<div class="exp__job">
        <div class="exp__job-left">
            <p class="job__year">${element.startYear} - ${element.finishYear}</p>
            <p class="job__company">${element.companyName}</p>
        </div>
        <div class="exp__job-right">
            <p class="job__position">${element.position}</p>
            <p class="job__desc">${element.description}</p>
        </div>
    </div>`
}

// draw skills
function drawSkills(element) {
    document.querySelector('.about__skills').innerHTML += 
    `<div class="skills__item">
        <div class="item__header">
            <p class="item__title">${element.title}</p>
            <p class="item__proc">${element.level}%</p>
        </div>
        <div class="item__bar">
            <div class="item__bar-fill" style="width:${element.level}%"></div>
        </div>
    </div>`
}
