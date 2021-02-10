const franc = require('franc');
const langs = require('langs');

function detector() {
    const input = process.argv[2];
    let test = franc(input)
    let format = langs.where("3", test);
    console.log(`This language is ${format.name}`)
}

try {
    //const test = franc("This is a test of language")
    detector()
}
catch {
    console.log("Could not detect language. Try again")
}