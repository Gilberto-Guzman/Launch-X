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