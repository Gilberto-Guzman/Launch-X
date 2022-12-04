let encabezados  = "";


window.onclick = function() {
    //Me crea una serie de elements por cada tag encontrado
    let encabezados = document.createElement("h1");
    console.log(encabezados);

    const text = document.createTextNode("¿Quieres ser mi morrita?");
    console.log(text);

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);


    encabezados.appendChild("<h2>ESTE ES UN SUBTITULO<h2>");
}

//INTRO Tipos de datos en JavaScript

// let variable = 42 //Numero o int number
// console.log(typeof variable);

// variable = "cuarenta y dos";
// console.log(typeof variable);

// variable = "42";
// console.log(typeof variable);
// variable = 42;
// console.log(variable + variable);
// // variable = !false; // booleano 
// variable = !!-2; // Cualquier variable diferente a cero es true
// console.log(variable);

