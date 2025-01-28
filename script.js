// console.log(document.documentElement)
// console.log(document.head);
document.getElementById("section--1");
const header = document.querySelector(".header");
const allButtons = document.getElementsByTagName("button");
// console.log(allButtons)
// console.log(document.getElementsByClassName("btn"));

// Creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent =
  "We use cookies for improved functionality and analytics.";
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

header.append(message);
// header.append(message.cloneNode(true))

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

message.style.backgroundColor = "#37383d";

console.log(getComputedStyle(message).backgroundColor);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "blue");

const logo = document.querySelector(".nav__logo");
console.log(logo.alt);

//absolute url - http://
console.log(logo.src);

///relative url
console.log(logo.getAttribute("src"));

//used to store data in hmtl code
console.log(logo.dataset.versionNumber);
