// let mykey = "e9f611f2";

const myButton = document.getElementById('fetch');
myButton.addEventListener('click', fetchInfo);

function fetchInfo() {

  let searchMain = document.getElementById('search-main').value;
  console.log(searchMain)

  // let url = "http://www.omdbapi.com/?apikey=e9f611f2&s=batman";
  let url = "http://www.omdbapi.com/?apikey=e9f611f2&s=" + searchMain;

  fetch(url)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => console.log(error))

}

let showData = (data) => {
  // console.log(data.Search[0])
  let body = "";
  for ( let i=0; i < data.Search.length; i++) {

    body += `
      
      <div id="movie">
          <img src="${data.Search[i].Poster}" />
          <p>Título <span class="text-title" id="title">${data.Search[i].Title}</span></p>
          <p>Año <span  class="text-result">${data.Search[i].Year}</span></p>
          <p>Tipo: <span  class="text-result">${data.Search[i].Type}</span></p>
      </div>
    `

  };

  document.getElementById("show").innerHTML = body;

}

// console.log(document.querySelectorAll("span.text-title"));

const searchTitle= document.getElementById("search-title");

searchTitle.addEventListener ('keyup', event => {
  // let currentValue = event.target.value.toLowerCase();
  let currentValue = event.target.value.toLowerCase();
  let movies = document.querySelectorAll("span.text-title");

  movies.forEach(movie=> {
    if (movie.textContent.toLowerCase().includes(currentValue)) {
      movie.parentNode.parentNode.style.display = 'block';

    } else {
      movie.parentNode.parentNode.style.display = 'none';
    }

  });

});


