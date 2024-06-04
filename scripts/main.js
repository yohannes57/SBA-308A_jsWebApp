console.log("SBA 308A js web application assignment");
//-------------------------------------------------------

//dom getElements
let display = document.getElementById("display");
let displayButton = document.getElementById("displayButton");
let search = document.querySelector("input");

// importing modules
import { btn, moviesButton } from "./createElements.js";
import { fetchData, fetchMovies } from "./dataFromApi.js";

//-------------------------------------------------------
// #region handling the fetchedData
//event handling
displayButton.addEventListener("click", handleClickEvent);
//button click event handler
let currentIndex = 0;
let itemsPerPage = 10;
async function handleClickEvent() {
  try {
    const data = await fetchData();
    if (data && Array.isArray(data)) {
      const datas = data;
      //   console.log(datas, " ..datas");
      display.innerHTML = " ";

      const nextItems = datas.slice(currentIndex, currentIndex + itemsPerPage);
      //   console.log(nextItems, "....nextItems");
      nextItems.forEach((item) => {
        let elementP = document.createElement("p");
        elementP.textContent = item.title;
        display.appendChild(elementP);
      });
      currentIndex += itemsPerPage;

      if (currentIndex >= data.length) {
        displayButton.disabled = true;
        console.log("All items have been displayed.");
      }
    } else {
      display.innerHTML = "no data avaliable";
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}
// #endregion
//----------------------------------------------------------
// #region movieData implementation
moviesButton.addEventListener("click", handleClickEventMovies);
//button click event handler
async function handleClickEventMovies() {
  try {
    let data = await fetchMovies();
    console.log(data, "...data");

    data.forEach((movies) => {
      let elementP = document.createElement("p");
      elementP.textContent = movies.original_title;
      display.appendChild(elementP);
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}
display.appendChild(moviesButton);
//#endregion
//-----------------------------------------------------------------
