const max = 100;
let rannumber = Math.round(Math.random() * max);
const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector("h2");

button.addEventListener("click", guessNumber);
guessNumber();

function guessNumber() {
  console.log(input.value);
  console.log(rannumber);

  if (Number(input.value) === rannumber) {
    result.textContent = "Korrekt - tallet var " + rannumber + "! Prøv igen :)";
    rannumber = Math.round(Math.random() * max);
  } else {
    result.textContent = "Forkert.. Prøv igen";
  }
}
