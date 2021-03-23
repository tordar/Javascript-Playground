
// Problem: We need a simple way to look at a user's badge count and JavaScript points


// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// Connect to API url (https://teamtreehouse.com/username.json)
const https = require('https');

// Function: Printing message to console
function printMessage(username, badges, points) {
    const message = `${username} has ${badges} badges and ${points} points in Javascript`;
    console.log(message)
}
function getProfile(username) {
    try {
        const request = https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
            let body = ""
            res.on('data', data => {
                body += data.toString()
            })
            res.on('end', () => {
                const profile = JSON.parse(body)
                //console.log(profile)
                printMessage(username, profile.badges.length, profile.points.JavaScript)
            })

        })
        request.on('error', (e) => {
            console.error(`this led to the error: ${e.message}`, e);
        })
    } catch (error) {
        console.error('there was an error with something, review the code')
    }
}


const users = process.argv.slice(2)
users.forEach(getProfile)