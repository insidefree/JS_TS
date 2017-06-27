let add = (x, y) => {
    return x + y
}

let square = x => {
    return x * x
}

let giveMeAnswer = () => {
    return 42
}

let log = () => console.log('logging')

let multiply = (x, y) => x * y

let getPerson = () => ({ name: 'bench' });

(() => console.log('IIFE'))()

console.log(add(2, 5))
console.log(square(3))
console.log(giveMeAnswer())
console.log(log())
console.log(multiply(3, 7))
console.log(getPerson())


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
numbers.forEach(el => sum += el)

let squared = numbers.map(n => n * n)

console.log(sum)
console.log(squared)

let person = {
    name: 'Bob',
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`)
            console.log(this)
        }, 2000)
    }
}

person.greet()