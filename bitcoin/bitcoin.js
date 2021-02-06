/* 

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("Response, waiting to parse", res)
        return res.json();
    })
    .then(data => {
        console.log("Data parsed", data)
        console.log(data.ticker.price)
        let newP = document.createElement('p')
        newP.innerHTML = `The current bitcoin price is ${data.ticker.price}`
        const container = document.querySelector('#ticker')
        container.appendChild(newP)
    })
    .catch(err => {
        console.log("There was an error", err)
    })
 */

// This is much much better. It uses the new Fetch API, with callbacks. It still doesn't use the async functions though, which are
// even easier to deal with.


/*
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price)
    })
    .catch(error => {
        console.log(error)
    })
 */
// Here we use the Axios library to create a simplified version of the previous function. It is better because we do not have to parse
// the Json files ourselves, but immediately get our headers, ready to use. We also do not need to use the fetch function, because 
// Axios does all the heavy lifting for us.



const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
        return res.data.ticker.price
    }
    catch (e) {
        console.log("There has been an error", e)
    }
}
const addBtc = async () => {
    const newPrice = await fetchBitcoinPrice()
    let priceP = document.querySelector('#ticker')
    priceP.innerHTML = `The current price for Bitcoin is ${newPrice}`
}
addBtc()

// Pretty much exactly the same as the previous function, except it is bound within an async function. When we use async functions,
// we are exempted from using .then keywords.


