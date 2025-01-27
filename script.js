// console.log(document.documentElement)
console.log(document.head);
document.getElementById("section--1");
const header = document.querySelector(".header");
const allButtons = document.getElementsByTagName("button");
// console.log(allButtons)
console.log(document.getElementsByClassName("btn"));

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
