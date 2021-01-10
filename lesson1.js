"use strict"

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/*
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'yellow';
}
*/

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
//const text1 = document.createTextNode('This is Node');

div.classList.add('black');
hearts[0].after(div);

//wrapper.appendChild(div);

div.innerHTML = "Hello friends";
