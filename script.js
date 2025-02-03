const h1 = document.querySelector("h1");

console.log(h1.querySelectorAll(".highlight"));

//returns node list of h1
console.log(h1.childNodes);

//returns html collection of html children
console.log(h1.children);

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

console.log(h1.parentNode);
console.log(h1.parentElement);

//closest parent/ element no matter where in the dom tree
h1.closest(".header").style.background = "var(--gradient-secondary)";

console.log(h1.previousElementSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
