// Ciclo For

for (let i = 0; i < 9 ; i+=2) {

    if((i % 2 ) != 0) {
        continue;
    }
    if(i == 10) {
        break;
    }
    console.log(i);
}
console.log("Aqui ya me sali :3");

//empty y null no son iguales

var1 = null;
// var2 = empty;
var3 = "";
var4 = 0;
var5 = false;
var6 = undefined;

console.log(var1);

//imprime un cero
console.log(var1 + var1);
// console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);

console.log(var6);
console.log(var6 + var6); //Nan --> Not A Number

var6 = 5;
console.log(var6);

console.log("______________________________________________");


// If- Else if
function validadEdad(edad) {
    //No es necesario agregar el true
    if(confirm('¿Estas seguro de seguir con esto?') == true){

        console.log("Sigue bajo tu propio riesgo");
        
        if (edad >= 18 && edad <=150){
            console.log("Puedes comprar cigarritos");
        } else if (edad > 150) { 
            console.log("Saludame a Cepillín");
        } else if (edad >= 0) {
            console.log("Tas muy chiki, vuelve en unos años.");
        } else {
            console.log("A caray, tu no deberias de existir");
        }

    } else {
        console.log("Que miedoso... xD");
    }
}

// --------------------------------------------
// Switch

function mandarMensajes(edad) {
    console.log(typeof edad);
    switch(edad) {
        case 13: 
            console.log("Deberias estar en la secundaria.");
            break;
        case 17:
            console.log("Esperate un año más.");
            break;
        
        case 5:
            validadEdad(edad);
            break;
        default:
            console.log("No pues no se que decirte UwU");
    }    
}

//if else
let edad = prompt("Introduce tu edad");
if (edad && !isNaN(edad)) {

    edad = Number(edad);
    // console.log(Number("cinco"));

    validadEdad(edad);
    mandarMensajes(edad);
} else {
    alert("Debes introducir tu edad");
    location.reload();
}


// --------------------------------------------
// While
boletosDisponibles = 10;

while (boletosDisponibles > 0) {
    console.log("Boleto comprado para el Corona Capital");
    boletosDisponibles --;
    console.log("Quedan: " + boletosDisponibles);
    console.log("_____________________");
}

// Do while
do {
    console.log("Boleto comprado para el Corona Capital");
    boletosDisponibles --;
    console.log("Quedan: " + boletosDisponibles);
} while (boletosDisponibles > 0);


// -------------------------------
// Try CATCH finally
try {
    // Codigo suseptible a fallos
     balidaredad("edad");
    // throw "Orden 66";
} catch (error) {
    // console.error(error);
    console.info("Validar edad no existe");
} finally { //Si o si se ejecuta al final el finally
    console.warn("Tu crush no te quiere :( ");
}

