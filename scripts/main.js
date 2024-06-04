console.log("SBA 308A js web application assignment");
//---------------------------------------------------------------
//dom getElements
let display = document.getElementById("display");
let displayButton = document.getElementById("displayButton");
let search = document.querySelector("#searchInput");
let searchButton=document.querySelector('#searchButton')

// importing modules
import { btn,elementP, catButton } from "./createElements.js";
import { fetchData, fetchMovies ,fetchTheCat} from "./dataFromApi.js";
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
    display.innerHTML=" "
    let data = await fetchTheCat();
    console.log(data, "...data");
    data.forEach((movies) => {
      let elementImg = document.createElement("img");
      // console.log(movies.url,"...");
      elementImg.src = `${movies.url}`;
      display.appendChild(elementImg);
      display.appendChild(catButton);
      elementImg.addEventListener('mouseover',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        elementImg.style.width='100%';
        elementImg.style.boxShadow='1px solid black'
      })
      elementImg.addEventListener('mouseleave',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        elementImg.style.width='';
      })
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

display.appendChild(catButton);

//#endregion
//-----------------------------------------------------------------
//#region search the movies by fetched from the movie database api
searchButton.addEventListener('click',searchHandler);
 async function searchHandler(){
  const data = await fetchData();
  try {
let valueSelected=search.value;
// console.log(valueSelected,"value selected ")//worked
// if(valueSelected==data.title)
console.log(data[valueSelected]);

  } catch (error) {
    console.log(error);
  }
}

//#endregion
//-----------------------------------------------------------------
//#region code for later 

// let currentIndex = 0;
// let itemsPerPage = 2;
// async function handleClickEvent() {
//   try {
//     const data = await fetchData();
//     // if (data && Array.isArray(data)) {
//     //   const datas = data;
//     //     console.log(datas, " ..datas");
//       display.innerHTML = " ";

//       // const nextItems = data.slice(currentIndex, currentIndex + itemsPerPage);
//       //   console.log(nextItems, "....nextItems");
//       // data.forEach((item) => {
//         let elementP = document.createElement("p");
//         elementP.textContent = data.joke;
//         display.appendChild(elementP);
//       // });
//       // currentIndex += itemsPerPage;

//       // if (currentIndex >= data.length) {
//       //   displayButton.disabled = true;
//       //   console.log("All items have been displayed.");
//       // }
//     // } else {
//     //   display.innerHTML = "no data avaliable";
//     // }
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//   }
//   display.appendChild(catButton);
// }

//#endregion