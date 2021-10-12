const lang = document.querySelector("#lang");
const olo = document.querySelector("#olo-msg");
const count = document.querySelector("#counter");

const data = {
    'name': "Daniel",
    'lname': "Salazar",
    'age': 22,
    'learning': "JS",
    'active': true
}

const number = new Array(10);
const tel = [];

function toggleLang() {

    if (lang.textContent == "ES"){
        lang.textContent = "EN";
        olo.textContent = "Hello World!";
    } else {
        lang.textContent = "ES";
        olo.textContent = "Hola Mundo!";
    }
    
};

function addnumer() {
    let i = 0;
    let n = document.querySelector("input[name='num']");
    tel.push(n.value);
    let s = document.querySelector(".tel");
    // console.log(tel);
    s.innerHTML += `<li> ${n.value} </li>`;
    n.value = ''
    // up.textContent = `<li> ${i} - ${n} <li>`;
    i++;
};

function contar(){
    let i = 0;
    let con = document.querySelector(".counter");

    for(i; i < 10; i++){
        tel[i] = i;
        con.textContent += `${tel[i]} `;
    };
    i = 0;
    number[i] = 1
    tel.forEach((n)=>{
        document.querySelector(".tel").textContent += ` numero = ${n}`;
    });
    
};

const perfil = ()=>{

};

const title = ()=>{
    let title = document.querySelector(".title");
    if (title.textContent == '') title.textContent = 'Xvideos'
    else title.textContent = '';
    

};


window.onload = function() {
     setInterval(title, 5000);
};