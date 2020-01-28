function run() {
    let x = document.getElementById('input').value;
    document.getElementById('output').innerHTML=x;
}

function reset() {
    window.location.replace(window.location.href);
}

function chnage() {
    document.getElementById('sidebar').classList.toggle('w3-dark-gray');
    document.getElementById('main').classList.toggle('w3-dark-gray');
    document.getElementById('input').classList.toggle('w3-dark-gray');
    document.getElementById('nav').classList.toggle('w3-dark-gray');
    document.getElementById('body').classList.toggle('w3-dark-gray');
    document.getElementById('one').classList.toggle('w3-text-pink');
    document.getElementById('two').classList.toggle('w3-text-pink');
    document.getElementById('three').classList.toggle('w3-text-pink');
    document.getElementById('four').classList.toggle('w3-text-pink');
    document.getElementById('five').classList.toggle('w3-text-pink');
    document.getElementById('six').classList.toggle('w3-text-pink');
}