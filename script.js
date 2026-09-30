// so designing a game of rock paper and scissor will have some things
// for the game the random will generate random number which gives from 0 to 1 and then we multiple by
// 3 so taht we get 0.11 1.1 2.1 like values and when we floor them we get 0 1 2 but we had 1 2 3
// so we add 1
// and  it can result 1 2 3 and then if 1 then rock 2 for paper and 3 forscissor,
// accordingly i need to do it 5 times and then addup the scores and display the winner

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}
function getHumanChoice() {
    const choice = parseInt(prompt("Enter the Choice: \n 1 : Rock \n 2: Paper \n 3: Scissor"))
    return choice;
}

function playgame() {

    function playround(HumanChoice, ComputerChoice) {
        if (HumanChoice === 1 && ComputerChoice === 1)
            console.log("Its a tie ")
        else if (HumanChoice === 1 && ComputerChoice === 2) {
            console.log("You Lose, Paper Beats Rock ");
            ComputerScore++;
        }
        else if (HumanChoice === 1 && ComputerChoice === 3) {
            console.log("You Win, Rock Beats Scissors ");
            HumanScore++;
        }
        else if (HumanChoice === 2 && ComputerChoice === 1) {
            console.log("You Win, Paper Beats Rock ");
            HumanScore++;
        }
        else if (HumanChoice === 2 && ComputerChoice === 2)
            console.log("Its a tie ")
        else if (HumanChoice === 2 && ComputerChoice === 3) {
            console.log("You Lose, Scissors Beats Paper ");
            ComputerScore++;
        }
        else if (HumanChoice === 3 && ComputerChoice === 1) {
            console.log("You Lose, Rock Beats Scissors ");
            ComputerScore++;
        }

        else if (HumanChoice === 3 && ComputerChoice === 2) {
            console.log("You Win, Scissor Beats Paper ");
            HumanScore++;
        }
        else if (HumanChoice === 3 && ComputerChoice === 3)
            console.log("Its a tie ")
    }

    let HumanScore = 0;
    let ComputerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("ROUND:", i + 1);

        console.log("Human:", humanSelection, "Computer:", computerSelection);
        playround(humanSelection, computerSelection);
    }
    console.log(HumanScore)
    console.log(ComputerScore)
    if (HumanScore > ComputerScore)
        console.log("Human Wins !!!")
    else if (HumanScore < ComputerScore)
        console.log("Computer Wins !!!")
    else if (HumanScore === ComputerScore)
        console.log("I a Tie !!!")

}


playgame();