function applyForVisa(documents, resolve) {
    console.log('Processing ...')
    setTimeout(() => {
        let visa = {}
        resolve(visa)
    }, 2000)
}

applyForVisa({}, function(visa){
    console.info('Visa is ready')
})