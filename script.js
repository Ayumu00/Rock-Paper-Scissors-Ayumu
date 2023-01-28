function computerSelectGame(){
    let lstItem = ["rock","paper","scissors"];
    choice = Math.floor(Math.random()*lstItem.length);
    return lstItem[choice];
};

function playMechanics(player,enemy){
  if (player == "rock" && enemy == "scissors"||player == "scissors" && enemy == "paper"||player == "paper" && enemy == "rock"){
    playerS+=1;
  } else if (enemy == "paper" && player == "rock"||enemy == "rock" && player == "scissors"||enemy == "scissors" && player == "paper"){
    enemyS+=1;
  } else if (player == "scissors" && enemy == "rock"||player == "paper" && enemy == "scissors"||player == "rock" && enemy == "paper"){
    enemyS+=1;
  } else if (enemy == "paper" && player == "scissors"||enemy == "rock" && player == "paper"||enemy == "scissors" && player == "rock"){
    playerS+=1;
  } else {
    return;
  }
};

function whoWin(){
    if ((playerS > enemyS) && round >= 5){
        playerS = 0, enemyS = 0, round = 0;
        winLoseText.textContent = "WIN!"
    } else if ((playerS < enemyS) && round >= 5){
        playerS = 0, enemyS = 0, round = 0;
        winLoseText.textContent = "LOSE!"
    } else if ((playerS == enemyS) && round>=5){
        round=0;
        playerS=0;
        enemyS=0;
        winLoseText.textContent = "DRAW!"
    }
};

function game(playerUser){
    winLoseText.textContent = "";
    round+=1;
    let computerChoiceOnly = computerSelectGame();
    playMechanics(playerUser,computerChoiceOnly);
    playerScore.textContent = `${playerS}`;
    enemyScore.textContent = `${enemyS}`;
    roundNum.textContent = `${round}`;
    let chooseA = playerUser;
    let chooseB = computerChoiceOnly;
    leftSide.src = `./images/${playerUser}.png`;
    rightSide.src = `./images/${computerChoiceOnly}.png`;
    whoWin();
};

function determine(e){
    this.classList.value;
    e.stopPropagation();
    this.classList.add("effects-css");
    let object = this.firstChild.src.match("rock")||this.firstChild.src.match("scissors")||this.firstChild.src.match("paper");
    game(object[0]);
};

function removeTransition(e){
    e.target.classList.remove("effects-css");
};

let playerS = 0;
let enemyS = 0;
let round = 0;

// DOM

const playerScore = document.querySelector(".player-score");
const enemyScore = document.querySelector(".enemy-score");
const roundNum = document.querySelector(".round-number");
const leftSide = document.querySelector(".user");
const rightSide = document.querySelector(".enemy");
const Buttons = document.querySelectorAll("button");
const winLoseText = document.querySelector(".win-lose-draw");

Buttons.forEach(button => {
    button.addEventListener("click",determine)
    button.addEventListener("transitionend",removeTransition)
});