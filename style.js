const game = () => {

    const signPlayer = document.getElementById("sign-player");
    const signComputer = document.getElementById("sign-computer");
    const rockEl = document.getElementById("rock");
    const paperEl = document.getElementById("paper");
    const scissorEl = document.getElementById("scissor");
    let btns = document.querySelectorAll('button');
    const choices = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;


/**************When player clicks button it will appear in " Your choice: "*************/

    rockEl.addEventListener("click", function(){
        signPlayer.textContent =  " " + choices[0];
});

    paperEl.addEventListener("click", function(){
        signPlayer.textContent = " " + choices[1];
});

    scissorEl.addEventListener("click", function(){
        signPlayer.textContent = " " + choices[2];
});
    for (i of btns) {
    i.addEventListener('click', function() {
        randomChoices = choices[Math.floor(Math.random()*choices.length)];
        signComputer.textContent = " " + randomChoices;
        console.log(randomChoices);
    });
};
/**************Code for who wins the round "*************/

    const winner = (cpu,plyr) => {
        const pScore = document.getElementById("p-score").textContent;
        const cScore = document.getElementById("c-score").textContent;
        const outcome = document.getElementById("outcome").textContent;
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

    winner(signComputer.textContent, signPlayer.textContent);
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