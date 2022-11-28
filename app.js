const express = require('express')

const app = express()

app.get('/', function(res, res){

    res.send(UTFSMaps)
})

const PORT = process.env.PORT || 8000

console.log({PORT})

app.listen(PORT, function(){

    console.log("Servidor UTFSMaps", PORT)
})

