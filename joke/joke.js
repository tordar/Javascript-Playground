const dadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const dad = await axios.get('https://icanhazdadjoke.com', config)
        console.log(dad.data.joke)
    }
    catch (e) {
        console.log(e)
    }
}
dadJoke()

function newJoke() {
    let btn = document.querySelector('#jokeBtn');
    let jokeP = document.querySelector('#jokes')
    btn.addEventListener('click', function () {
        jokeP.innerHTML = dad
    })
}
newJoke()