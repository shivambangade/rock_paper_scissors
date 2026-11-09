let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const totalRounds = 5;


// Generates a random computer choice (1 = Rock, 2 = Paper, 3 = Scissors)
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}


// Converts the human's button ID into a numeric choice
function encodeChoice(userChoice) {
    let choice = 1;

    if (userChoice === "paper") {
        choice = 2;
    }

    if (userChoice === "scissor") {
        choice = 3;
    }

    return choice;
}


// Converts a numeric choice into readable text
function decodeChoice(computerChoice) {
    let choice = "rock";

    if (computerChoice === 2) {
        choice = "paper";
    }

    if (computerChoice === 3) {
        choice = "scissors";
    }

    return choice;
}


// Plays one round and updates the scores
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }

    else if (
        (humanChoice === 1 && computerChoice === 3) ||
        (humanChoice === 2 && computerChoice === 1) ||
        (humanChoice === 3 && computerChoice === 2)
    ) {
        console.log("You win this round!");
        humanScore++;
    }

    else {
        console.log("Computer wins this round!");
        computerScore++;
    }
}


// Updates the score display
function updateScoreDisplay() {
    const humanScoreDisplay = document.querySelector("#hs");
    const computerScoreDisplay = document.querySelector("#cs");

    humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}


// Updates the round display
function updateRoundDisplay() {
    const roundDisplay = document.querySelector("#round");

    roundDisplay.textContent = `Round: ${roundsPlayed} of ${totalRounds}`;
}


// Displays the final game result
function displayFinalResult() {
    const resultDisplay = document.querySelector("#result");

    if (humanScore > computerScore) {
        resultDisplay.textContent = "Human Wins!";
    }

    else if (humanScore < computerScore) {
        resultDisplay.textContent = "Computer Wins!";
    }

    else {
        resultDisplay.textContent = "It's a Tie!";
    }

    const retryMessage = document.createElement("p");

    retryMessage.id = "retry-message";
    retryMessage.textContent = "Press Retry to Play Again";

    document.querySelector("body").appendChild(retryMessage);

    console.log("\n--- FINAL RESULT ---");
    console.log(resultDisplay.textContent);
}


// Enables or disables the game choice buttons
function setGameButtonsDisabled(disabled) {
    gameButtons.forEach((button) => {
        button.disabled = disabled;
    });
}


// Resets the game and its display
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    const humanChoiceDisplay = document.querySelector("#hchoice");
    const computerChoiceDisplay = document.querySelector("#cchoice");
    const resultDisplay = document.querySelector("#result");
    const retryMessage = document.querySelector("#retry-message");

    humanChoiceDisplay.textContent = "You Choose:";
    computerChoiceDisplay.textContent = "Computer Choose:";
    resultDisplay.textContent = "";

    if (retryMessage) {
        retryMessage.remove();
    }

    updateScoreDisplay();

    const roundDisplay = document.querySelector("#round");
    roundDisplay.textContent = `Round: 0 of ${totalRounds}`;

    setGameButtonsDisabled(false);

    console.clear();
}


// Handles human button clicks
function getHumanChoice() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {

            if (button.id === "retry") {
                resetGame();
                return;
            }

            if (roundsPlayed >= totalRounds) {
                return;
            }

            const humanChoiceName = button.id;
            const humanChoice = encodeChoice(humanChoiceName);
            const computerChoice = getComputerChoice();

            roundsPlayed++;

            const humanChoiceDisplay = document.querySelector("#hchoice");
            const computerChoiceDisplay = document.querySelector("#cchoice");

            humanChoiceDisplay.textContent = `You Choose: ${humanChoiceName}`;
            computerChoiceDisplay.textContent = `Computer Choose: ${decodeChoice(computerChoice)}`;

            console.log(`ROUND: ${roundsPlayed}`);
            console.log("Human:", humanChoiceName);
            console.log("Computer:", decodeChoice(computerChoice));

            playRound(humanChoice, computerChoice);

            updateRoundDisplay();
            updateScoreDisplay();

            if (roundsPlayed === totalRounds) {
                displayFinalResult();
                setGameButtonsDisabled(true);
            }
        });
    });
}


// Select game buttons
const buttons = document.querySelectorAll("button");
const gameButtons = document.querySelectorAll("#rock, #paper, #scissor");


// Start the game
getHumanChoice();