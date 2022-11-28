let nombres = {
    nombre: "Jesús",
    apellido: "Guzmán",
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));

console.log(nombres);

function Perro(nombre, edad) {
    let perro = Object.create(ObjectoConstructor);
    perro.nombre = nombre;
    perro.edad = edad;
    return perro;
}

let ObjectoConstructor = {
    habla: function () {
        return "Wof Wof Soy un perro";
    }
}

let firulais = Perro("firulais", 9);
console.log(firulais);
console.log(firulais.habla());