
// Connect to API url (https://teamtreehouse.com/username.json)
const https = require('https');

// Function: Printing message to console
function printMessage(username, badges, points) {
    const message = `${username} has ${badges} badges and ${points} points in Javascript`;
    console.log(message)
}

function printError(error) {
    console.error(error.message)
}

function getProfile(username) {
    try {
        const request = https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
            let body = ""
            res.on('data', data => {
                body += data.toString()
            })
            res.on('end', () => {
                try {
                    const profile = JSON.parse(body)
                    //console.log(profile)
                    printMessage(username, profile.badges.length, profile.points.JavaScript)
                } catch (error) {
                    printError(error)
                }
            })

        })
        request.on('error', (error) => {
            printError(error);
        })
    } catch (error) {
        printError(error);
    }
}



const users = process.argv.slice(2)
users.forEach(getProfile)