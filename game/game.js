let char = document.getElementById('character');
let block = document.getElementById('block');
let counter = 0
function jump() {
    if (char.classList != "animate") {
        char.classList.add('animate');
    }
    setTimeout(function () {
        char.classList.remove('animate')
    }, 500)
}

let checkDead = setInterval(function () {
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > -20 && charTop >= 130) {
        block.style.animation = "none";
        alert("Game over score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);