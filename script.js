const btn = document.querySelector(".playBtn");
const choice = document.querySelector(".choice");
const playerScore = document.querySelector(".playerPoint");
const computerScore = document.querySelector(".compPoint");
const playerResult = document.querySelector(".playerResult");
const computerResult = document.querySelector(".computerResult");
const finalResult = document.querySelector(".finalResult");
const game = () => {
  const computer = Math.ceil(Math.random() * 30);
  if (computer < 10) {
    return "rock";
  } else if (computer < 20) {
    return "paper";
  } else {
    return "scissors";
  }
};

const updatescore = () => {
  finalResult.textContent = "";
  if (
    choice.value == "rock" ||
    choice.value == "paper" ||
    choice.value == "scissors"
  ) {
    const computerChoice = game();
    const result = choice.value == computerChoice ? "Won" : "Lost";

    playerScore.textContent =
      result == "Won"
        ? Number(playerScore.textContent) + 1
        : playerScore.textContent;
    computerScore.textContent =
      result == "Lost"
        ? Number(computerScore.textContent) + 1
        : computerScore.textContent;

    playerResult.textContent = "Your choice : " + choice.value;

    computerResult.textContent = "Computer's choice : " + computerChoice;

    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
      playerScore.textContent = 0;
      computerScore.textContent = 0;
      finalResult.textContent =
        playerScore.textContent == 5 ? "YOU WON!!" : "YOU LOST!!";
    }
  } else {
    alert("Please choose from either rock, paper or scissors");
  }
};

btn.addEventListener("click", () => {
  updatescore();
});
