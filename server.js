const express = require('express')
const app = express()
const port = process.env.PORT || 55555

app.get('', (req,res) => {
    // depois do res eu posso colocar mais um status tipo: 400
    res.json({
        message:'ok',
    })
})

app.listen(port, (err) => {
    if (err) return console.log(`Não ${err}`)
    console.log('Rodar', port)
})