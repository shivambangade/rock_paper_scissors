
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

// Converts button ID into a numeric choice
function encodeChoice(userChoice) {
    let choice = 1;

    if (userChoice === "paper") {
        choice = 2;
    }

    if (userChoice === "scissors" || userChoice === "scissor") {
        choice = 3;
    }

    return choice;
}

// Converts numeric choice into readable text
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

function getHumanChoice() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            if (event.target.id === "retry") {
                humanScore = 0;
                computerScore = 0;
                roundsPlayed = 0;

                console.clear();
                return;
            }

            if (roundsPlayed >= 5) {
                return;
            }

            const userChoice = event.target.id;
            const humanChoice = encodeChoice(userChoice);
            const computerChoice = getComputerChoice();

            roundsPlayed++;

            console.log("ROUND:", roundsPlayed);
            console.log("Human:", userChoice, "Computer:", decodeChoice(computerChoice));

            playRound(humanChoice, computerChoice);

            console.log("Human Score:", humanScore);
            console.log("Computer Score:", computerScore);

            if (roundsPlayed === 5) {
                console.log("\n--- FINAL RESULT ---");

                if (humanScore > computerScore) {
                    console.log("Human Wins!");
                } else if (humanScore < computerScore) {
                    console.log("Computer Wins!");
                } else {
                    console.log("It's a Tie!");
                }
                console.log("Press Retry to Play again");
            }
        });
    });
}

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

getHumanChoice();
