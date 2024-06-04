# SBA on Advanced ja concept

## Overview

This project is a simple web application that demonstrates how to fetch data from an API using JavaScript. It showcases basic concepts such as promises, async/await, and module import/export. The fetched data is displayed dynamically on the web page based on user interactions.

## Features

- Fetch data from a public API
- Display the fetched data on the web page
- Modular code structure with separate files for fetching data and handling UI interactions

## Getting Started

### Prerequisites

- A modern web browser
- Internet connection

### Installation

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/yourusername/SBA-308A_jsWebApp.git
   ```

### Usage

1. Open `index.html` in your web browser.
2. Click the "display and movies " button to retrieve and display data from the API.
3. or maybe search the data you want by typing the name in the given input

## Project Structure

- `index.html`: The main HTML file that includes the button and display container.
- `main.js`: The main JavaScript file that handles the click event and DOM manipulation.
- `dataFromApi.js`: A module that contains the function to fetch data from the API.
- `createElements.js`: A module uses to crate different elements for html and css part #dynamically.

## Example Code

### main.js

```javascript
console.log("Project Name: SBA 308A js web application assignment");
let display = document.getElementById("display");
// importing
import { btn, moviesButton } from "./createElements.js";
import { fetchData } from "./dataFromApi.js";

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
```
