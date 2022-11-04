/*  */

const cuadrado = function (x) {
    return x * x;
}
let numero = 8;

/*
console.log(cuadrado(numero));
*/

/*
let numeroAlCuadrado = cuadrado(numero);
console.log(numeroAlCuadrado);
*/

let numero2 = 19;
let sumaNumerosAlCuadrado = cuadrado(numero) + cuadrado(numero2);
console.log(sumaNumerosAlCuadrado);





/* Funciones vacias, no reciben ni retornan ningun tipo de parametro */

const ruido = function () {
    console.log('kataplum!');
}
ruido();


const exponencial = function (base , exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente ; i++) {
        resultado*=base;
    }
    return resultado;
};
let resultadoExponencial = exponencial(4 , 3);
console.log(resultadoExponencial);

// console.log(exponencial(4,3));



/* En JavaScript no necesitas definir previamente una funcion para poder utilizarla */
console.log(sumar(5 , 65));
function sumar (x , y) {
    return x + y;
}

const restar = (a , b) => {
    return a - b;
}
console.log(restar(40 , 8));

function saludar(quien) {
    console.log("Hola " + quien);
}

saludar("Explorers");
console.log("Bye");


//Excepciones
function preguntaDireccion(pregunta) {
    let result = prompt(pregunta);
    if (result.toLocaleLowerCase() == "izquierda") return "I";
    if (result.toLocaleLowerCase() == "derecha") return "D";
    throw new Error("Dirección inválida" + result);
}

function mirar() {
    if (preguntaDireccion("A que lado?") == "I") {
        return "una casa";
    } else {
        return "2 oso hambrientos";
    }
}

try {
    console.log("Mira a ", mirar());
} catch (error) {
    console.log("Hubo un error: " + error);
}



/*
const preguntar = (pregunta) => {
    let respuesta = prompt(pregunta);
    respuesta = respuesta.toLowerCase();
    if(respuesta == 'izquierda' || respuesta == 'derecha') return respuesta;
    throw new Error ('Direccion inválida' + respuesta);
};

const mirar2 = () => {
    let aDonde = preguntar("¿A que lado volteas?");
    //let aDonde = "Derecha";

    if (aDonde == "izquierda"){
        return "una casa";
    } 
    else {
        return "2 osos hambrientos";
    }
};

try {
    let aDonde = mirar2();
    console.log("Mirar a", aDonde);
} catch(error) {
    console.log("Hubo un error: ", error);
}
*/

/* Return --> retorna el valor     Throw --> manda a llamar el valor*/