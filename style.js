const signPlayerDisplay = document.getElementById("sign-player");
const signComputerDisplay = document.getElementById("sign-computer");
const resultDisplay = document.getElementById("Results");
const possibleChoices = document.querySelectorAll("button");
let userSign

const choices = ["rock", "paper", "scissors"];
const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorEl = document.getElementById("scissor");

/**************When player clicks button it will appear in " Your choice: "*************/
rockEl.addEventListener("click", function(){
    signPlayerDisplay.textContent = " rock"
});
paperEl.addEventListener("click", function(){
    signPlayerDisplay.textContent = " paper"
});
scissorEl.addEventListener("click", function(){
    signPlayerDisplay.textContent = " scissor"
});

/**************The Computer gets a randomized hand sign"*************/
function getComputerChoice(){
    randomChoices = choices[Math.floor(Math.random()*choices.length)];
    document.getElementById("sign-computer").textContent = " " + randomChoices
    console.log(randomChoices);
};
console.log(getComputerChoice());











 
/* 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    signPlayer = e.target.id
    signPlayerDisplay.innerHTML = signPlayer
}))








const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userSign

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
}))*/