// this is module creates all elements
let elementP = document.createElement("p");
elementP.classList.add("paragraph");

let btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "display";
///
let catButton = document.createElement("button");
catButton.classList.add("cat");
catButton.textContent = "Get your Cat";

export { elementP, btn, catButton };
