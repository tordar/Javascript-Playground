let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon"
];

var picturesArray = new Array();

picturesArray[0] = "img/1.JPG";
picturesArray[1] = "img/2.JPG";
picturesArray[2] = "img/3.JPG";
picturesArray[3] = "img/4.JPG";
picturesArray[4] = "img/5.JPG";
picturesArray[5] = "img/6.JPG";
picturesArray[6] = "img/7.JPG";
picturesArray[7] = "img/8.JPG";

var descriptions = [
    "Joe in the snow",
    "Easy to entertain",
    "Ellen in the snow",
    "Some of the 12 apostles",
    "Some more of them",
    "Great Ocean Road 1",
    "Great Ocean Road 2",
    "Great Ocean Road 3"
]

let imgBtn = document.querySelector('#pictureId');
let desc = document.querySelector("#description");
function showImages() {
    var number = Math.floor(Math.random() * picturesArray.length);
    document.getElementById("myImages").innerHTML = '<img src="' + picturesArray[number] + ' " />';
    desc.innerHTML = descriptions[number]
}
imgBtn.onclick = showImages





let quoteBtn = document.querySelector('#quoteBtnn');
quoteBtn.onclick = function () {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quote").innerHTML = quotes[randomNumber];
}


function hideElement() {
    let y = document.querySelector('#lineRemover');
    let x = document.getElementById("ruler");

    y.onclick = function () {
        x.remove();
        setTimeout(function () { alert("The line has been removed, refresh webpage to get it back"); }, 500);
    }
}
hideElement()

function mouseHoverGame() {
    let totalEnter = 0;
    let x = document.querySelector("#mouseEnter");
    x.addEventListener("mouseenter", function () {
        totalEnter++;
        this.innerHTML = `Mouse enter = ${totalEnter}`
        // You can use the keyword this, instead of x, as it refers to the function that the event handler is dealing with
        if (totalEnter == 100) {
            alert("Yo, don't you think it's time for you to move on and do something else now?")
        }
    })
}
mouseHoverGame()

/* let input = document.querySelector('input');
input.addEventListener('keyup', function (evt) {
    switch (evt.code) {
        case 'ArrowUp':
            console.log('UP')
            break;
        case 'ArrowDown':
            console.log('DOWN')
            break;
        case 'ArrowLeft':
            console.log('LEFT')
            break;
        case 'ArrowRight':
            console.log('RIGHT')
            break;
        default:
            console.log('Ignored')
    };
});
 */

let weatherBtn = document.querySelector("#weatherId")
function getWeather() {
    const weather = document.getElementsByClassName('.weatherwidget-io');
    !function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) {
            js = d.createElement(s); js.id = id;
            js.src = 'https://weatherwidget.io/js/widget.min.js';
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, 'script', 'weatherwidget-io-js');
}
weatherBtn.onclick = getWeather


function setTime() {
    let time = new Date();
    let date = `${time.getDate()} - ${time.getMonth() + 1} - ${time.getFullYear()}`

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    let exactTime = `${time.getHours()}:${addZero(time.getMinutes())}`
    console.log(exactTime)

    document.getElementById("time").innerHTML = date;
    document.getElementById("clock").innerHTML = exactTime;
};


window.onload = setTime()
setInterval(() => {
    setTime()
}, 1000);
// This skips the first setInterval loop so the timer immediately loads on the website

