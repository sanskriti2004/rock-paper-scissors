const btn = document.querySelector(".playBtn");
const choice = document.querySelector(".choice");

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

btn.addEventListener("click", () => {
  if (
    choice.value == "rock" ||
    choice.value == "paper" ||
    choice.value == "scissors"
  ) {
    const computerChoice = game();
    const result = choice.value == computerChoice ? "Won" : "Lost";
    alert(
      "Your choice : " +
        choice.value +
        "\nComputer's choice : " +
        computerChoice +
        "\nYou " +
        result +
        "!!"
    );
  } else {
    alert("Please choose from either rock, paper or scissors");
  }
});
