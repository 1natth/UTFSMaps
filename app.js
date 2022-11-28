const express = require('express')

const app = express()

app.get('/', function(res, res){

    res.send()
})

const PORT = process.env.PORT || 8000

console.log({PORT})

app.listen(PORT)

