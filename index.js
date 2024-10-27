console.log(document); 
const heading = document.querySelector("h1"); 
console.log(heading);

const descriptions = document.querySelectorAll(".description-display"); 

for (let desc of descriptions.values()) { 
    let content = desc.innerText;
    console.log(content); 

if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + "...";
  } 
  desc.innerText = content;

  console.log(content);
} 

const ratings = document.querySelectorAll(".rating-display .value"); 
for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText); 

    if (ratingValue > 4.7) {
        rating.classList.add("high-rating"); 
        rating.classList.remove("value");
      }
    console.log(ratingValue);
  } 

  const parks = document.querySelectorAll(".park-display"); 
  const numberParks = parks.length; 
  const newElement = document.createElement("div"); 
  newElement.innerText = `${numberParks} exciting parks to visit`; 

  newElement.classList.add("header-statement"); 

const header = document.querySelector("header");
header.appendChild(newElement);

//code to remove element from DOM  
// const main = document.querySelector("main");
// const park = main.querySelector(".park-display");
//main.removeChild(park); 

const firstBtn = document.querySelector("button"); 
firstBtn.addEventListener("click", (event) => { 
  console.log("You clicked the button", event);
});  

const allBtns = document.querySelectorAll(".rate-button"); 
allBtns.forEach((btn) => { 
  btn.addEventListener("click", (event) => { 
    console.log(event.target);
  });
}); 
allBtns.forEach((btn) => { 
  btn.addEventListener("click", (event) => { 
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
}); 

const nameSorter = document.querySelector("#name-sorter"); 
nameSorter.addEventListener("click", (event) => { 
  event.preventDefault();
  console.log("You clicked the name sorter");
});  

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");