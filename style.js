const game = () => {

    const signPlayerDisplay = document.getElementById("sign-player");
    const signComputerDisplay = document.getElementById("sign-computer");
    const pScore = document.getElementById("p-score")
    const cScore = document.getElementById("c-score")
    const rockEl = document.getElementById("rock");
    const paperEl = document.getElementById("paper");
    const scissorEl = document.getElementById("scissor");
    const outcome = document.getElementById("outcome");
    const buttonsss = document.getElementsByTagName("buttonsss")
    const choices = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;

/**************When player clicks button it will appear in " Your choice: "*************/
    rockEl.addEventListener("click", function(){
    signPlayerDisplay.textContent =  " " + choices[0]

    randomChoices = choices[Math.floor(Math.random()*choices.length)];
    signComputerDisplay.textContent = " " + randomChoices
    console.log(randomChoices);
    console.log(signPlayerDisplay);
});
    paperEl.addEventListener("click", function(){
    signPlayerDisplay.textContent = " " + choices[1]

    randomChoices = choices[Math.floor(Math.random()*choices.length)];
    signComputerDisplay.textContent = " " + randomChoices
    console.log(randomChoices);
});
    scissorEl.addEventListener("click", function(){
    signPlayerDisplay.textContent = " " + choices[2]

    randomChoices = choices[Math.floor(Math.random()*choices.length)];
    signComputerDisplay.textContent = " " + randomChoices
    console.log(randomChoices)
});

/**************Code for who wins the round "*************/
    const winner = (cpu,plyr) => {
        if (cpu === plyr){
            outcome.textContent = "Tie"
        }
        else if (cpu == "rock")
            if (plyr == "paper"){
            outcome.textContent = " " + "Player Won!"
            playerScore++
            pScore.textContent  = playerScore
        }   else {
            outcome.textContent = " " + "Computer Won!"
            computerScore++
            cScore.textContent  = computerScore
        }

        else if (cpu == "paper")
            if (plyr == "scissor"){
            outcome.textContent = " " + "Player Won!"
            playerScore++
            pScore.textContent  = playerScore
        }   else {
            outcome.textContent = " " + "Computer Won!"
            computerScore++
            cScore.textContent = computerScore
        }
        
        else if (cpu == "scissor")
            if (plyr == "paper"){
            outcome.textContent = " " + "Player Won!"
            playerScore++
            pScore.textContent  = playerScore
        }   else {
            outcome.textContent = " " + "Computer Won!"
            computerScore++
            cScore.textContent = computerScore
        }
    };

    
}


game();
/**************The Computer gets a randomized hand sign"*************

function getComputerChoice(){
    randomChoices = choices[Math.floor(Math.random()*choices.length)];
    document.getElementById("sign-computer").textContent = " " + randomChoices
    console.log(randomChoices);
};
console.log(getComputerChoice());


/**************Start of the game "*************
 * buttonsss.addEventListener("click", function start(){
 * 
 * 
 * 
buttonEl.addEventListener("click", startGame(){
    if(pScore <  5 || cScore < 5){
        if(signPlayerDisplay === rock || signComputerDisplay === paper){
            outcome.textContent = "hi"
        }
    }
   });











/****************************
 * Need overall function to start the game
 * Need an if statement or something to look at each input and decide who gets a point
 * Once you reach 3 points game end and locks options for each
 * Need reset function to clear data and reset
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ******************************/







 
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