const hamburgerButton = document.querySelector("#hamburger-btn");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const input = document.querySelector("#email-input");
const button = document.querySelector("#submit-btn");

input.addEventListener("input", () => {
  /* Leveraging the built-in html email validation, which uses the following regex:
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  */
  button.disabled = !input.checkValidity();
});

button.addEventListener("click", () => {
  if (!input.checkValidity()) return;

  alert(`The email to submit is "${input.value}".`);
  input.value = "";
  button.disabled = true;
});

hamburgerButton.addEventListener("click", () => {
  const display = hamburgerMenu.style.display;
  hamburgerMenu.style.display = display === "flex" ? "none" : "flex";
});

/* This is to ensure that if the hamburger menu is opened and the window is resized 
to a resolution where the hamburger menu is replaced with standard anchors, 
the hamburger menu options will disappear. */
window.matchMedia("(min-width: 768px)").addListener((mql) => {
  if (mql.matches) {
    hamburgerMenu.style.display = "none";
  }
});
