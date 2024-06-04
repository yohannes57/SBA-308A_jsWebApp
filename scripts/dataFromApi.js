//data fetching from different api 
//----------------------------------------
//#region jokeApi fetching
async function fetchData() {
  let data;
  // https://icanhazdadjoke.com/search
  // https://jsonplaceholder.typicode.com/todos
  try {
    let response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers:{
        accept:"application/json"
      }
    });
    //   console.log(response);
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return data;
}
//#endregion
//------------------------------------------------------------------------------
// #region fetching catImage from thecatapi --- second example
async function fetchTheCat() {
  let data;
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search",
      options
    );
    // console.log(response, "....");
    data = await response.json();
    console.log(data, "..data");
  } catch (error) {
    console.log(error);
  }
  return data;
}
//#endregion
//-----------------------------------------------------------------------------
//#region search and fetch the match movie and display it

// const api_key = "4a8a6e882dfe23d4066d963ccb7b3c72";
// https://api.themoviedb.org/3/movie/11?api-key4a8a6e882dfe23d4066d963ccb7b3c72
//const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4a8a6e882dfe23d4066d963ccb7b3c72)
// const url = `https://api.themoviedb.org/3/movie/11?api_key=${api_key}`;

async function fetchMovies() {
  let data;
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search",
      options
    );
    // console.log(response, "....");
    data = await response.json();
    console.log(data, "..data");
  } catch (error) {
    console.log(error);
  }
  return data;
}
//#endregion
//-----------------------------------------------------------------------------
// exports
export { fetchData, fetchTheCat ,fetchMovies};
