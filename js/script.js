let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

  }
}

start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {

  },
  actors: {

  },
  genres: [],
  private: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const firstFilm = prompt('Один из просмотренных фильмов?').trim();
    const ratingFirstFilm = prompt('На сколько вы его оцените?');
    if (firstFilm.length && ratingFirstFilm.length && firstFilm.length < 50) {
      personalMovieDB.movies[firstFilm] = ratingFirstFilm;
      console.log('Done.');
    
    } else {
      i--;
      console.log('Error');
    }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы классический зритель");
  } else if (numberOfFilms > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hiden) {
  if (!hiden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
for (let i = 0; i < 3; i++) {
  let question = prompt(`Ваш любимый жанр под номером ${i+1}`);
  personalMovieDB.genres[i] = question;
}
}

writeYourGenres();




