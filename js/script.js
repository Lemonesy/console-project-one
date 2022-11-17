const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {

  },
  actors: {

  },
  genres: [],
  private: false
};

const firstFilm = prompt('Один из просмотренных фильмов?');
const ratingFirstFilm = prompt('На сколько вы его оцените?');
const secondFilm = prompt('Один из просмотренных фильмов?');
const ratingSecondFilm = prompt('На сколько вы его оцените?');


personalMovieDB.movies[firstFilm] = ratingFirstFilm;
personalMovieDB.movies[secondFilm] = ratingSecondFilm;

console.log(personalMovieDB);


