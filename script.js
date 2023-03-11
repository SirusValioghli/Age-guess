const myAge = 25;
let res = 5;
let score = document.querySelector(".score");

let mistakes = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);

  if (!guessedNumber) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guessedNumber < myAge) {
    mistakes++;
    res--;
    score.innerHTML = res;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".message").textContent =
      "You guess less than my age";
  } else if (guessedNumber > myAge) {
    mistakes++;
    res--;
    score.innerHTML = res;
    document.querySelector(".message").textContent = document.querySelector(
      "body"
    ).style.backgroundColor = "#222";
    document.querySelector(".message").textContent =
      "You guess more than my age";
  } else if (guessedNumber === myAge) {
    document.querySelector(".message").innerHTML = "<b>You WIN!</b>";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".age").innerHTML = `${myAge}`;
  }
  console.log(mistakes);
  console.log(res);
  if (res <= 0) {
    document.querySelector("body").style.backgroundColor = "red";
    score.innerHTML = 0;
    document.querySelector(".message").textContent = "You Loose!";
    document.querySelector(".age").innerHTML = `${myAge}`;
  }
  document.querySelector(".again").addEventListener("click", function () {
    res = 5;
    score.innerHTML = res;
    document.querySelector(".message").innerHTML = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
  });
});
