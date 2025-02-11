//fires when html is parsed and all scripts are downloaded and executed
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("🚀 ~ page parsed:", e);
});



//fires when all resources are loaded i.e images, css, e.t.c
window.addEventListener("load", function (e) {
  console.log("Page fully loaded" ,e);
});


window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
 
});