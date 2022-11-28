const express = require('express')

const app = express()

app.get('/', function(res, res){

    res.sendFile('home.html')
})
app.get('/home.html', function(res, res){

    res.sendFile(home.html)
})

const PORT = process.env.PORT || 4000

console.log({PORT})

app.listen(PORT, function(){

    console.log("Servidor UTFSMaps", PORT)
})

