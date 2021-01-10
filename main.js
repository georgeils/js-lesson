"use strict"

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDb.count = +prompt('How many films have you are seen?', '');

        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt('How many films have you are seen?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDb.count < 10) {
            console.log("You haven't watched many movies");
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log("You are classic watcher");
        } else if (personalMovieDb.count >= 30) {
            console.log("You are cinema man");
        } else {
            console.log("Error occurred");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDb.private) {
            personalMovieDb.private = false;
        } else {
            personalMovieDb.private = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genres by number ${i}`);

            if (genre === '' || genre == null) {
                console.log("You are wrote not correct data");
                i--;
            } else {
                personalMovieDb.genres[i - 1] = genre;
            }
        }
        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - ${item}`);
        });

    }
}

personalMovieDb.writeYourGenres();


