function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: "REDAY ....Go...",
    autoStart: true,
    cursor: " ",
    delay: 100,
  });
}
let formElement = document.querySelector("#form");
formElement.addEventListener("click", generateRecipe);
