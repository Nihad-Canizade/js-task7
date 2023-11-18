// Section 1
let firstname = document.getElementById('firstName');
let lastname = document.getElementById('lastName');
let age = document.getElementById('age');
let btn = document.getElementById('btn');
let tr2 = document.getElementById('tr2');

btn.addEventListener('click', () => {
    let td = document.createElement('td');
    td.innerHTML = firstname.value;
    tr2.append(td);
})




// Section 2
let btnblue = document.getElementById('colorBlue');
let btnred = document.getElementById('colorRed');
let btngreen = document.getElementById('colorGreen');
let btnyellow = document.getElementById('colorYellow');
let btnpurple = document.getElementById('colorPurple');
let btnblack = document.getElementById('colorBlack');
let box = document.getElementById('box');

btnblue.addEventListener('click', () => {
    box.style.backgroundColor = "blue";
});

btnred.addEventListener('click', () => {
    box.style.backgroundColor = "red";
});

btngreen.addEventListener('click', () => {
    box.style.backgroundColor = "green";
});

btnyellow.addEventListener('click', () => {
    box.style.backgroundColor = "yellow";
});

btnpurple.addEventListener('click', () => {
    box.style.backgroundColor = "purple";
});

btnblack.addEventListener('click', () => {
    box.style.backgroundColor = "black";
});