// Pila --> LIFO (Last In First Out)

// En JavaScript no es necesario que el constructor tenga el mismo nombre que la clase
class Pila {

    constructor(){
        this.pila = [];
        this.contador = 0;
    }

    // Mete elementos al final de la pila
    push(element) {
        this.pila[this.contador] = element;
        this.contador++;
        return this.pila;
    }

    // Sacar el ultimo elementoy devolverlo
    pop() {
        this.contador--;
        const element = this.pila[this.contador];
        delete this.pila[this.contador];
        return element;
    }

    // Solo muestra el último elemento
    peek(){
        return this.pila[this.contador -1];
    }

    // Devuelve el tamaño de la pila
    size(){
        return this.contador;
    }

    print(){
        return this.pila;
        // console.log(this.pila);
    }
}

const miPila = new Pila();
console.log(miPila.size());
console.log(miPila.print());

console.log(miPila.push("La roca"));
console.log(miPila.print());

console.log(miPila.push(5));

console.log(miPila.pop());
console.log(miPila.size());
