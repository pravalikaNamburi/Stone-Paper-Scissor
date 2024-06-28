let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

const drawGame = () => {
  msg.innerHTML = "Game was draw, play again!";
  msg.style.backgroundColor = "#9A4444";
};

const showWinner = (UserWin, userChoice, compChoice) => {
  if (UserWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerHTML = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerHTML = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = gencompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let UserWin = true;
    if (userChoice === "rock") {
      UserWin = compChoice === " paper" ? false : true;
    } else if (userChoice === "paper") {
      UserWin = compChoice === "scissor" ? false : true;
    } else {
      UserWin = compChoice === "rock" ? false : true;
    }
    showWinner(UserWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
