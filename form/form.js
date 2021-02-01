const tweetForm = document.querySelector('#form');
const tweetList = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = tweetForm.elements.username
    const tweetInput = tweetForm.elements.tweet
    addTweet(userInput.value, tweetInput.value)
    tweetInput.value = ''
    userInput.value = ''

})

const addTweet = function (username, tweet) {
    const newTweet = document.createElement('li');
    const bold = document.createElement('b');
    bold.append(username)
    newTweet.append(`Username: ${username} // Tweet: ${tweet}`)
    tweetList.append(newTweet)
}

// tweetList
tweetList.addEventListener('click', function (e) {
    e.target.remove()
})

const input = document.querySelector("#input")
const update = document.querySelector("#updater")
input.addEventListener('input', function (e) {
    update.innerText = input.value

});