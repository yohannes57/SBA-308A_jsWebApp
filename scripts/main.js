console.log("SBA 308A js web application assignment");
//---------------------------------------------------------------
//dom getElements
let display = document.getElementById("display");
let displayButton = document.getElementById("displayButton");
let search = document.querySelector("#searchInput");
let searchButton = document.querySelector("#searchButton");
let moviesDisplay = document.getElementById("moviesDisplay");

// importing modules
import { btn, elementP, catButton } from "./createElements.js";
import { fetchData, fetchMovies, fetchTheCat, API_KEY } from "./dataFromApi.js";

//---------------------------------------------------------------
// #region handling the fetched data of randomJokeApi
displayButton.addEventListener("click", handleClickEvent);
//button click event handler
async function handleClickEvent() {
  try {
    const data = await fetchData();
    display.innerHTML = " ";
    elementP.textContent = data.joke;
    display.appendChild(elementP);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
  display.appendChild(catButton);
}
// #endregion
//----------------------------------------------------------------
// #region catApi even handling and  implementation
catButton.addEventListener("click", handleClickEventMovies);
//button click event handler
async function handleClickEventMovies() {
  try {
    display.innerHTML = " ";
    let data = await fetchTheCat();
    console.log(data, "...data");
    data.forEach((movies) => {
      let elementImg = document.createElement("img");
      // console.log(movies.url,"...");
      elementImg.src = `${movies.url}`;
      display.appendChild(elementImg);
      display.appendChild(catButton);
      elementImg.addEventListener("mouseover", (e) => {
        e.preventDefault();
        e.stopPropagation();
        elementImg.style.width = "100%";
        elementImg.style.boxShadow = "1px solid black";
      });
      elementImg.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        e.stopPropagation();
        elementImg.style.width = "";
      });
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

display.appendChild(catButton);

//#endregion
//-----------------------------------------------------------------
//#region search the movies by fetched from the movie database api
let currentPage = 1;
document.getElementById("searchButton").addEventListener("click", () => {
  currentPage = 1;
  updateMovies();
});

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateMovies();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  currentPage++;
  updateMovies();
});

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", () => {
  const backToTopButton = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
//-----------
async function updateMovies() {
  const query = document.getElementById("searchInput").value;
  const data = await fetchMovies(query, currentPage);
  console.log(data, ".....");
  displayMovies(data.results);
}
//--------
function displayMovies(movies) {
  let moviesDisplay = document.getElementById("moviesDisplay");
  moviesDisplay.innerHTML = "";
  movies.forEach((movie) => {
    let posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    let movieDiv = document.createElement("div");
    movieDiv.classList.add("movie-poster");
    movieDiv.dataset.id = movie.id;

    let img = document.createElement("img");
    img.src = posterUrl;
    img.alt = movie.name || "Movie Poster";

    movieDiv.appendChild(img);
    moviesDisplay.appendChild(movieDiv);

    movieDiv.addEventListener("click", () => showMovieDetail(movie));
  });
}
function showMovieDetail(movie) {
  let movieDetail = document.getElementById("movieDetail");
  let movieContent = document.getElementById("movieContent");

  let posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  movieContent.innerHTML = `
        <img src="${posterUrl}" alt="${movie.name}">
        <h2>${movie.name}</h2>
        <p>${movie.overview}</p>
        <p><strong>Rating:</strong> ${movie.vote_average}</p>
    `;

  movieDetail.style.display = "block";
}
document.getElementById("closeDetail").addEventListener("click", () => {
  document.getElementById("movieDetail").style.display = "none";
});

updateMovies();
//#endrigion
