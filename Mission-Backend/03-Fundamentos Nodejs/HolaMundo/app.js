// console.log("Hola Mundo");

const http = require('http'); //Cargando un modulo de node.js
const url = require('url');
const rd = require('./modules/retrievedate'); // Cargamos un modulo propio que esta en ./modules/retrievedate 


// console.log(http);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("La fecha y hora es" + rd.RetrieveDate());
    // res.write(req.url);
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;
    // res.end("Hola Mundo !!!!!!!!!");
    res.end(text);
}).listen(8081);

// http.createServer( (req, res) => {
// });