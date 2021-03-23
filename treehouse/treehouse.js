
for (let i = 1; i < 11; i++) {
    console.log(i)
    const newButton = document.createElement('button')
    newButton.innerText = `Button ${i}`
    document.querySelector('#container').appendChild(newButton)
    newButton.addEventListener('click', function () {
        alert(`you clicked button number ${i}`)
    })
}

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        document.getElementById('ajax').innerHTML = xhr.responseText
    }
    xhr.open("GET", "treehouse.html")
    xhr.send()
}


// function getUserName(callback) {
//     const name = prompt('What is your name?');
//     callback(name);
// }

// function greeting(name) {
//     alert('Hello, ' + name);
// }

// getUserName(greeting);
// For getUserName to be able to run, it must first go through greeting. Like a hallpass.

fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        console.log(res.url)
        return res.json()
    })
    .then(data => {
        console.log(data.message)
        let fetch = document.querySelector('#fetchApi')
        let newImg = document.querySelector('#pic')
        newImg.src = data.message
    })

