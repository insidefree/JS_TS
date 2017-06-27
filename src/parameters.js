function greet(greeting = 'Hello', name = 'Friend') {
    console.log(`${greeting} ${name}`)
}

greet('Hi', 'bench')

greet('Hi')

function sum() {
    console.log(arguments instanceof Object)
    let sum = 0

    for (var key in arguments) {
        sum += arguments[key]
    }
    console.log(sum)
}

function sum(...values) {
    console.log(values)
    let sum = 0
    values.forEach(function (value) {
        sum += value
    })
    console.log(sum)
}

function sum(...values) {
    console.log(values.reduce(function (prevVal, currentVal) {
        return prevVal + currentVal
    }))
}

sum(5, 7, 2, 10)