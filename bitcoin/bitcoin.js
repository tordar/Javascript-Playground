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

// This is much much better. It uses the new Fetch API, with callbacks. It still doesn't use the async functions though, which are
// even easier to deal with.