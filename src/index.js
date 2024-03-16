function showRecipe(response) {
  console.log("show recipe");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: " ",
    delay: 10,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let inputElement = document.querySelector("#input");

  let apiKey = "033b43a04493c2b0f53e8fe8bdote92d";
  let prompt = `Generate a recipe of ${inputElement.value}`;
  let context =
    "You are a grandmum who is love to cook for family. Do not say 'sure or Here is ... etc'. Provide the answer in basic HTML. Provide recipe in very simple way. Make a list of ingredients then cooking instruction below. Add 'AI chef' below end of recipe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("recipe");
  recipeElement.innerHTML = `Recipe with 🍳 ${inputElement.value} is coming.... `;
  axios.get(apiUrl).then(showRecipe);
}
let formElement = document.querySelector("#form");
formElement.addEventListener("click", generateRecipe);
