import { UserContactInfo } from "./types";

// export type UserContactInfo = {
//     nombre: string
//     email: string
// }

function printContactInfo(info: UserContactInfo) {
    console.log(info)
    console.log(info.email)
}

const mama = {
    nombre: "Mari",
    email: "Correo@innovacion.mx",
    colorFavorito: "Blanco"
}

printContactInfo(mama)