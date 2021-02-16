
const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for (i = 1; i < 151; i++) {
    const newImg = document.createElement('img');
    newImg.src = baseUrl + i + '.png'
    let link = i
    const container = document.querySelector("#pokemon").appendChild(newImg);
    container.addEventListener("click", function (e) {
        console.log(link)
        const fetchPokemonInfo = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${link}`)
                String.prototype.capitalize = function () {
                    return this.charAt(0).toUpperCase() + this.slice(1);
                }
                let upper = res.data.name
                console.log(res.data)
                console.log(res.data.weight)
                return upper.capitalize();
            }
            catch (e) {
                console.log("There has been an error", e)
            }
        }
        const pokeInfo = async () => {
            const newPokemon = await fetchPokemonInfo()
            let pokeInfo = document.querySelector('#pokeInfo')
            pokeInfo.innerHTML = `This is <b>${newPokemon}</b>`
        }
        pokeInfo()
    })
}