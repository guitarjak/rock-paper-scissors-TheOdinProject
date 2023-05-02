
let score = {
    win: 0,
    lose: 0,
    tie: 0,
}

document.querySelector('.rock-button').addEventListener('click', () => {playRound('rock');});
document.querySelector('.paper-button').addEventListener('click', () => {playRound('paper');});
document.querySelector('.scissors-button').addEventListener('click', () => {playRound('scissors');});

let displayResult = document.querySelector('.text-display');

function getComputerChoice() {
    let computerMoves = Math.random();

    if (computerMoves > 0 && computerMoves < 1 / 3) {
        return computerMoves = 'rock';
    } else if (computerMoves > 1 / 3 && computerMoves < 2 / 3) {
        return computerMoves = 'paper';
    } else {
        return computerMoves = 'scissors';
    }
}

function playRound(input) {
    let computerMoves = getComputerChoice();

    let playerMoves = input;
    
    let result = '';

    if (playerMoves === 'rock') {
        if (computerMoves === 'rock') {
            console.log('tie');
            displayResult.innerHTML = `<p>It's a tie</p>`
            result = 'tie';
        } else if (computerMoves === 'paper') {
            console.log('you lose, paper beats rock');
            displayResult.innerHTML = `<p>you lose, paper beats rock</p>`
            result = 'lose';
        } else if (computerMoves === 'scissors') {
            console.log('you win! rock beats scissors');
            displayResult.innerHTML = `<p>you win! rock beats scissors</p>`
            result = 'win';
        }
    } else if (playerMoves === 'paper') {
        if (computerMoves === 'rock') {
            console.log('you win! paper beats rock');
            displayResult.innerHTML = `<p>you win! paper beats rock</p>`
            result = 'win';
        } else if (computerMoves === 'paper') {
            console.log('tie');
            displayResult.innerHTML = `<p>It's a tie</p>`
            result = 'tie';
        } else if (computerMoves === 'scissors') {
            console.log('you lose, scissors beats paper');
            displayResult.innerHTML = `<p>you lose, scissors beats paper</p>`
            result = 'lose';
        }
    } else if (playerMoves === 'scissors') {
        if (computerMoves === 'rock') {
            console.log('you lose, rock beats scissors');
            displayResult.innerHTML = `<p>you lose, rock beats scissors</p>`
            result = 'lose';
        } else if (computerMoves === 'paper') {
            console.log('you win! scissors beats paper');
            displayResult.innerHTML = `<p>you win! scissors beats paper</p>`
            result = 'win';
        } else if (computerMoves === 'scissors') {
            console.log('tie');
            displayResult.innerHTML = `<p>It's a tie</p>`
            result = 'tie';
        }
    }

    if (result === 'win') {
        score.win = score.win + 1;
    } else if (result === 'lose') {
        score.lose = score.lose + 1;
    } else if (result === 'tie') {
        score.tie = score.tie + 1;
    }

    console.log(score);
}

function resetScore() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    displayResult.innerHTML = `<p>Score Reset!</p>`
    console.log(score);
}

function game() {
        playRound();
}



/*
if (result === 'win') {
    score.Win = score.Win + 1;
    console.log(score);
} else if (result === 'lose') {
    score.Lose = score.Lose + 1;
    console.log(score);
}
*/