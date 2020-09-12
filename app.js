const form = document.querySelector('.movie-form');
const movie = document.getElementById('movie');

const KEY = 'a346feec'


async function search(searchQuery) {
  try {
    const apiLink = `http://www.omdbapi.com/?s=${searchQuery}&apikey=${KEY}`;
    const result = await fetch(apiLink);
    const data = await result.json();
    console.log(data)
    return data;
  } catch(error) {
    console.log(error)
  }
}

const showResults = e => {
  e.preventDefault()
  const searchInput = movie.value;
  search(searchInput)
}

// Event Listeners
form.addEventListener('submit', showResults)
