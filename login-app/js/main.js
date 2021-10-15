let auth = false
const nav = document.querySelectorAll('[id^=link]');
const pages = document.querySelectorAll('[id^=page]');
const backend = 'https://tester-15f26-default-rtdb.firebaseio.com/'

const loading = () => {
    console.log("Loading page...done");
    setTimeout(() => {
        document.querySelector('#loading').classList.add('d-none');
        document.querySelectorAll('#header, main, footer')
            .forEach((element) => element.classList.remove('d-none'));
    }, 1000);
    // document.querySelector('#loading').classList.remove('d-none');
};

const menu = () => {
    console.log("Runing nav...done");
    nav.forEach((element) => {
        let id = element.id.split('-')[1];
        document.querySelector(`#page-${id}`).classList.add('d-none');
        element.addEventListener('click', (event) => {
            event.preventDefault();
            // loading();
            activePage(id);
        })
    })
}


const activePage = (id) => {
    nav.forEach((element) => element.classList.remove('active'));
    pages.forEach((element) => element.classList.add('d-none'));
    document.querySelector(`#link-${id}`).classList.add('active');
    document.querySelector(`#page-${id}`).classList.remove('d-none');
    if (auth == true) document.querySelector("#nav-2").classList.add('d-none');
}

const logIn = () => {
    console.log("Runing login...done");
    const login = document.querySelector('#btn-login');
    login.addEventListener('click', (event) => {
        event.preventDefault();
        let user = document.querySelector('#login-form #username');
        let pass = document.querySelector('#login-form #password');
        if (user.value.trim() === '') {
            alert('Error: No puedes dejar el usuario en vacio!');
            user.focus();
            return;
        } else if (pass.value.trim() === '') {
            alert('Error: No puedes dejar la contraseña vacia!');
            pass.focus();
            return;
        } else {
            let info = {
                username: user.value,
                password: pass.value
            }
            validateLogin(info);
        }
    })
}

const validateLogin = (info) => {
    console.log("Checking username");
    fetch(backend + 'login.json')
        .then((response) => response.json())
        .then((users) => {
            let id = Object.entries(users);
            id.forEach((element) => {
                let user = element[1];
                if (info.username === user.username && info.password === user.password)
                    auth = true;
            })
            if (auth == true) activePage('teams');
            else alert('Error: Datos incorrectos!');
        })
        .catch((e) => console.error(e))
}

window.onload = () => {
    loading();
    menu();
    activePage('home');
    logIn();
};