//Refactored

//Declare handler and support functions here

//Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

//Function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parkA.querySelector(".rating-display .value").innerText;
  const parkBRating = parkB.querySelector(".rating-display .value").innerText;
  if (parkARating < parkBRating) {
    return -1;
  } else if (parkARating > parkBRating) {
    return 1;
  } else {
    return 0;
  }
};

//Function for handling the 'nameSorter' click
const nameSorterClickHandler = (event) => {
  event.preventDefault();
  //1. Get the main element
  const main = document.querySelector("main");
  //2. Get the list of the parks
  const parksList = main.querySelectorAll(".park-display");
  //3. Empty the main element
  main.innerHTML = "";
  //removed the main from DOM but still exists and can be referenced
  //4. Create an array
  const parksArray = Array.from(parksList);
  //5. Sort the array
  parksArray.sort(sortByName);
  //6. Insert each park into the DOM;
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

const ratingSorterClickHandler = (event) => {
  event.preventDefault();
  // 1. get the main element
  const main = document.querySelector("main");
  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  // 3. empty the main
  main.innerHTML = "";
  // 4. create an array
  const parksArray = Array.from(parksList);
  // 5. sort the array
  parksArray.sort(sortByRating);
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// The code that runs once the DOM is loaded

const main = () => {
  //Select the 'nameSorter' link
  const nameSorter = document.querySelector("#name-sorter");

  //Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  //Select the 'nameSorter' link
  const ratingSorter = document.querySelector("#rating-sorter");

  //Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
};

window.addEventListener("DOMContentLoaded", main);