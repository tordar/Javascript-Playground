/* let jokeP = document.querySelector('#jokes')
let btn = document.querySelector('#jokeBtn');

const addJoke = async () => {
    const jokeTxt = await dadJoke()
    const newLi = document.createElement('li');
    newLi.append(jokeTxt)
    jokeP.append(newLi)
    jokeP.innerHTML = jokeTxt
}


const dadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const dad = await axios.get('https://icanhazdadjoke.com', config)
        console.log(dad.data.joke)
        return dad.data.joke
    }
    catch (e) {
        return "No jokes available, try again"
    }
}

btn.addEventListener('click', addJoke) */

// Joke generator, could be used for something else




const form = document.querySelector("#searchForm")
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows?`, config)
    let firstImg = res.data[0].show.image.medium
    makeImages(res.data)
    form.elements.query.value = ""
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const newImg = document.createElement('img');
            newImg.src = result.show.image.medium
            const container = document.querySelector("#container").appendChild(newImg);
        }
    }
}

const clear = document.querySelector("#clear")
clear.addEventListener("click", function () {
    const cont = document.querySelector("#container")
    const item = document.querySelector("img")
    while (cont.firstChild) {
        cont.removeChild(cont.lastChild)
    }
})