const express = require('express')
const routes = require('./src/routes')
const app = express()
const port = process.env.PORT || 55555
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(morgan('dev'))
app.use(cors())

//so vamos aceitar formato json como entrada
app.use(bodyParser.json())
app.use(routes)

//ou ele vai pegar o erro de cima ou vai ser 500
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })

})

app.listen(port, (err) => {
    if (err) return console.log(`Não ${err}`)
    console.log('Rodar', port)
})