const menuBtn = document.querySelector('.menu-btn')
const menu = document.getElementById("menu");
const menuLinks = document.getElementById("links")

menuBtn.addEventListener('click', () => {
  toggleMenu();
});

function toggleMenu() {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('open');
  menuLinks.classList.toggle('open');
}

// Get the theme toggle input
const themeToggle = document.getElementById("theme-checkbox");

// Get the current theme from local storage
const currentTheme = localStorage.getItem("theme");// If the current local storage item can be found
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute("data-theme", currentTheme);// If the current theme is dark, check the theme toggle
  if (currentTheme === "dark") {
    themeToggle.checked = true;
  }
}
// Function that will switch the theme based on the if the theme toggle is checked or not
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");

    // Set the user's theme preference to dark
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");

    // Set the user's theme preference to light
    localStorage.setItem("theme", "light");
  }
}
// Add an event listener to the theme toggle, which will switch the theme
themeToggle.addEventListener("change", switchTheme, false);

const menuCloseButton = document.getElementById("menu-close-button");
menuCloseButton.addEventListener("click", () => {
  toggleMenu();
})

const jumpToTop = document.getElementById("jump-to-top");
window.addEventListener("scroll", event => {
  if (window.scrollY > 1400) {
    jumpToTop.style.opacity = "1"
  } else {
    jumpToTop.style.opacity = "0"
  }
});