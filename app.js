const express = require('express');
const fs=require('fs');
const app = express();
const HTML_CONTENT_TYPE="text/html";
const http=require('http');

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/libreria/templates/paginas/home.html')
}) 

app.get('/edificio_a', (req, res)=> {
    res.sendFile(__dirname + '/libreria/templates/paginas/ed_a.html')
})

app.get('/edificio_b', (req, res)=> {
    res.sendFile(__dirname + '/libreria/templates/paginas/ed_b.html')
})

app.get('/edificio_c', (req, res)=> {
    res.sendFile(__dirname + '/libreria/templates/paginas/ed_c.html')
})

app.get('/edificio_e', (req, res)=> {
    res.sendFile(__dirname + '/libreria/templates/paginas/ed_e.html')
})

app.get('/edificio_f', (req, res)=> {
    res.sendFile(__dirname + '/libreria/templates/paginas/ed_f.html')
})
const PORT = process.env.PORT || 4000

console.log({PORT})

app.listen(PORT, function(){

    console.log("Servidor UTFSMaps", PORT)
})

app.use(express.static(__dirname+'/libreria/templates/paginas/css'));

