
let content = document.querySelector('#content')
let searchFunction = document.createElement('input')
searchFunction.setAttribute('type', 'text')
searchFunction.setAttribute('placeholder', 'what u interested in?')
content.appendChild(searchFunction)
let value = searchFunction.value

searchFunction.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log("this works")
        return value
    }
})

function newsType() {
    console.log(value)
    fetch(`https://newsapi.org/v2/everything?q=something&from=2021-03-20&sortBy=popularity&apiKey=f00dd966d04e49968f70b39ef45e1451`)
        .then(res => {
            console.log("Response, waiting to parse", res)
            return res.json();
        })
        .then(data => {
            console.log(data.articles)

            for (let i = 0; i < 20; i++) {
                let content = document.querySelector('#content')
                let title = document.createElement('a')
                title.setAttribute('id', `title${[i]}`)
                title.setAttribute('href', `${data.articles[i].url}`)
                content.appendChild(title)
                title.innerHTML = `${data.articles[i].title}`

                let source = document.createElement('p')
                source.setAttribute('id', `source${[i]}`)
                content.appendChild(source)
                source.innerText = `${data.articles[i].source.name}`

                if (data.articles[i].urlToImage) {
                    let img = document.createElement('img')
                    img.setAttribute('src', `${data.articles[i].urlToImage}`)
                    content.appendChild(img)
                } if (null) {
                    console.log("No picture")
                }

                if (data.articles[i].description !== null) {
                    let body = document.createElement('p')
                    body.setAttribute('id', `content${[i]}`)
                    content.appendChild(body)
                    body.innerText = `${data.articles[i].description}`
                } if (data.articles[i].description === null) {
                    let body = document.createElement('p')
                    body.setAttribute('id', `content${[i]}`)
                    content.appendChild(body)
                    body.innerText = `This article has no content to show`
                    body.style.color = 'red'
                }

            }
        })
        .catch(err => {
            console.log("There was an error", err)
        })
}
newsType()


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve
            console.log('This works')
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}
// expected output: "resolved"

asyncCall();

