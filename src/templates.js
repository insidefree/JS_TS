function greet(name) {
    console.log(`Hello ${name}`.toUpperCase())
}

function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `)
}

greet('bench')

createEmail('john@mail.ru', 'bench@bench.com', 'greeting', 'Hi...!')

function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`)
}

add(1, 3)

let name = 'bench'
console.log(upperName`Hello ${name}`)

function upperName(literals, ...values) {
    console.log(literals, values)
    return literals[0] + values[0].toUpperCase()
}