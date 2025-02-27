const txtContainer = document.querySelector(".txt-container");
const playBtn = document.querySelector(".play-btn");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorBtn = document.querySelector(".scissor-btn");
const restartBtn = document.querySelector(".restart-btn");
const scores = document.querySelector(".scores");


// Global Variables
let playerScore = 0;
let computerScore = 0;


// Computer Chooses Rock, Paper, Scissor at Random
let computerChoice = null;

function numToOption(randomNum){

  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  };

};


// Starts Rock, Paper, Scissors Game and Adds Choices
playBtn.addEventListener("click", () => {

  txtContainer.textContent = "Rock, Paper, or Scissors? (Best Out of Three)";
  playBtn.classList.add("hide");
  rockBtn.classList.add("unhide");
  paperBtn.classList.add("unhide");
  scissorBtn.classList.add("unhide");

  playGame();

});


// Adds Player's Choice
let playerChoice = null;

rockBtn.addEventListener("click", () => {

  playerChoice = "rock";
  checkWinner();

});

paperBtn.addEventListener("click", () => {

  playerChoice = "paper";
  checkWinner();

});

scissorBtn.addEventListener("click", () => {

  playerChoice = "scissors";
  checkWinner();

});


// Compares Player vs Computer Choices
function checkWinner() {

  computerChoice = numToOption(Math.ceil(Math.random() * 3));

  if (playerChoice === computerChoice) {
    txtContainer.textContent = "It's a Tie";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    txtContainer.textContent = "Nice! Rock beats Scissors";
    playerScore++;
    scores.textContent = `${playerScore} : ${computerScore}`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    txtContainer.textContent = "Nice! Paper beats Rock";
    playerScore++;
    scores.textContent = `${playerScore} : ${computerScore}`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    txtContainer.textContent = "Nice! Scissors beats Paper";
    playerScore++;
    scores.textContent = `${playerScore} : ${computerScore}`;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    txtContainer.textContent = "Sorry! Rock loses to Paper";
    computerScore++;
    scores.textContent = `${playerScore} : ${computerScore}`;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    txtContainer.textContent = "Sorry! Paper loses to Scissors";
    computerScore++;
    scores.textContent = `${playerScore} : ${computerScore}`;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    txtContainer.textContent = "Sorry! Scissors loses to Rock";
    computerScore++;
    scores.textContent = `${playerScore} : ${computerScore}`;
  };

  if (playerScore === 3 || computerScore === 3) {
    rockBtn.classList.remove("unhide");
    paperBtn.classList.remove("unhide");
    scissorBtn.classList.remove("unhide");
    restartBtn.classList.add("unhide");
    if (playerScore > computerScore) {
      txtContainer.textContent = "You Win!";
    } else {
      txtContainer.textContent = "Computer Wins!"
    }
  }

};

restartBtn.addEventListener("click", () => {

  txtContainer.textContent = "Rock, Paper, or Scissors? (Best Out of Three)";
  playerScore = 0;
  computerScore = 0;
  scores.textContent = `${playerScore} : ${computerScore}`;
  rockBtn.classList.add("unhide");
  paperBtn.classList.add("unhide");
  scissorBtn.classList.add("unhide");
  restartBtn.classList.remove("unhide");

  playGame();

});