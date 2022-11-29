const express = require('express');
const fs=require('fs');
const app = express();
const HTML_CONTENT_TYPE="text/html";

exports.init ='/',function(req,res){
    res.statusCode = 200;
    res.setHeader('Content-type', HTML_CONTENT_TYPE);
    const index=fs.readFile(`${__dirname}/../libreria/templates/paginas/home.html`, (err,data) =>{
        if(err){
            console.log("Error en la carga del home.html");
            res.end("Error en la carga del home.html")
        }else{
            res.end(data);
        }
    });

}
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

