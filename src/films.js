// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((movie) => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((movie) => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const result = array.filter((movie) => movie.director.includes(director));
  const arrayByScore = result.map((movie) => movie.score);
  const average =
    Math.round(
      (arrayByScore.reduce((a, b) => a + b) / arrayByScore.length) * 100
    ) / 100;
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const arrayTitle = array.map((movie) => movie.title);
  const arrayAlfabetico = arrayTitle.sort();
  const arrayPrimeras20 = arrayAlfabetico.slice(0, 20);
  return arrayPrimeras20;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const arrayYear = array.map((movie) => movie.year + ' ' + movie.title);
  const arrayOrdenado = arrayYear.sort();
  return arrayOrdenado;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const arrayByGenre = array.filter(
    (movie) => movie.genre == genre && movie.score !== ''
  );
  const arrayByScore = arrayByGenre.map((movie) => movie.score);
  const average =
    Math.round(
      (arrayByScore.reduce((a, b) => a + b) / arrayByScore.length) * 100
    ) / 100;
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const moviesCopy = array.map((movie) => {
    return { ...movie };
  });
  const newArray = [];
  moviesCopy.map((movie) => {
    const durationMovie = movie.duration;
    let minutes = durationMovie.match(/\d+/g).map(Number);
    let result = minutes[0] * 60 + minutes[1];
    movie.duration = result;
    newArray.push(movie);
    
  });
  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const theBest = array
    .filter((movie) => movie.year === year)
    .sort((a, b) => (a.score < b.score ? 1 : -1));

  return theBest;
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
