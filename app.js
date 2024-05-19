const choiceEl = document.querySelectorAll(".choice");
const choiceAfterEls = document.querySelectorAll(".btnAfter");
const userScoreEl = document.querySelector(".digit-userscore");
const compScoreEl = document.querySelector(".digit-compscore");
const wrapperEl = document.querySelector(".wrapper");
const messageBtnEl = document.querySelector(".messageBtn");
let compScore = 0;
let userScore = 0;

choiceEl.forEach((choice) => {
  choice.addEventListener("click", () => {
    messageBtnEl.style.display = "block";
    const userChoice = choice.value;
    console.log(`user: ${userChoice}`);
    const choices = ["rock", "paper", "scissor"];
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`computer: ${compChoice}`);

    if (userChoice === compChoice) {
      messageBtnEl.textContent = `It's a tie`;
      messageBtnEl.classList.remove("win");
      messageBtnEl.classList.remove("lose");
    } else if (
      (userChoice === "rock" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "scissor") ||
      (userChoice === "scissor" && compChoice === "rock")
    ) {
      compScore++;
      compScoreEl.textContent = compScore;
      messageBtnEl.textContent = `You lose!! Computer's ${compChoice} beats your ${userChoice}`;
      messageBtnEl.classList.add("lose");
      messageBtnEl.classList.remove("win");

      console.log(userScore);
    } else {
      userScore++;
      userScoreEl.textContent = userScore;
      messageBtnEl.classList.remove("lose");
      messageBtnEl.classList.add("win");
      messageBtnEl.textContent = `You win!! Your ${userChoice} beats computer's ${compChoice}`;
    }
  });
});
