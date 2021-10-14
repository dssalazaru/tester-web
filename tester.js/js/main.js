const dbtester = 'https://tester-15f26-default-rtdb.firebaseio.com';

// Selectors
const api = document.querySelector('.api');

const dssu = {
    'name': "Daniel",
    'lname': "Salazar",
    'age': 22,
    'learning': "JS",
    'active': true
};
const list = [];

// fetch('https://jsonplaceholder.typicode.com/users')
const fetchData = (api) => {
    const url = dbtester + api + '.json';
    fetch(url)
    .then((response) => {
        response.json();
        console.log(response.status);
        console.log(response.statusText);
    })
    .then((data) => {return data})
    .catch((e) => {
        console.error(dbtester + '/voleibol/equipos.json\n'+e);
    });
};

// const loadData = (data) => {return data};

const getData = () => {
     fetchData('/voleibol/equipos');
    };

function loading() {
    const loading = document.querySelector(".loading");
    const body = document.querySelector(".content");
    body.classList.toggle('d-none');
    setTimeout(() => {
        loading.classList.toggle('d-none');
        body.classList.toggle('d-none');
    }, 2000);
}

let input = "";

document.querySelector('#getIn')
.addEventListener('click', (event) => {
    event.preventDefault();
    rutaApi = document.querySelector('#rutaApi').value;
    rutaApi = "works";
    if (rutaApi == ""){
        input = rutaApi;
        rutaApi = " ";
    };
});

document.querySelector('#nav-reload')
.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(input);
});

window.onload = () => {
    loading()

};