const game = () => {
/***Signs***/
    const signPlayer = document.getElementById("sign-player");
    const signComputer = document.getElementById("sign-computer");

    const outcome = document.getElementById("outcome-span");
/** let playerScore = document.getElementById("p-score");
    let cScoreboard = document.getElementById("c-score"); **/

/***buttons***/
    const rockEl = document.getElementById("rock");
    const paperEl = document.getElementById("paper");
    const scissorEl = document.getElementById("scissor");
    const btns = document.querySelectorAll("button");

    const choices = ["rock", "paper", "scissors"];
    let playerScore= 0;
    let computerScore = 0;
    let randomChoices
    let playerChoice

/**************When player clicks button it will appear in " Your choice: "*************/

    rockEl.addEventListener("click", () => {
            signPlayer.textContent = " " + choices[0];
            return playerChoice = choices[0];
        });

    paperEl.addEventListener("click", () => {
            signPlayer.textContent = " " + choices[1];
            return playerChoice = choices[1];
        });

    scissorEl.addEventListener("click", () => {
            signPlayer.textContent = " " + choices[2];
            return playerChoice = choices[2];

        });
    for (i of btns) {
    i.addEventListener('click', () => {
            let randomChoices = choices[Math.floor(Math.random() * choices.length)];
            signComputer.textContent = " " + randomChoices;
            console.log(randomChoices);
            return randomChoices;
        });
};
winner(randomChoices, playerChoice);

/**************Code for who wins the round "*************/

    const winner = (cpu, plyr) => {
        const pScoreboard = document.getElementById("p-score").textContent;
        const cScoreboard = document.getElementById("c-score").textContent;
        const outcome = document.getElementById("outcome").textContent;
        cpu = cpu.toLowerCase(); 
        plyr = plyr.toLowerCase(); 

        if (cpu === plyr){
            outcome.textContent = "Tie"
        };

         if (cpu === choices[0])//rock
            if (plyr === choices[1]){//paper
            outcome.textContent = " " + "Player Won!";
            playerScore++;
            pScoreboard.textContent  = playerScore;
        }   else {
            outcome.textContent = " " + "Computer Won!";
            computerScore++;
            cScoreboard.textContent  = computerScore;
        };

         if (cpu === choices[2])//scissors
            if (plyr === choices[0]){//rock
            outcome.textContent = " " + "Player Won!";
            playerScore++;
            pScoreboard.textContent  = playerScore;
        }   else {
            outcome.textContent = " " + "Computer Won!";
            computerScore++;
            cScoreboard.textContent = computerScore;
        };
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