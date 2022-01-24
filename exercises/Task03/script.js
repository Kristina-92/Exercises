
let colorOfBody = document.getElementById('body');

let a = Math.floor(Math.random()*255);
let b = Math.floor(Math.random()*255);
let c = Math.floor(Math.random()*255);

document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

document.getElementById('text').innerText = `${a}, ${b}, ${c}`;