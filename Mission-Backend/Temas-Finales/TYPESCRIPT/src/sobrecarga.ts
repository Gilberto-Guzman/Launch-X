interface Figura {
    getArea: () => number
}

class Rectangulo implements Figura {

    // protected significa que ancho solo se puede usar en esa clase
    public constructor
    (
        protected readonly ancho: number,
        protected readonly alto: number
    ) {}
    
    public getArea(): number {
        return this.ancho * this.alto
    }

    public toString(): string {
        return `Rectangulo con ancho de ${this.ancho} y alto de ${this.alto}`
    }

}

class Cuadrado extends Rectangulo {

    public constructor(ancho: number) {
        super(ancho, ancho)
    }   

    //Puedes omitir el uso de override, sin embargo este es muy importante
    public override toString(): string {
        return `Cuadrado con lados de ${this.ancho}`
    }

}

let Cuadro = new Cuadrado(5)
console.log(Cuadro.toString())