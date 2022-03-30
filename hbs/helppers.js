const hbs = require('hbs')

//helpers
hbs.registerHelper('getAnnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('upperWord', (text) => {
    let words = text.split(' ')

    words.forEach((word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    });
    return words.join(' ')
})

