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


app.get('/', (req, res) => {
    res.render('home', {
        anio: new Date().getFullYear()
    })
})

app.get('/about',(req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    })
})

app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`)
})
