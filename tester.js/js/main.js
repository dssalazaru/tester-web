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

function loading() {
    const body = document.querySelector("body");
    body.innerHTML = `
    <div class="d-flex justify-content-center">
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">...</span>
        </div>
    </div>
    `;
}


window.onload = () => {
    // getData();
    loading()
};