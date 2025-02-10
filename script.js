//implemtenting tabs
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

//implementing hover effect

const nav = document.querySelector(".nav");

const hoverHandler = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const active = e.target;

    const sisblings = active.closest(".nav").querySelectorAll(".nav__link");
    console.log(sisblings);

    sisblings.forEach((el) => {
      if (el !== active) el.style.opacity = this;
    });
  }
};

//look into bind later
//creates a copy of function its called on and sets this keyword in funct to param
nav.addEventListener("mouseover", hoverHandler.bind(0.5));

nav.addEventListener("mouseout", hoverHandler.bind(1));

//sticky navigaition

//bad approach
// const section1 = document.querySelector("#section--1");

// window.addEventListener("scroll", function () {
//   // console.log(this.window.scrollY);

//   if (this.window.scrollY > section1.getBoundingClientRect().top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

//using observer api

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const callback = function (entries, observer) {
  //entries will all instances of the intersection
  // entries.forEach(entry=>{
  //   console.log(entry);
  // })

  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const Options = {
  //element thtat wld intersect with target
  root: null,

  //percentage of intersection / % target that should be visible for callback to be called
  threshold: 0,


  //margin around root element
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(callback, Options);

headerObserver.observe(header);
