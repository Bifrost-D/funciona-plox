const express = require('express')
const hbs = require('hbs')
const app = express()

//Port
const port = process.env.PORT || 8080 

//middleware
app.use(express.static(__dirname + '/public'))

//hbs
hbs.registerPartials(__dirname + '/views/partials')

//Motor de plantillas
app.set('view engine', 'hbs')

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

app.get('/', (req, res) => {
    res.render('home', {
    })
})

app.get('/about',(req, res) => {
    res.render('about', {
    })
})

app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`)
})
