const btn = document.querySelector(".playBtn");
const choice = document.querySelector(".choice");
btn.addEventListener("click", () => {
  if (
    choice.value != "rock" ||
    choice.value != "paper" ||
    choice.value != "scissors"
  ) {
    alert("please choose rock, paper or scissors");
  }
});
