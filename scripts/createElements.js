// this is module creates all elements
let elementP = document.createElement("p");
elementP.classList.add("paragraph");
elementP.textContent = "";

let btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "display";
///
let moviesButton = document.createElement("button");
moviesButton.classList.add("movies");
moviesButton.textContent = "movies";

export { elementP, btn, moviesButton };
