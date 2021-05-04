function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput == 'bomb') {
        return userInput;
    }
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
        return userInput;
    } else {
        console.log("Error Message");
    }
}

function getComputerChoice() {

    var t = Math.floor(Math.random() * 3);
    if (t === 0) {
        return 'rock';
    } else if (t == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'user won';
    }
    if (userChoice === computerChoice) {
        return 'The game was a tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer won';
        } else {
            return 'user won';
        }

    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'user won';
        } else {
            return 'computer won';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'computer won';
        } else {
            return 'user won';
        }
    }


}

function playGame() {
    var userChoice = getUserChoice('BOMB');
    var computerChoice = getComputerChoice();
    console.log('The user choice is ' + userChoice);
    console.log('The computer choice is ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();