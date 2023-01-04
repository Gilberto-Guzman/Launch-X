//Podemos hacer que una funcion retorne un tipo de dato en especifico 
function suma(a, b) {
    return a + b
}

// const resultado = suma(4, 3)
// const resultado = suma(4, "3")
const resultado = suma(4, "asasas")

console.log(resultado)

/*
Así es en java donde le decimos al compilador que esta función
devuelve un String y necesita un tipo de dato String 
public String getNombre(String nombre) {

}
*/