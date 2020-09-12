const form = document.querySelector('.movie-form');
const searchInput = document.getElementById('searchInput');
const moviesList = document.querySelector('.movies-list')
const KEY = 'a346feec';


const createMovie = (movie) => {
  const element = document.createElement('article');
  element.classList.add('movie-item')
  element.innerHTML = `
    <p>${movie.Title}</p>
    <p>${movie.Year}</p>
    <img class='poster' src=${movie.Poster}>
  `;
  moviesList.appendChild(element)
};

const setBackToDefault = () => {
  searchInput.value = '';
}

async function search(searchQuery) {
  try {
    const apiLink = `http://www.omdbapi.com/?s=${searchQuery}&apikey=${KEY}`;
    const result = await fetch(apiLink);
    const data = await result.json();
    console.log(data)
    console.log(data.Search)
    let movies = data.Search;
    movies.forEach(movie => {
      console.log(movie.Title)
      createMovie(movie);
    })
    return data;
  } catch(error) {
    console.log(error)
  }
}

const clearItems = () => {
  const movies = document.querySelectorAll('.movie-item');
  movies.forEach(movie => {
    moviesList.removeChild(movie)
  })
}

const showResults = e => {
  e.preventDefault()
  
  clearItems();
  search(searchInput.value);
  setBackToDefault();
  
}

// Event Listeners
form.addEventListener('submit', showResults)
