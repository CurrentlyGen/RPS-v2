function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex  = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function checkValidChoice(choice) {
    const validChoices = ["rock", "paper", "scissors"];
    return choice !== null && validChoices.includes(choice.toLowerCase());
}

function determineResult(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase()
    if(playerChoice === computerChoice) {
    return "It's a tie!!";
    } else if(
        playerChoice === "rock" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "rock") {
        return `You Lose!! ${computerChoice} beats ${playerChoice}`;
    } else {
        return `You Win!! ${playerChoice} beats ${computerChoice}`;
    }
}

function playRound() {
    let playerChoice = prompt("Rock, Paper or Scissors");
    const computerChoice = getComputerChoice();
    while( !checkValidChoice(playerChoice)) {
        playerChoice = prompt("Please choose Rock, Paper or Scissors");
    }
    return determineResult(playerChoice, computerChoice);
}

function game() {
    let cPoints = 0;
    let pPoints = 0;
    while(cPoints < 3 && pPoints < 3) {
        let result = playRound();
        console.log(result);
        if((/^You Win!!./.test(result))) {
            ++pPoints;
            console.log(`Your Score is ${pPoints}`)
        } else if(/^You Lose!!.*/.test(result)) {
            ++cPoints;
            console.log(`Computer's Score is ${cPoints}`);
        }
    } if(cPoints === 3) {
        return "Computer takes the Victory";
    } else if(pPoints === 3){
        return "Player takes the Victory";
    }
}

game();