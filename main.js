const choices = ["scissors","rock","paper"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const start = document.getElementById('start');
const wrapper = document.getElementById('wrapper')
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice===computerChoice){
        result = "Durrang !"
    }else{
        switch(playerChoice){
            case "rock":
            result = (computerChoice === "scissors") ? "You win" : "You Lose";
            break;

            case "paper":
            result = (computerChoice === "rock") ? "You win" : "You Lose";
            break;
            
            case "scissors":
            result = (computerChoice === "paper") ? "You win" : "You Lose";
            break;
        }
    }
    

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText","yellowText")


    switch(result){
        case "You win":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore
            break;

        case "You Lose":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore
            break;
        case "Durrang !":
            resultDisplay.classList.add("yellowText");
            computerScore++;
            playerScore++;
            computerScoreDisplay.textContent = computerScore
            playerScoreDisplay.textContent = playerScore
            break;
    }
}

const startgame = (()=>{
    wrapper.style.display = 'flex';
    start.style.display = "none";
})

start.addEventListener("click",startgame)
