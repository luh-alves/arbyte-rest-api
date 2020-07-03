const express = require('express')
const routes = require('./src/routes')
const app = express()
const port = process.env.PORT || 55555

app.use(routes)


app.listen(port, (err) => {
    if (err) return console.log(`Não ${err}`)
    console.log('Rodar', port)
})