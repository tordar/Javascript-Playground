function colorChanger() {
    let btn = document.querySelector('#btn');
    let title = document.querySelector('#h1');
    btn.addEventListener('click', function () {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        title.innerHTML = `The new color is rgb(${r}, ${g}, ${b})`
        if (r + b + g < 250) {
            title.style.color = 'white'
        } else if (r + b + g > 250) {
            title.style.color = 'black'
        }
    })
}
colorChanger()