let container = document.getElementById('container')
let start = document.getElementById('start')
let startButton = document.getElementById('startButton')

const startGame = () => {
    startButton.addEventListener('click', ()=>{
        styleAdder()
        start.remove()
    })
}
startGame()

const gameOver = () => {
    let gameOver = document.createElement('div')
    document.body.appendChild(gameOver)
    gameOver.classList.add('gameover')
    gameOver.innerText = "GAME OVER\nSTART AGAIN?"
    container.remove()
    gameOver.addEventListener('click', () =>{
        document.body.appendChild(container)
        startGame()
        gameOver.remove()
    })
}

let prevNum = 1
let num = 1

let timeOut
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
        if(x.classList.contains('style')){
            styleAdder()
            x.classList.remove('style')
        }
        resetTimer()
    })
}




