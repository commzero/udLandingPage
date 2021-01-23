/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let unorderedList = document.getElementById("unordered-list");
let containerCount = document.getElementsByClassName("landing__container").length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const scrollToTop = () => {
  const scrolling = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrolling > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrolling - scrolling / 50);
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (i = 1; i < containerCount + 1; i++) {
  let item = "#section" + i + "-title";
  let itemValue = document.querySelector(item);
  let itemText = itemValue.textContent;
  let newLine = document.createElement("li");
  let lineText = document.createTextNode(itemText);
  let listItem = "sample-nav-" + i;
  newLine.setAttribute("id", listItem);
  newLine.setAttribute("class", "nav-list-item");
  newLine.appendChild(lineText);
  unorderedList.appendChild(newLine);

  let itemTarget = document.getElementById("section" + i);
  let listTarget = document.getElementById(listItem);
  let buttonName = "section" + i + "-button";
  let buttonToAdd = document.getElementById(buttonName);

  //Adds button when scrolls into view

  listTarget.addEventListener("click", function () {
    itemTarget.scrollIntoView({
      behavior: 'smooth'
    }
    )
    //Added behavior smooth as per review. There is now a visible scroll
    buttonToAdd.innerHTML =
      "<button class='section-button' onclick='goToTop()'>Return to Top</button>";
  });
}
// Add class 'active' to section when near top of viewport
function checkIfSectionInView() {
  let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i < containerCount + 1; i++) {
    let sectionInFullView = document.getElementById("section" + i);

    window.addEventListener(
      "scroll",
      function (event) {
        if (isInViewport(sectionInFullView)) {
          sectionInFullView.classList.add("your-active-class");
        } else {
          sectionInFullView.classList.remove("your-active-class");
        }
      },
      false
    );
  }
}

// Scroll to anchor ID using scrollTO event
function goToTop() {
  scrollToTop();
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// Set sections as active
checkIfSectionInView();