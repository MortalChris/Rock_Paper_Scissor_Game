const signPlayerDisplay = document.getElementById("sign-player")
const signComputerDisplay = document.getElementById("sign-computer")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userSign

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    signPlayer = e.target.id
    signPlayerDisplay.innerHTML = signPlayer
}))

/* const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userSign

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
}))*/