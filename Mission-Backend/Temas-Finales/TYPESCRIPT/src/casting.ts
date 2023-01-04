// let x: unknown = 'hola';

// function saludar(saludo: string) {
//     console.log(saludo)
// }

// saludar(x as string)



// let x: unknown = 'hola';

// function saludar(saludo: number) {
//     console.log(saludo)
// }

// saludar(x as number)


let x: string = 'hola';

function saludar(saludo: number) {
    console.log(saludo)
}

/*  Para forzar el casting primero lo debemos transformar a unknown 
    porque este tipo de dato se puede transformar en lo que sea
    y luego lo transformamos al tipo de dato que queremos   */

// saludar((x as unknown) as number)
saludar((<unknown> x) as number)