const tabs = document.querySelectorAll(".operation__tab");

const tabsContent = document.querySelectorAll(".operations__content");

const tabsContainer = document.querySelector(".operations__tab-container");

tabsContainer.addEventListener("click", function (e) {
  // do your matching strategy to select the correct tab /element

  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  clicked.classList.add("operations__tab--active");

  console.log(clicked.dataset.tab);

  //this from addded data-tab attribute
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

const nav = document.querySelector(".nav");

const hoverHandler = function (e) {
if(e.target.classList.contains("nav__link")){
    const active = e.target

    const sisblings = active.closest(".nav").querySelectorAll(".nav__link")
    console.log(sisblings)

    sisblings.forEach(el => {
        if(el !== active) el.style.opacity = this
    })
}
};


//look into bind later
//creates a copy of function its called on and sets this keyword in funct to param
nav.addEventListener("mouseover", hoverHandler.bind(0.5));

nav.addEventListener("mouseout", hoverHandler.bind(1))
