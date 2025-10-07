function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("poem");

  new Typewriter("#poem", {
    strings:
      "Love comes quietly, finally, drops about me, on me, in the old ways. What did I know thinking myself able to go alone all the way.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
