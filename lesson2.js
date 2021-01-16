"use strict"

//console.log(document.body.childNodes);
//console.log(document.querySelector('#current').parentElement);

//console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}

window.addEventListener('DOMContentLoaded', () => {
   const box = document.querySelector('.box');

   box.addEventListener('touchstart', (e) => {
       e.preventDefault();

       console.log('Start');
   });

   box.addEventListener('touchmove', (e) => {
       e.preventDefault();

       console.log('Move');
   });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");