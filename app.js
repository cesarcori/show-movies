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

      // <tr>
      //   <td class="name">${data[i].name.official}</td>
      //   <td>${data[i].capital}</td>
      //   <td>${data[i].continents}</td>
