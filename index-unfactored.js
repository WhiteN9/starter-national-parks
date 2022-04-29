//20-5

const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click",(evt) => {
    console.log("You clicked the button", evt.target);
    console.log("You clicked the button", evt);
});

// This is especially useful when you attach the same handler to multiple elements.
// For example, you may want to highlight a park
// when the button associated with that park is clicked.
// You could attach the same event handler to each of these buttons.

// const allBtns = document.querySelectorAll(".rate-button");
// allBtns.forEach((btn) => {
//     btn.addEventListener("click",(event)=>{
//         console.log(event);
//         console.log(event.target);
//         console.log(event.target.parentNode);
//     })
// })

const allBtns = document.querySelectorAll(".rate-button");
allBtns.forEach((btn) => {
    btn.addEventListener("click",(event)=>{
        console.log(event)
        const park = event.target.parentNode;
        park.style.backgroundColor = "#c8e6c9"; //rgb(200, 230, 201)
    })
})

//Say we want to sort the list of parks displayed on the page by name or rating.
//First, add two links and allow user to click whichever one.
//Then get a list of parks from the DOM
//Perform a sort on the list
//Insert the packs back int othe DOM in the new order.
//Let's write it
//Select the 'nameSorter' link
const nameSorter = document.querySelector("#name-sorter");
//Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault(); //We don't want it to refresh right after clicking
  //By default, normally we do because it leads to another address.
  console.log("You clicked the name sorter");
  //1. Get the main element
  const main = document.querySelector("main");
  //2. Get the list of the parks
  const parksLi = main.querySelectorAll(".park-display");
  //3. Empty the main element
  main.innerHTML = "";
  //removed the main from DOM but still exists and can be referenced
  //4. Create an array
  const parksArray = Array.from(parksLi);
  //5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });
  //6. Append each park element back to the empty main element;
  //6. Insert each park into the DOM;
  parksArray.forEach((park) => {
      main.appendChild(park);
  })
});

//Now do the same for rating but keep it cleaner
// Function for sorting by name
const sortByRating = (parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating-display .value").innerText; 
    const parkBRating = parkB.querySelector(".rating-display .value").innerText;
    if(parkARating < parkBRating) {
        return -1;
    } else if (parkARating > parkBRating) {
        return 1;
    } else {
        return 0;
    }
};

// Function for handling the 'ratingSorter' click
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

// Select the 'ratingSorter' link
const ratingSorter = document.querySelector("#rating-sorter");

// Add an event listener
ratingSorter.addEventListener("click",ratingSorterClickHandler);
