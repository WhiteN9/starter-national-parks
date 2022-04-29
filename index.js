//20-5

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click",(evt) => {
//     console.log("You clicked the button", evt.target);
//     console.log("You clicked the button", evt);
// });

//This is especially useful when you attach the same handler to multiple elements.
//For example, you may want to highlight a park 
// when the button associated with that park is clicked.
//You could attach the same event handler to each of these buttons.

// const allBtns = document.querySelectorAll(".rate-button");
// allBtns.forEach((btn) => {
//     btn.addEventListener("click",(event)=>{
//         console.log(event);
//         console.log(event.target);
//         console.log(event.target.parentNode);
//     })
// })

// const allBtns = document.querySelectorAll(".rate-button");
// allBtns.forEach((btn) => {
//     btn.addEventListener("click",(event)=>{
//         console.log(event)
//         const park = event.target.parentNode;
//         park.style.backgroundColor = "#c8e6c9"; //rgb(200, 230, 201)
//     })
// })

//Say we want to sort the list of parks displayed on the page by name or rating.
//First, add two links and allow user to click whichever one.
//Then get a list of parks from the DOM
//Perform a sort on the list
//Insert the packs back int othe DOM in the new order.
//Let's write it
//Select the 'nameSorter' link
const nameSorter = document.querySelector("#name-sorter");
//Add an event listener
nameSorter.addEventListener("click", (event) =>{
    event.preventDefault(); //We don't want it to refresh right after clicking
    //By default, normally we do because it leads to another address.
    console.log("You clicked the name sorter");
    const 
})


//20-4

// const descriptions = document.querySelectorAll(".description-display");
// console.log(descriptions)

// for (let desc of descriptions.values()) {
//     // let content2 = desc.innerHTML;
//     let content = desc.innerText;
//     // console.log(content2);
//     if(content.length > 250) {
//         content = content.slice(0,250);
//         content = content + '<a href="#">...</a>';
//     }
//     console.log(content);
//     desc.innerText = content;
//   }

// for (let desc of descriptions.values()) {
//   let content = desc.innerText;
//   console.log(desc.innerHTML);
//   if (content.length > 250) {
//     content = content.slice(0, 250);
//     content = content + '<a href="#">...</a>';
//   }
//   desc.innerHTML = content;
//   console.log("yo", desc.innerHTML);
// }

// const ratings = document.querySelectorAll(".rating-display .value");
// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);
//   console.log(ratingValue);
// }

// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);
//   if (ratingValue > 4.7) {
//     rating.style.fontWeight = "bold";
//     rating.style.color = "#3ba17c";
//   }
// }

// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);
//   if (ratingValue > 4.7) {
//     rating.classList.add("high-rating");
//     rating.classList.remove("value");
//   }
// }

// const parks = document.querySelectorAll(".park-display");

// const numberParks = parks.length;

// const newElement = document.createElement("div");

// newElement.innerText = `${numberParks} exciting parks to visit`;
// newElement.classList.add("header-statement");

// const header = document.querySelector("header");
// header.appendChild(newElement);

// // Get the parent element of all parks
// const main = document.querySelector("main");
// console.log(main);

// // Select a single park
// const park = main.querySelector(".park-display");

// // Remove that park
// main.removeChild(park);

//20-3
// console.log(document);

// const heading = document.querySelector("h1");
// console.log(heading);

// const section = document.querySelector("div.description-display");
// console.log(section);

// const value = document.querySelector(".value");
// console.log(value);

// const button = document.querySelector("button");
// console.log(button);

// const area = document.querySelector(".area-display");
// console.log(area);

// const div = document.querySelector(".stat");
// console.log(div);

// const hello = document.querySelector(".hello");
// console.log(hello);

// const allSection = document.querySelectorAll("section");
// console.log(allSection);

// const ratingValue = document.querySelectorAll("div.rating-display div.value");
// // console.log(ratings);
// // for (let element of ratings) {
// //     console.log(element)
// //     console.log(element.outerText);
// // }
// // This will log the element and the text of that element

// for (let element of ratingValue.values()) {
//     console.log(element)
//     console.log(element.outerText);
// }

// const areaValue = document.querySelectorAll("div.area-display div.value");

// for (let i =0; i<areaValue.length; i++) {
//     console.log(areaValue[i]);
//     console.log(areaValue[i].outerText);
// }

//In older browsers, may need to Array.prototype.forEach() method or something alike
//NodeList may not be supported
