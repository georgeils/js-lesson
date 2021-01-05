"use strict"

function first() {
setTimeout(function () {
    console.log(1);
}, 500);
}

first();

function second() {
    console.log(2);
}

second();

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('I passed this lesson');
}

learnJS('JavaScript', done);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'green'
    },
    makeTest: function () {
        console.log("Make Test");
    }
}

console.log(Object.keys(options).length);

/*for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Option: ${i} is colors ${options[key][i]}`);
        }
    } else {
        console.log(`Option: ${key} is ${options[key]}`);
    }
}*/

const {border, bg} = options.colors;
console.log(border);

options.makeTest();


// arrays

const arr = [2, 3, 6, 8, 10];

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} into array ${arr}`);
});

/*const str = prompt("", "");
const products = str.split(", ");
console.log(products);*/

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
}

const newObject = Object.assign(numbers, add);
console.log(newObject);

//newObject.c.x = 255;

console.log(newObject);

const clone = Object.assign({}, add);
clone.d = 21;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

console.log(newArray);

const newNumb = { ...numbers };
console.log(newNumb);
newNumb.c.x = 255;

const soldier = {
    health: 400,
    armor: 100,
    sayHallo: function () {
        console.log('Hello');
    }
}

const john = Object.create(soldier);

console.log(john);

john.sayHallo();