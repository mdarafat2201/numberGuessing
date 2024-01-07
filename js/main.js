const Player1 = document.querySelector(".Player1");
const error = document.querySelector(".error");
const Player1Input = document.querySelector(".Player1Input");
const gameStart = document.querySelector(".gameStart");

//player tow markup refercence
const Player2Input = document.querySelector(".Player2Input");
const guess = document.querySelector(".guess");
let playeronevalue = 0;
let chance = 4;
gameStart.addEventListener("click", function () {
  if (
    Player1Input.value != "" &&
    Player1Input.value >= 0 &&
    Player1Input.value <= 10
  ) {
    playeronevalue = Player1Input.value;
    error.innerHTML = "good valid input";
    error.style.color = "green";
    // hide all information of player one
    Player1.style.display = "none";
    error.style.display = "none";
    Player1Input.style.display = "none";
    gameStart.style.display = "none";
    // visible all markup in player tow
    Player1.style.display = "block";
    Player1.innerHTML = "player 2";
    Player2Input.style.display = "block";
    guess.style.display = "block";
  } else {
    error.innerHTML = "invalid Crcdential";
    error.style.color = "red";
  }
});
//guessign player one number
guess.addEventListener("click", function () {
  if (
    Player2Input.value != "" &&
    Player2Input.value >= 0 &&
    Player2Input <= 10
  ) {
    chance--;
    error.innerHTML = `your guess is  wrong and  you have chance ${chance}`;
    error.style.color = "green";
  } else {
    error.style.display = "block";
    error.innerHTML = `please insert value a 0 to 9 your have chance ${chance}`;
    error.style.color = "red";
  }
});
