"use strict";

const numberOfFilm = prompt("How many movies have you seen so far ?", "");
const personalMovieDB = {
  count: numberOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("One of the last you saw ?", "");
  const b = prompt("How much do you rate this movies ?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("Error");
    i--;
  }
}
if (personalMovieDB.count < 10) {
  console.log("Few movies.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You are a classic viewer.");
} else if (personalMovieDB.count >= 30) {
  console.log("You're a movie buff");
} else {
  console.log("Error");
}
console.log(personalMovieDB);
