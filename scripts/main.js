console.log("SBA 308A js web application assignment");
//-------------------------------------------------------
let display = document.getElementById("display");
// importing
import { btn, moviesButton } from "./createElements.js";
import { fetchData } from "./dataFromApi.js";

//-------------------------------------------------------
btn.addEventListener("click", handleClickEvent);
//button click event handler
async function handleClickEvent() {
  try {
    const data = await fetchData();
    data.forEach((item) => {
      let elementP = document.createElement("p");
      elementP.textContent = item.title;
      display.appendChild(elementP);
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}
display.appendChild(btn);
//----------------------------------------------------------
// #region movieData implementation
// moviesButton.addEventListener("click", handleClickEventMovies);
// //button click event handler
// async function handleClickEventMovies() {
//   try {
//     let data = await fetchMovies();
//     let moviesData = await data.json();
//     console.log(moviesData, ",,,");
//     moviesData.forEach((movies) => {
//       let elementP = document.createElement("p");
//       elementP.textContent = movies.title;
//       display.appendChild(elementP);
//     });
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//   }
// }
// display.appendChild(moviesButton);

//#endregion
//-----------------------------------------------------------------
