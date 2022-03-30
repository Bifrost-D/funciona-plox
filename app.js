const express = require('express')
const hbs = require('hbs')
const app = express()

//imports

require('./hbs/helppers')

//Port
const port = process.env.PORT || 8080 

//middleware
app.use(express.static(__dirname + '/public'))

//hbs
hbs.registerPartials(__dirname + '/views/partials')

//Motor de plantillas
app.set('view engine', 'hbs')

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
