const hamburgerButton = document.querySelector("#hamburger-btn");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerButton.addEventListener("click", () => {
  const display = hamburgerMenu.style.display;
  hamburgerMenu.style.display = display === "flex" ? "none" : "flex";
});

/*Add the match function as a listener for state changes.  
This is to ensure that if the hamburger menu is opened, then the window is resized 
to a resolution where the hamburger menu is replaced with standard anchors, 
the hamburger menu options will disappear. */
window.matchMedia("(min-width: 450px)").addListener((mql) => {
  if (mql.matches) {
    hamburgerMenu.style.display = "none";
  }
});
