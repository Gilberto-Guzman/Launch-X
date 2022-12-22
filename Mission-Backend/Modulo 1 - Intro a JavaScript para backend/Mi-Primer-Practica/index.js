/*
    npm init
    package name: (practica-1) holamundo
    version: (1.0.0) 0.0.1
    description:
    entry point: (index.js)
    test command:
    git repository:
    keywords: (PARA QUE LO PUEDAS BUSCAR EN EL NPM POR SI LO QUIERES SUBIR)
    author: Gilberto
    license: (ISC)Is this OK? (yes)


    node .\index.js
    localhost:3000
*/



// console.log('Hola Mundo');

const http = require('http');

//hotel
const host = '0.0.0.0';
//Habitacion
const port = 3000;

const server = http.createServer((req, res) => {
    
    // Respuestas informativas (100–199),
    // Respuestas satisfactorias (200–299),
    // Redirecciones (300–399),
    // Errores de los clientes (400–499),
    // y errores de los servidores (500–599).
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hola Mundo UwU");
});

server.listen(port, host, () => {
    console.log("Server encendido en " + host + "/" + port);
});