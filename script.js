"user strict";

const numberOfFilm = prompt("How many movies have you seen so far ?", "");
const personalMovieDB = {
  count: numberOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastMoviesOne = prompt("One of the last you saw ?", "");
const rateMoviesOne = prompt("How much do you rate this movies ?", "");
const lastMoviesTwo = prompt("One of the last you saw ?", "");
const rateMoviesTwo = prompt("How much do you rate this movies ?", "");

personalMovieDB.movies[lastMoviesOne] = rateMoviesOne;
personalMovieDB.movies[lastMoviesTwo] = rateMoviesTwo;
console.log(personalMovieDB);
