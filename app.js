const express = require('express');
const fs=require('fs');
const app = express();
const HTML_CONTENT_TYPE="text/html";

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

const setHeaders = (res, path, stats) => {
    let mimeType = 'text/plain'; // formato por defecto (podemos escoger el que deseemos)
    const lastPoint = path.split('').lastIndexOf('.');
    const ext = path.substring(lastPoint + 1);
    if(ext === 'html' || ext === 'htm') {
        mimeType = 'text/html';
    }
    if(ext === 'css') {
        mimeType = 'text/css';
    }
    if(ext === 'js') {
        mimeType = 'application/javascript';
    }
    res.set('content-type', mimeType);
}

