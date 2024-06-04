# Data Fetching Demo

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
   git clone https://github.com/yourusername/data-fetching-demo.git
   ```
2. Navigate to the project directory:
   ```sh
   cd data-fetching-demo
   ```

### Usage

1. Open `index.html` in your web browser.
2. Click the "Fetch Data" button to retrieve and display data from the API.

## Project Structure

- `index.html`: The main HTML file that includes the button and display container.
- `main.js`: The main JavaScript file that handles the click event and DOM manipulation.
- `dataFetcher.js`: A module that contains the function to fetch data from the API.

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
