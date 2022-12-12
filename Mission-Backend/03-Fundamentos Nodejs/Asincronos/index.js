// Procesamiento Asincrono <--> Non Bbloking


//Proceso asincrono clase
https = require('http');

console.log("1. Hola");

//Esta instruccion se ejecuta al ultimo ya que esta esperando una respuesta
https.get('http://httpstat.us/200', (res) => {
    console.log(`2. La API devolvio: ${res.statusCode}`);
});

console.log("3. Adios");



/*
//Hilo asincrono
setTimeout(function(){
    console.log("Me has esperado");
}, 5000);
*/
