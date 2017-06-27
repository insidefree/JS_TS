// let [js, php, rb, py] = ['JavaScript', 'PHP', 'Ruby', 'Python']

// let scores = [3, 4, [5, 6, 7]]

// let [low, , [...high], ...rest] = scores

// console.log(low, high, rest)


function computeScore([low, mid]) {
    console.log(low, mid)
}

computeScore([3, 4])

function getScores() {
    return [3, 4, 5]
}

let scores = getScores()
console.log(scores)
let [low, mid, high] = getScores()
console.log(low, mid, high)


let yes = 'Yes'
let no = 'No';

[yes, no] = [no, yes]
console.log('Yes is ', yes)
console.log('No is ', no)
console.log('o_O')

// objects

let user = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
}

let { firstName: first, lastName: last, age = 25, social: { facebook: fb } } = user
console.log(first, last, age, fb)

function post(url, { data: { firstName, lastName }, cache }) {
    console.log(firstName, lastName, cache)
}

let result = post('api/users', { data: user, cache: false })

function getUserInfo() {
    return {
        firstName: 'John',
        lastName: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    }
}

let { firstName, lastName, social: { twitter } } = getUserInfo()