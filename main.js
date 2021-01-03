"use strict"


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you are seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you are seen?', '');
    }
}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last viewed movies?', ''),
            b = prompt('How much do you rate?', '');

        if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log("You haven't watched many movies");
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log("You are classic watcher");
    } else if (personalMovieDb.count >= 30) {
        console.log("You are cinema man");
    } else {
        console.log("Error occurred");
    }
}

//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

showMyDB(personalMovieDb.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDb.genres[i - 1] = prompt(`Your favorite genres by number ${i}`);
    }
}

writeYourGenres();


