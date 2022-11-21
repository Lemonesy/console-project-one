
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    }
},
  rememberMyFilms: function() {
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
},
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: function(hiden) {
    if (!hiden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function() {
    
    for (let i = 0; i < 3; i++) {
      let question = prompt(`Ваш любимый жанр под номером ${i+1}`);
      if (question == null || question === '') {
        console.log('Вы ввели неверные данные');
         i--;
      } else {
        personalMovieDB.genres[i] = question;
      }
    }
    personalMovieDB.genres.forEach(function(genr, i) {
      console.log(`Любимый жанр #${i+1} - это ${genr}`);
    });
    },
  toggleVisibleMyDB: function() {
     if (personalMovieDB.private) {
      personalMovieDB.private = false;
     } else {
      personalMovieDB.private = true;
     }
  }
  };
