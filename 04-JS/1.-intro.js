/*Las variables se pueden declarar con la palabra reservada "var", estas variables se pueden considerar como globales
También se pueden declarar con la palabra reservada "let" y estas serán usadas dentro de un bloque de código
Igualmente está la declaración con la palabra reservada "const" y se usarán cuando el valor no cambie */

console.log("\n************* Variables **************\n");
var numero1 = 4;
var numero2 = 6;
var numero3 = 6;

console.log("Número 1: " + numero1 + "\nNúmero 2: " + numero2);

/*Las cadenas (Strings) son caracteres que pueden ser una frase o palabra y estas pueden darse con comillas dobles "", simples '' o invertidas ``
la diferencia es que con las invertidas podemos agregar variables dentro de la cadena con la sintaxis ${}*/

console.log("\n************* Cadenas **************\n");
var frase1 = "Ejemplo comillas dobles";
var frase2 = "Ejemplo comillas simples";
var frase3 = `Ejemplo comillas ${frase1} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);

/* Booleanos */
/* Las condicionales se pueden usar valores como > < = == === != y cada una tiene una funcionalidad de comparación entre elementos */

console.log("\n************* Condicionales **************\n");
console.log(numero1 != numero2);
console.log(numero1 > numero2);
console.log(numero1 === numero1);
console.log(numero1 < numero2);
console.log(numero2 != numero2);

let num1 = 1;
let num11 = "1";

/* == verifica el contenido del dato */
console.log('condicion ==',num1==num11);
/* === verifica el contenido y el tipo de dato */
console.log('condicion ==',num1===num11);

/*Los operadores lógicos se utilizan cuando se necesita comparar más de una condicional
El operador && (AND) necesita que todos sus valores sean true para que la salida sea true
El operador || (OR) necesita que solo uno de sus valores sea true para que la salida sea true*/
console.log("\n************* Operador lógico AND **************\n");
console.log(true && true); /* true and true => true */

console.log("\n************* Operador lógico OR **************\n");
console.log(false || false); /* false or false => false */



console.log(true || false);
console.log(false || true);

console.log(true && false && true);
console.log(false || true || false);

/* Primero se tiene que cumplir el AND para ir al OR */
console.log((true && false && true) || true);
/* AND tiene una menor jerarquia que OR */
console.log(false || true || (false && true));
/* Los arreglos son estructuras de datos que nos permiten agrupar datos de un mismo tipo */

console.log(numero1 === numero1 && numero1 < numero2);
console.log(numero2 > numero1 || numero3 != numero3);


console.log("\n************* Arreglos **************\n");
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

/* Los arreglos inician en 0 */
console.log(listaDeNumeros[5]);
/* Cuando nos salimos del tamaño del arreglo, se nos mostrara el mensaje undefined */
console.log(listaDeNumeros[6]);

/* Agregamos valores con push */
listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);


/* Quitamos valores con pop */
listaDeNumeros.pop();

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer", "Mission Comander","LaunchX","Innovacion", "JavaScript"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

/* Las cadenas (strings) pueden ser tratadas como arreglos */
let palabra = "Explorers";

console.log(palabra[2]);
console.log(palabra.length);

/* Los objetos son estructuras de datos que nos permiten agrupar datos de un diferentes tipos */
console.log("\n************* Objetos **************\n");

let explorer = {
    nombre: "Nombre del explorer",
    email: "email@innovacion.mx",
    numReg: 12345,
    mision: "Frontend",
    proyectos: ["Abogabot", "Taqueria", "Pasteleria", "Vacunación"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio",
        cuantos: 3,
    },
};

console.log(explorer);
console.log(explorer.numReg);
console.log(
    "Proyectos: "+ explorer.proPer.cuantos + " " + explorer.proPer.escolar
);
console.log(explorer.proyectos[2]);

/* undefined --> cualquier cosa */
/* nan --> not a number, es cuando estas esperando un numero y no llega */

/* Flujo condicional */

/* https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/ */
/* */
/* */

let number1 = 6;
let number2 = 6;
console.log("\n************* if / else **************\n");

if(number1 > number2){
    console.log("El numero 1 es mayor que número 2");
}
else if(number1 === number2){
    console.log("Los números son iguales");
}
else{
    console.log("El número 2 es mayor que número 1");
}




/* Ciclo condicional */
console.log("\n************* While **************\n");

let numberWhile = 5;
while (numberWhile <= 12){
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}
console.log("Aqui ya salió del while " + numberWhile);



/* Ciclo condicional de una iteración mínimo */
console.log("\n************* Do While **************\n");
let numeroDoWhile = 22;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aqui sale del Do While " + numeroDoWhile);

/* Ciclo for con iteración controlada */
console.log("\n************* For **************\n");
let numeroFor = 0;
for (numeroFor ; numeroFor <= 12 ; numeroFor = numeroFor + 1){
    console.log(numeroFor);
}


/* Opciones para evitar anidar condicionales */
console.log("\n************* Switch **************\n");

switch(prompt("¿Cómo esta el clima?")) {
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Ponte bloqueador");
        break;
    case "nublado":
        console.log("Tapate bien");
        break;
    default:
        console.log("No se como esta el clima");
        break; 
}
console.log("Aquí salimos del Switch");