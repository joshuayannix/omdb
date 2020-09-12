// add event listener to the search results

// submit the form, make api call, create html elements for the search results

// first make an api call

// Select Items

const form = document.querySelector('.movie-form');

const apiLink = `http://www.omdbapi.com/?i=tt3896198&apikey=a346feec`;

async function search(api) {
  try {
    const result = await fetch(api);
    const data = await result.json();
    console.log(data)
  } catch(error) {
    console.log(error)
  }
}

const showResults = e => {
  e.preventDefault()
  search(apiLink)
}

// Event Listeners
form.addEventListener('submit', showResults)
