// POTENTIAL IMPROVEMENTS
// Add difficulty levels, by changing the setTimeout function: fast, medium, slow


// VARIABLE DECLARATIONS
let container = document.getElementById('container')
let start = document.getElementById('start')
let startButton = document.getElementById('startButton')
let CountButtonHomeClicks = 0;
let timeOut
let prevNum = 1
let num = 1

//FUNCTION DECLARATIONS 
const startGame = () => {
    startButton.addEventListener('click', ()=>{
        styleAdder()
        start.remove()
    })
}

const gameOver = () => {
    let gameOver = document.createElement('div')
    document.body.appendChild(gameOver)
    gameOver.classList.add('gameover')
    gameOver.innerText = `YOU GOT A SCORE OF: ${CountButtonHomeClicks}\nSTART AGAIN?`
    CountButtonHomeClicks = 0;
    container.remove()
    gameOver.addEventListener('click', () =>{
        document.body.appendChild(container)
        startGame()
        gameOver.remove()
    })
}

const resetTimer = () =>{
    window.clearTimeout(timeOut);
    timeOut = setTimeout(
        "gameOver()"
    , 1000);
}

const styleAdder = () =>{
    let allDivs = document.getElementsByClassName('tiles')
    let divArr = [...allDivs];
        while (num === prevNum){
            num = Math.floor(Math.random() * 9 + 1 )
        }
        prevNum = num
        let x = document.getElementById(`${num}`)
        for(i=0; i<divArr.length; i++){
            divArr[i].classList.add('box');
            x.classList.add('style');
            }
    x.addEventListener('click', ()=>{
        CountButtonHomeClicks += 1
        console.log(CountButtonHomeClicks)
        if(x.classList.contains('style')){
            styleAdder()
            x.classList.remove('style')
        }
        resetTimer()
    })
}

// INITIALISE GAME
startGame()