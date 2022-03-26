const hamburgerButton = document.querySelector("#hamburger-btn");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const input = document.querySelector("#email-input");
const button = document.querySelector("#submit-btn");

/* This is to ensure that if the hamburger menu is opened and the window is resized 
to a resolution where the hamburger menu is replaced with standard anchors, 
the hamburger menu options will disappear. */
const mediaQueryList = window.matchMedia("(min-width: 768px)");

function handleInput() {
  /* Leveraging the built-in html email validation, which uses the following regex:
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    */
  button.disabled = !input.checkValidity();
}

function handleKeyDown(e) {
  if (!(e.key === "Enter" || e.keyCode === 13) || !input.checkValidity())
    return;
  alert(`The email to submit is "${input.value}".`);
  input.value = "";
  button.disabled = true;
}

function handleSignUpButtonClick() {
  if (!input.checkValidity()) return;
}

function resetForm() {
  input.value = "";
  button.disabled = true;
}

function submitForm() {
  alert(`The email to submit is "${input.value}".`);

  resetForm();
}

function handleHamburgerButtonClick() {
  const display = hamburgerMenu.style.display;
  hamburgerMenu.style.display = display === "flex" ? "none" : "flex";
}

function handleMediaQueryChange(mql) {
  if (mql.matches) {
    hamburgerMenu.style.display = "none";
  }
}

function addEventListeners() {
  input.addEventListener("input", () => handleInput());
  input.addEventListener("keydown", (e) => handleKeyDown(e));
  button.addEventListener("click", () => handleSignUpButtonClick());
  hamburgerButton.addEventListener("click", () => handleHamburgerButtonClick());
  mediaQueryList.addListener((mql) => handleMediaQueryChange(mql));
}

addEventListeners();
