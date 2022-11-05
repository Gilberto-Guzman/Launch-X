//Encontrar elementos de HTML

const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");

//imprimimos el "arreglo" contenido en parrafo
console.log(parrafo);

//Cambiar valores de HTML

titulo.innerHTML = "Titulo cambiado";
parrafo[0].innerHTML = "Parrafo cambiado";
document.getElementById("demo").innerHTML = 
    "El texto en el parrafo (index 0) es: " + parrafo[0].innerHTML;
links[0].href = "https://azure.microsoft.com/es-mx/";
links[0].target = "_blank";


//Cambiar estilos

titulo.style.color = "red"

//Eventos

function cambiarTexto (obj) {
    obj.innerHTML = "Texto clickeado";
}

function mOver (obj) {
    obj.innerHTML = "Mouse encima";
}

function mOut (obj) {
    obj.innerHTML = "Mouse fuera";
}

function mDown (obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "sueltame";    
}

function mUp (obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="gracias";
}

//addEventListener

const boton = document.getElementById("boton");
boton.addEventListener("click",alerta);
//boton.addEventListener("click", () => alert("Hola Explorers"));

function alerta() {
    alert("Hola Explorers");
}