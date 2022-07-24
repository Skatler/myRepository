"use strict";

const numberOfFilms = +prompt("How many movies have you seen?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const questionOne = prompt("One of the last movies you watched?", "");
const questionTwo = prompt("How much do you rate this movie?", "");
const questionThree = prompt("One of the last movies you watched?", "");
const questionFour = prompt("How much do you rate this movie?", "");

personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionThree] = questionFour;

console.log(personalMovieDB);
