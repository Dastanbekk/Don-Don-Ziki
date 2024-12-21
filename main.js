const choices = ["scissors","rock","paper"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const start = document.getElementById('start');
const wrapper = document.getElementById('wrapper');
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const timer = document.getElementById("timer");
const second = document.getElementById("second");
let playerScore = 0;
let computerScore = 0;
let timerTime =0;
let secondTime =0;

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
    setTimeout(()=>{
        one.style.display = 'flex';
    },1000)
    setTimeout(()=>{
        one.style.display = 'none';
        two.style.display = 'flex';
    },2000)
    setTimeout(()=>{
        two.style.display = 'none';
        three.style.display = 'flex';
    },3000)
    setTimeout(()=>{
        three.style.display = 'none';
        wrapper.style.display = 'flex';
        setInterval(()=>{
            timerTime++
            timer.textContent = timerTime;
        }, 60000);
        setInterval(()=>{
            secondTime++
            second.textContent = secondTime;
            if(secondTime===60){
                secondTime = 0;
            }
        }, 1000);
        
        
    },4000)
    one.style.display="none"
    start.style.display = "none";
})

start.addEventListener("click",startgame)
