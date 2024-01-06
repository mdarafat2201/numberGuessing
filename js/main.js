const Player1 = document.querySelector(".Player1");
const error = document.querySelector(".error");
const Player1Input = document.querySelector(".Player1Input");
const gameStart = document.querySelector(".gameStart");

//player tow markup refercence
const playertowbox = document.querySelector(".playertowbox");

gameStart.addEventListener("click", function () {
  if (
    Player1Input.value != "" &&
    Player1Input.value >= 0 &&
    Player1Input.value <= 10
  ) {
    error.innerHTML = "good valid input";
    error.style.color = "green";
    // hide all information of player one
    error.style.display = "none";
    Player1Input.style.display = "none";
    gameStart.style.display = "none";
    // visible all markup in player tow
    playertowbox.style.display = "block";
  } else {
    error.innerHTML = "invalid Crcdential";
    error.style.color = "red";
  }
});
