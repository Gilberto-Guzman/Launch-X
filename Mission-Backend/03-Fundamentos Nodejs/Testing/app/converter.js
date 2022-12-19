//PRIMER EJEMPLO
// const calcular = (A, B) => {
//     console.log("Calculando....");
//     let suma = 0;

//     suma = A + B;// suma = A + B + B + A;
//     return suma; 
// }

// const num1 = 10;
// const num2 = 15;

// const resultado = calcular(num1, num2);
// console.log(`${num1} + ${num2} = ${resultado}`);

exports.rgbToHex = function (red, green, blue){

    let redHex = red.toString(16);
    let greenHex = green.toString(16);
    let blueHex = blue.toString(16);

    return transform(redHex) + transform(greenHex) + transform(blueHex);
}

function transform(hex){
    return (hex.length === 1 ? "0" + hex : hex);
}

exports.hexToRgb = function(hex) {
    let red = parseInt(hex.substring(0, 2), 16);
    let green = parseInt(hex.substring(2, 4), 16);
    let blue = parseInt(hex.substring(4, 6), 16);

    return [red, green, blue];
    // return red, green, blue;
    // return [red, 1, 1];
}
