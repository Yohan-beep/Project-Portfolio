const jokeContainer = document.getElementById('joke-container');
const newJokeButton = document.getElementById('new-joke-button');

newJokeButton.addEventListener('click', fetchJoke);

async function fetchJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    displayJoke(data.value);
  } catch (error) {
    console.log('Error:', error);
  }
}

function displayJoke(joke) {
  jokeContainer.innerHTML = `<p>${joke}</p>`;
}

// Sidebar
const menuToggle = document.querySelector('.toggle')
      const showcase = document.querySelector('.showcase')

      menuToggle.addEventListener('click', () => {
         menuToggle.classList.toggle('active')
         showcase.classList.toggle('active')
      })