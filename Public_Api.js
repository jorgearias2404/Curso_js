//async and await
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>response.json())
// .then((data)=>console.log(data));
async function FetchData(params) 
{
    try
    {
       let response = await fetch('https://jsonplaceholder.typicode.com/posts')//este codigo espera que se resuelva el fecth
       let data = await response.json();
    }catch(error)
    {
       console.log(error);
       
    }
}
const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode",
  ];
  
  async function fetchNewData() {
    try {
      for await (let url of urls) {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  }