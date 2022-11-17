const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

if (numberOfFilms < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
  alert("Вы классический зритель");
} else if (numberOfFilms > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {

  },
  actors: {

  },
  genres: [],
  private: false
};



for (let i = 0; i < 2; i++) {
const firstFilm = prompt('Один из просмотренных фильмов?');
const ratingFirstFilm = prompt('На сколько вы его оцените?');
if (firstFilm.length && ratingFirstFilm.length && firstFilm.length < 50) {
  personalMovieDB.movies[firstFilm] = ratingFirstFilm;

} else {
  i--;
}

}





console.log(personalMovieDB);


