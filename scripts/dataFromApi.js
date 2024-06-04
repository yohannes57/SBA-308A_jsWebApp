async function fetchData() {
  let data;
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    });
    //   console.log(response);
    data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
  return data;
}
//------------------------------------------------------------------------------
// #region fetching movies second example
const api_key = "4a8a6e882dfe23d4066d963ccb7b3c72";
// https://api.themoviedb.org/3/movie/11?api-key4a8a6e882dfe23d4066d963ccb7b3c72
//     const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4a8a6e882dfe23d4066d963ccb7b3c72)
const url = `https://api.themoviedb.org/3/movie/11?api_key=${api_key}`;
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
//---------------------------------------
// exports

export { fetchData, fetchMovies };
// // export let name = "yohannes";
