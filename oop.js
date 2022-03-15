'use strict';

const users = [
    {
        id: 1,
        username: 'Bob',
        password: 'secret123',
        department: 'A',
        avatar: 'https://placeimg.com/500/300/nature',
        online: false,
    },
    {
        id: 2,
        username: 'Jill',
        password: 'secret456',
        department: 'B',
        avatar: 'https://placeimg.com/500/480/nature',
        online: true,
    },
    {
        id: 3,
        username: 'James',
        password: 'secret789',
        department: 'B',
        avatar: 'https://placeimg.com/800/480/nature',
        online: true,
    },
    {
        id: 4,
        username: 'Mike',
        password: 'secret111',
        department: 'C',
        avatar: 'https://placeimg.com/640/480/nature',
        online: false,
    },
];


// 1. parasyti funkcija kuri atrenka visus online esancius vartotojus

function isOnline(array) {
    const onlineUsers = array.filter((user) => user.online === true);

    console.group('isOnline ===');
    console.table(onlineUsers);
    console.groupEnd();
}
isOnline(users);

/* ---------------------------------------------------------------- */

// 2. su funkcija atrinkti B ir C departameto userius
function fromDepartmentsBC(array) {
    const departmentBC = array.filter((user) => user.department === 'B' || 'C');
    console.group('fromDepartmentsBC ===');
    console.table(departmentBC);
    console.groupEnd();
}
fromDepartmentsBC(users);

/* ---------------------------------------------------------------- */

// 3. parasyti funkcija kuri sugeneruoja htmle nuotrauku galerija is user paveiksleliu, su username pavadinimu

function generateUserImg(array) {
    // container
    const divEl = document.createElement('div');
    divEl.className = 'container';
    
    array.forEach((user) => {
        // user card
        const userCardEl = document.createElement('figure');
        userCardEl.className = 'user-card';

        // user username
        const figcaptionEl = document.createElement('figcaption');
        figcaptionEl.textContent = user.username;
        figcaptionEl.className = 'user-card-figcaption';
        userCardEl.append(figcaptionEl);

        // user img
        const img = document.createElement('img');
        img.src = user.avatar;
        img.className = 'user-card-img';
        userCardEl.append(img);

        // append card to container
        divEl.append(userCardEl);
    });

    //append container
    document.body.append(divEl);
}
generateUserImg(users);

/* ---------------------------------------------------------------- */