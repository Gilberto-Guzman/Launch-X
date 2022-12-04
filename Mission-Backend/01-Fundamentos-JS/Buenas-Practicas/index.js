
let parrafoInicial = document.getElementById("parrafoinicial");

console.log(parrafoInicial);

//Creamos un evento
parrafoInicial.onclick = function() {
    cambiaColorAleatorio();
}

function cambiaColorAleatorio() {

    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ];

    console.log(
        parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)]
    );
    //parrafoInicial.style.color = "red";
    
}


// document.getElementById("parrafoinicial").onclick = function() {
//     accion();
// }

// function accion() {
//     alert("holiiiii");
// }











/*
TIPOS DE VARIABLES

var --> Puede modificarse, tiene scope global (Vive hasta que la pagina se cierre) - NO SE RECOMIENDA
let --> Puede modificarse, tiene un scope limitado (Vive hasta que se sale del ambito) - SE RECOMIENDA
const --> CONSTANTE, No modificable - Scope Global
*/


// CTRL + SHIFT + C --> Abres la ventadna de comandos de tu navegador
// CTRL + F5 --> Refresca tu navegador

/*
CASES

PascalCase - Clases - JAVA

camelCase - Variables, Funciones, Atributos. - JavaScript
    Variable -> parrafoInicial
    Funcion -> parrafoInicial()
    Atributo -> parrafoInicial

snake_case - Python , JavaScript
    Variables y Funciones

CAPITAL CASE - Constantes

*/
