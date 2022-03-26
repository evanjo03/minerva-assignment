function onHamburgerClick() {
  var x = document.getElementById("hamburger__menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
