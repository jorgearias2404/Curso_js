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