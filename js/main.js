// document.getElementById('print').innerHTML = "something important";
// document.getElementById('print').insertAdjacentHTML('beforeend', "something added");

function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }

var ds = "Daniel Salazar";
var time = new Date().getHours() + ":" + new Date().getMinutes();
var hello = document.getElementById('hello');
hello.innerHTML = "Hola mundo soy " + ds + "\nSon las " + time;