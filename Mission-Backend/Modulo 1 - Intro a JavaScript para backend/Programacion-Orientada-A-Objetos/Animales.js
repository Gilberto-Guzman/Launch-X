//HERENCIA


//En JavaScript no es necesario que el archivo se llame igual que la clase

class Animales {

    //===ATRIBUTOS PRIVADOS===
    //Forma Antigua
    // _especie = "Felis Catus";
    //Forma Actual

    //NOTA: Los atributos privados solo se pueden utilizar dentro de la clase
    #especie = "";
    #nombre = "";
    #edad = 0;
    // #terrenosAbuela = "Terreno";

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    canta(){
        // console.log(this.nombre);
        // return this.nombre + 'puede cantar';

        //backticks --> alt gr + `
        return `${this.nombre} puede cantar`;
    }

    correr(){
        return `${this.nombre} puede correr`;
    }

    //Encapsulamiento
    getEspecie(){
        return this.#especie;
    }

    setEspecie(especie){
        this.especie = especie;
    }

    // ganarPeleaTerrenos () {

    // }

    // MuerteAbuela () {

    // }
}

class Gatos extends Animales {
    
    constructor(nombre, edad, colorBigotes){
        super(nombre, edad);
        this.colorBigotes = colorBigotes;
    }

    bigotes(){
        return `Tengo bigotes color ${this.colorBigotes}`;
    }

    anios(){
        return `Tengo ${this.edad} años`;
    }

    especiegato(){
        return `Soy un ${this.getEspecie()}`;
    }
}

let animal = new Animales("gato", 5);
animal

let gato = new Gatos("gato", 5, "blanco");


console.log(gato.colorBigotes);
console.log(gato.bigotes());
console.log(gato.correr());
console.log(gato.anios());
console.log(gato);

//===ATRIBUTOS PRIVADOS===
//Forma Antigua
// console.log(animal._especie);
// console.log(gato._especie);

console.log(gato.especiegato());








// let gato = new Animales("gato","Felis catus");

// gato.canta("gato");
// console.log(gato.canta());
// console.log(gato.correr());