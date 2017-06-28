function applyForVisa(documents) {
    console.log('Processing ...')
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            Math.random() > .5 ? resolve({}) : reject('Not enough documents')
        }, 2000)
    })
}

function bookHotel() {
    console.log('Booking hotel...')
}
function buyTickets() {
    console.log('Buying tickets')
}

applyForVisa({})
    .then(visa => console.info('Visa is ready'))
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error))


