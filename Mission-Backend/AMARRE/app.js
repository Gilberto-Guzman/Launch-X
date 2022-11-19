function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.top = Math.random() * (window.innerWitdh - elm.offsetWitdh) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)});

// Windows + . --> Puedes agregar emojis
btnSi.addEventListener('click', function(e) {
    alert('Sabia que diriras que SÍ. Casemonos ya y tengamos hijos. TE AMO!!! ❤');
    divModoSexo.style.display = 'block';
    const cancion = new Audio('./media/img_modo_hot.mp3');
    cancion.play();
});

divModoSexo.addEventListener('click', function(e) {
    // divModoSexo.innerHTML = "<img src='https://i.pinimg.com/originals/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.png'>";
    
    const img = document.createElement("img");
    img.src = "https://i.pinimg.com/originals/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.png";
    console.log(img);
    divModoSexo.appendChild(img);
});

botones = document.getElementsByTagName("button");
console.log(botones);


window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
});