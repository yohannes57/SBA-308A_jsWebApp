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
      headers: {
        accept: "application/json",
      },
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
    // console.log(data, "..data");
  } catch (error) {
    console.log(error);
  }
  return data;
}
//#endregion
//-----------------------------------------------------------------------------
//#region search and fetch the match movie and display ii
const API_KEY = `4a8a6e882dfe23d4066d963ccb7b3c72`;
async function fetchMovies(query, page = 1) {
  let data;
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    let url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&page=${page}`;
    if (query) {
      url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}&page=${page}`;
    }
    let response = await fetch(url, options);
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  return data;
}
//#endregion
//-----------------------------------------------------------------------------
// exports
export { fetchData, fetchTheCat, fetchMovies, API_KEY };
