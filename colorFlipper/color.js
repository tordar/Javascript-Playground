function colorChanger() {
    let btn = document.querySelector('#btn');
    let title = document.querySelector('#h1');
    const colorInput = document.getElementById('colorInput')
    let textColor = document.getElementById('textColor')
    btn.addEventListener('click', function () {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        title.innerHTML = `The new color is rgb(${r}, ${g}, ${b})`
        textColor.innerText = 'You can also try entering in a color in the text field above'
        if (r + b + g < 250) {
            title.style.color = 'white'
        } else if (r + b + g > 250) {
            title.style.color = 'black'
        }

    })
    colorInput.addEventListener('keypress', function (e) {
        let textColor = document.getElementById('textColor')
        if (e.key === 'Enter') {
            document.body.style.backgroundColor = colorInput.value
            title.innerHTML = `The new color is (${colorInput.value})`
        }
    })

}
colorChanger()