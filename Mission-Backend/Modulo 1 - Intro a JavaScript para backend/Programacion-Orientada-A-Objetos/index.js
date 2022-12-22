//INTRODUCCION A OBJETOS Y POO

let nombres = {
    nombre: "Gilberto",
    apellido: "Guzmán",
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));

console.log(nombres);

// function Perro(nombre, edad) {
//     let perro = Object.create(ObjectoConstructor);
//     perro.nombre = nombre;
//     perro.edad = edad;
//     return perro;
// }

function perro(nombre, edad) {
    perro.nombre = nombre;
    perro.edad = edad;
}

// let ObjectoConstructor = {
//     habla: function () {
//         return "Wof Wof Soy un perro";
//     }
// }

perro.prototype.habla = function () {
    return "Wof Wof Soy un perro";
}

let firulais = new perro("firulais", 9);
console.log(firulais);
console.log(firulais.habla());