// Genera números entre el 500 y el 1000
const RANDOM_TIME = 
    Math.round(Math.random() * 500) + 500

let startTime = new Date();

// let endTime: any
// Aqui permitimos meterle cualquier tipo de dato a nuestra variable
let endTime

setTimeout(() => {
    endTime = 0
    console.log(endTime)
    
    endTime = new Date()
    console.log(endTime)
    
    endTime = "HOLI"
    console.log(endTime)

}, RANDOM_TIME)