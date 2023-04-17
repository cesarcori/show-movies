// let mykey = "e9f611f2";

let url = "http://www.omdbapi.com/?apikey=e9f611f2&t=batman";

fetch(url)
  .then(response => response.json())
  .then(data => showData(data))
  .catch(error => console.log(error))

let showData = (data) => {
  console.log(data)
}
