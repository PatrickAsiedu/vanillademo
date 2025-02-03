const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  // 1
  this.style.backgroundColor = randomColor(); // 2
  console.log("LINK", e.target, e.currentTarget); // 3
  console.log(e.currentTarget === this); // 4
  // Stop propagation
  e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  // 5
  this.style.backgroundColor = randomColor(); // 6
  console.log("CONTAINER", e.target, e.currentTarget); // 7
});
