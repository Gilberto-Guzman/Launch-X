interface Animal {
    isAlive: boolean
}

// Con el extends PODEMOS usar lo que este ahi dentro
interface Mamifero extends Animal {
    getColorPelo(pelo: string) : string
}

interface Perro extends Mamifero {
    getEspecie() :string
}

function acariciarAnimal(dog: Perro) {
    dog.getColorPelo("cafe")
}

// Con implements DEBEMOS usar lo que esta ahi dentro
class Gato implements Mamifero {
    
    isAlive: boolean

    maullar() {
        return "miau"
    }

    getColorPelo(pelo: string) {
        return pelo
    }
}


/*
class Animal {
    comer(comida) {
        console.log("Come " + comida)
    }
}

class Perro extends Animal {
    ladrar() {
        return "woof"
    }
}

const perrito = new Perro()



perrito.comer
// console.log(perrito.ladrar)
console.log(perrito.ladrar())
*/