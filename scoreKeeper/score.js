let scoreKeep = document.querySelector('#scoreKeep')
const playerOne = document.querySelector('#playerOne')
const playerTwo = document.querySelector('#playerTwo')
let playOneDisplay = document.querySelector('#playOne')
let playTwoDisplay = document.querySelector('#playTwo')
let playerOneName = document.querySelector('#playerOneName')
let playerTwoName = document.querySelector('#playerTwoName')
const playToSelect = document.querySelector('#playToScore')
let firstScore = 0;
let secondScore = 0;
let winningScore = 5;
let isGameOver = false;
const reset = document.querySelector('#reset')

let playButtonOne = playerOne.addEventListener('click', function () {
    if (!isGameOver) {
        firstScore++;
        if (firstScore === winningScore) {
            isGameOver = true
            playOneDisplay.classList.add('winner')
            playTwoDisplay.classList.add('loser')
        }
        playOneDisplay.textContent = firstScore
    }
})

let playButtonTwo = playerTwo.addEventListener('click', function () {
    if (!isGameOver) {
        secondScore++;
        if (secondScore === winningScore) {
            isGameOver = true
            playTwoDisplay.classList.add('winner')
            playOneDisplay.classList.add('loser')
        }
        playTwoDisplay.textContent = secondScore
    }
})

let playerOneNameInput = playerOneName.addEventListener('change', function (e) {
    playerOne.innerHTML = `+1 ${this.value}`
    this.value = ''
})
let playerTwoNameInput = playerTwoName.addEventListener('change', function (e) {
    playerTwo.innerHTML = `+1 ${this.value}`
    this.value = ''
})

playToSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetBut();
})

let resetButton = reset.addEventListener('click', resetBut)

function resetBut() {
    isGameOver = false;
    firstScore = 0;
    secondScore = 0;
    playOneDisplay.innerHTML = firstScore;
    playTwoDisplay.innerHTML = secondScore;
    playTwoDisplay.classList.remove('winner', 'loser')
    playOneDisplay.classList.remove('loser', 'winner')
}