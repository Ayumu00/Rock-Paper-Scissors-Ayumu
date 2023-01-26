function getComputerChoice(){
    let choiceComputer = ["Rock","Paper","Scissors"];
    choice = Math.floor(Math.random() * choiceComputer.length);
    return choiceComputer[choice];
};

function playRound(playerSelection, computerSelection){
    let player = playerSelection;
    let computer = computerSelection;
    player = player.toLowerCase();

    if ((player == "rock" && computer == "Paper") || (player == "scissors" && computer == "Rock") || (player == "paper" && computer == "Scissors")) {
        user+=1;
    } else if ((computer == "Rock" && player == "paper") || (computer == "Scissors" && player == "rock") || (computer == "Paper" && player == "scissors")) {
        enemy+=1;
    };
  
};

function game(){
    user = 0;
    enemy = 0;

    for (i=0;i<5;++i) {
        playRound(prompt("Choose between Rock/Paper/Scissors"),getComputerChoice());
    };
    if(user > enemy){
        return "You win!";
    } else {
        return "You lose!"
    };
};

let user = 0;
let enemy = 0;