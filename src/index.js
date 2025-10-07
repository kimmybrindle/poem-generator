function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "5c04157d3b5bt2eeaa66db333fod0d64";
  let context =
    "You are a witty Poet and love to write short poems. Your mission is to generate a four line poem in basic HTML and seperate each line with a <br />. Use HTML formatting but don't show me the HTML element tags. Make sure to add some space between each line of the poem. Make sure to follow the user instructions. Sign the bottom of the poem with 'SheCodes AI' in <strong> element.  ";
  let prompt = `User instructions: Generate a poem about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
