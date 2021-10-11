const lang = document.querySelector("#lang").value;

function hello() {

    const olo = document.querySelector("#olo-msg");
    olo.innerHTML = "Hola Mundo";

};

function toggleLang(lang) {
    
    console.log(lang);

    if (lang.value == "ES"){
        lang.innerHTML = "EN";
    };
    
};

window.onload = function() {
    hello();
};