const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for (i = 1; i < 899; i++) {
    const newImg = document.createElement('img');
    newImg.src = baseUrl + i + '.png'
    const container = document.querySelector("#pokemon").appendChild(newImg);
}


function isBetween(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}

try {
    hello.toUpperCase()
} catch {
    console.log('false')
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.forEach(function (sup) {
    console.log(sup * sup)
})
// Here it takes every instance in the array, and FOR EACH of them, does one function. In this function there's a paramater and the function
// instructs each of the iterances to multiply with themselves

//numbers.forEach(function (arr) {
//console.log(` This is number ${arr} in the array`)
//})

let cleanNames = [
    '     timothee',
    '   darth_hater',
    'assyfrassy    ',
    'elton john    ',
];

const names = cleanNames.map(function (name) {
    return name.trim()
})

//const addUp = numbers.map(num => {
//console.log(`This is each of the numbers in the array ${num}`)
//console.log(`This is each of them, squared ${Math.pow(num, num)}`)
//})

const nunums = numbers.filter(num => num < 8)
// Implicit return by using arrow functions and one liner function does not need curly braces
// Filter creates a whole new array from a different array

let any = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(any)
// This block and the next one do the same exact thing, with different methods. This one with the reduce method.

total = 0;
for (num of numbers) {
    total += num
}
console.log(total);
// This one with a for loop, which adds a new number to the total for each loop.
