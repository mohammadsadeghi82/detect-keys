let body = document.querySelector('body');
let aski = document.querySelector('.aski');
let key_name = document.querySelector('.key-name');
let Key = document.querySelector('.Key');
let Code = document.querySelector('.Code');


function detectKey(event) {
    aski.innerHTML = event.keyCode;
    key_name.innerHTML = event.key.toUpperCase();
    Key.innerHTML = event.keyCode;
    Code.innerHTML = event.key.toLowerCase();
}

body.addEventListener('keyup',detectKey);