// let mykey = "e9f611f2";

let url = "http://www.omdbapi.com/?apikey=e9f611f2&t=batman";

fetch(url)
  .then(response => response.json())
  .then(data => showData(data))
  .catch(error => console.log(error))

let showData = (data) => {
  console.log(data.Search[0].Title)
  let body = "";
  for ( let i=0; i < data.Search.length; i++) {

    body += `
      
      <div id="movie">
        <p>Título <span class="text-result">${data.Search[i].Title}</span></p>
        <p>Año <span  class="text-result">${data.Search[i].Year}</span></p>
        <p>Tipo: <span  class="text-result">${data.Search[i].Type}</span></p>
        <img src="${data.Search[i].Poster}" />
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


