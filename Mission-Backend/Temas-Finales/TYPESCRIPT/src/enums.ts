// Enums: Es una clase especial de TypeScript, representa un grupo de constantes

enum Cordenadas {
    Latitud = 59,
    Longitud = 60
}

let latitudCor = Cordenadas.Latitud

console.log(latitudCor)

/*
Al ser constantes, su valor no puede ser cambiado
Cordenadas = "Holi"
Cordenadas.Latitud = 0
*/