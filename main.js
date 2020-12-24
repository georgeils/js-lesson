"use strict"

const numberOfFilms = +prompt('How many films have you are seen?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const a = prompt('One of the last viewed movies?', ''),
    b = prompt('How much do you rate?', ''),
    c = prompt('One of the last viewed movies?', ''),
    d = prompt('How much do you rate?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);