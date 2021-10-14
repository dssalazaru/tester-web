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
    // .then((data) => loadData(data))
    .catch((e) => {
        console.error(dbtester + '/voleibol/equipos.json\n'+e);
    });
};

// const loadData = (data) => {return data};

const getData = () => {
     fetchData('/voleibol/equipos');
    };

function loading(body) {
    body.innerHTML = `
    <div class="d-flex justify-content-center align-items-center blank">
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">...</span>
        </div>
    </div>
    `;
}


window.onload = () => {
    // getData();
    const loading = document.querySelector(".loading");
    const body = document.querySelector(".content");
    body.classList.toggle('d-none');
    // loading(body)
    setTimeout(() => {
        loading.classList.toggle('d-none');
        body.classList.toggle('d-none');
    }, 2000);
};