// Get Computer's Choice 
function getComputersChoice() {
    const options = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

// Get Player's Choice through the buttons and start the game;
rock.addEventListener("click", function() {
    game("rock");
})

paper.addEventListener("click", function() {
    game("paper");
})

scissors.addEventListener("click", function() {
    game("scissors");
})

// Compare the Computer's Choice with Player's Choice
function compareChoices(computerChoice, playerChoice) {
    if( playerChoice === computerChoice ) {
        return `tie`;
    } else if(
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
            return "Player";
    } else {
        return "Computer";
    }
}

let playerPoints = 0;
let computerPoints = 0;

// Marks the points of each player
function pointMarker(winner) {
    if(winner === "Player") {
        playerPoints++;
        pPoints.textContent = `${playerPoints}`;
        dispNewGame()
    } else if(winner === "Computer") {
        computerPoints++;
        cPoints.textContent = `${computerPoints}`;
        dispNewGame()
    }
}

function dispNewGame(){
    if (computerPoints === 5 || playerPoints === 5) {
        const bod = document.querySelector("body");
        const newGame = document.createElement("button")
        newGame.setAttribute("id", "newgame");
        bod.appendChild(newGame);
        newGame.textContent = "New Game";
        newGame.addEventListener("click", function() {
            playerPoints = 0;
            computerPoints = 0;
            pPoints.textContent = `${playerPoints}`;
            cPoints.textContent = `${computerPoints}`;
            dispComputerChoice.textContent = "";
            dispRoundResult.textContent = ""
            winner.textContent = ""
            bod.removeChild(document.getElementById("newgame"));
        })
        if(computerPoints === 5) {
            winner.textContent = "Computer Wins!"
        } else if(playerPoints === 5) {
            winner.textContent = "Player Wins!"
        }
    }
}

// Display the results of each match
function displayRoundResult(winner, computerWeapon, playerWeapon) {
    if(winner === "Computer") {
        dispRoundResult.textContent = `${winner} +1 pts! ${computerWeapon} beats ${playerWeapon}`;
    } else if(winner === "Player") {
        dispRoundResult.textContent = `${winner} +1 pts! ${playerWeapon} beats ${computerWeapon}`;
    } else {
        dispRoundResult.textContent = `It's a tie`;
    }
}

// Add the point to the winner and wait for player's choice for next round
function game(myChoice) {
    if(computerPoints < 5 && playerPoints < 5) {
        const computerChoice = getComputersChoice();
        dispComputerChoice.textContent = `Computer Chose: ${computerChoice}`;
        const roundWinner = compareChoices(computerChoice, myChoice);
        pointMarker(roundWinner);
        displayRoundResult(roundWinner, computerChoice, myChoice);
    }
}

// Once one of them get to 5 points stop the game
// function pointMarker that accepts a winner as parameter, 
// and if winner is player or computer sums points respectively until one of them reach a certain amout of points