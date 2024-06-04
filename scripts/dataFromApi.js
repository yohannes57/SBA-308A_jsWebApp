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
// async function fetchMovies() {
//   try {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWUwYWRjZTFjY2Q4ZjU5NjI4MWY1ZWM5Y2E2ZTJmZSIsInN1YiI6IjYzOWJjZGEyMDc1Mjg4MDBkMmI5ZGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vLxKQIL_PO1o5jUFe_keGqn0unHAFwQ9xngSWIt6NNU",
//       },
//     };

//     let response = await fetch(
//       "https://api.themoviedb.org/3/authentication",
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         return response;
//       })
//       .catch((err) => console.error(err));
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }
//#endregion
//---------------------------------------
// exports

export { fetchData };
// // export let name = "yohannes";
