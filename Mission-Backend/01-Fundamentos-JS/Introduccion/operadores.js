let lista = [];


let x = 5;
let y = 10;

// Asignación de adicion
x += y; // Es exactamente los mismo que hacer esto: x = x + y --> 15
x += y; //--> 25

console.log(x);

lista.push(x)
console.log(lista);



//Asignacion de resta
y -= x;
console.log(y);

lista.push(y)
console.log(lista);


// Asignacion de multiplicacion

x *= y;
//Se convierte en string
console.log("X = "+ x);


//Operador de bit a bit de desplazamiento a la izquierda
//https://stackoverflow.com/questions/17769948/what-does-this-operator-mean-in-c
x = 5;
y = 10;
x <<= y
console.log("X = "+ x);

//Asignacion de modulo o residuo de una division
x = 5;
y = 11; //10
console.log(y % x); // 10 / 5 = 2, el residuo es 0
                    // 11 / 5 = 2.2, el residuo es 1

y %= x
console.log("Y = "+ y);


//Estructura de control if

let var1 = 3;
let var2 = 4;

//Operador igual
if (var1 == '3') {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

//Operador estrictamente igual
if (var1 === '3') {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

//Operador de desigualdad
if (var1 != '4') {
    console.log("Son diferentes");
} else {
    console.log("No son diferentes");
}

//Operador de desigualdad estricta
if (var1 !== '3') {
    console.log("Son diferentes");
} else {
    console.log("No son diferentes");
}

// > Mayor que
console.log(var1 > var2);

// < Menor que
console.log(var1 < var2);

//Menor o igual que
console.log(23 <= 23);

//Mayor o igual que 
console.log(23 >= 23);

