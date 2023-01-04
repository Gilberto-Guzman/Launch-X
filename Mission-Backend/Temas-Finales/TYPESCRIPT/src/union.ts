// Le estamos diciendo a TypeScript que podemos recibir tanto numeros como strings 
function printStatusCode(code: number | string) {
    console.log(`Mi status code es: ${code}`)
}

printStatusCode(404)
printStatusCode('404')