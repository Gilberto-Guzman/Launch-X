// Mi promesa 


/**
 * Simplemente devuelve la cadena "Algo"
 * @returns {String} Algo
 */
function miFuncion() {
    return "Algo";
}


miFuncion()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
        // console.log("ERROR");
    })

// Forma más eficiente
// Async/Await
try {
    const data = await miFuncion();
    console.log(data);
} catch (err) {
    console.log("ERROR");
}