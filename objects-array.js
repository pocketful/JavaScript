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
    return onlineUsers;
}
isOnline(users);

/* ---------------------------------------------------------------- */
// 2. su funkcija atrinkti B ir C departameto userius
function fromDepartmentsBC(array) {
    const departmentBC = array.filter((user) => user.department === 'B' || user.department === 'C');
    console.group('fromDepartmentsBC ===');
    console.table(departmentBC);
    console.groupEnd();
    return departmentBC;
}
fromDepartmentsBC(users);

    // array.includes()

// extra
// const departmentBC = fromDepartmentsBC(users, ['B', 'C']);
// const departmentA = fromDepartmentsBC(users, ['A']);


/* ---------------------------------------------------------------- */
// 3. parasyti funkcija kuri sugeneruoja htmle nuotrauku galerija is user paveiksleliu, su username pavadinimu

function generateGallery(array) {
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
        const imgEl = document.createElement('img');
        imgEl.src = user.avatar; //   `img/${user.avatar}` - if it's in folder
        imgEl.alt = 'nature image of ' + user.username;
        imgEl.className = 'user-card-img';
        userCardEl.append(imgEl);

        // append card to container
        divEl.append(userCardEl);
    });

    //append container
    document.body.append(divEl);
}
generateGallery(users);

/* ---------------------------------------------------------------- */
// 4. parasyti funkcija kuriai paduodam id ir ji grazina objekta kurio id sutampa su duotu. jei toks nerandamas tai grazina { found: false, msg: 'user not found', }

function objectFromId(id, array) {
    const userWithId = array.find((user) => user.id === id) || { found: false, msg: 'user not found'};

    console.group('userWithId ===');
    console.table(userWithId);
    console.groupEnd();
}
objectFromId(8, users);


/* ---------------------------------------------------------------- */
// 5. Parasyti funkcija kuriai paduodam username ir password.
// 5.1 jei pasword ir username sutampa tai iskonsolinam loggin success
// 5.2 jei pasword ir username nesutampa tai iskonsolinam loggin fail
// 5.3 jei pasword ir username sutampa tai padarom vartotoja kad jis butu online


