// En JavaScript
let carro = {
    fabricante: "Toyota",
    modelo: "Prius",
    año: 2022,
    color: "rojo"
}

// En TypeScript
let carroTypeScript: {
    fabricante: string,
    modelo: string,
    año: number
}

function getCar(car: {
    fabricante: string,
    modelo: string,
    año: number
    color?: string // Este campo es opcional
}) {
    let str = ""
    if(car.color === undefined)
        str = `${car.fabricante} ${car.modelo} ${car.año}`
    else
        str = `${car.fabricante} ${car.modelo} ${car.año} ${car.color}`
    // console.log(`${car.fabricante} ${car.modelo} ${car.año} ${car.color}`)

    console.log(str)
}

getCar(carro)