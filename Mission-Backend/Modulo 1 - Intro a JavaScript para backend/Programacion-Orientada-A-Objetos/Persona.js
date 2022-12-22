//Polimorfismo
//Es la capacidad de crear una propiedad, un atributo, un metodo o un objeto que tenga mas de una forma

function Persona (nombre) {
    this.nombre = nombre;
    this.caminar = function () {
        console.log("CAMINANDO");
    }
}

function Alumno(nombre, llorandoSangre) {
    Persona.call(this, nombre);

    this.llorandoSangre = llorandoSangre;
    this.caminar = function() {
        console.log("CAMINANDO Y LLORANDO SANGRE");
    }
}

Alumno.prototype = Object.create(Persona.prototype);
Alumno.prototype.constructor = Alumno;

let estudiante1 = new Alumno('Gilberto Guzman', "React");
let Persona1 = new Persona("Memo Ochoa");

console.log(estudiante1.caminar());
console.log(Persona1.caminar());