//'use strict'

var leti = 10;
console.log(leti);

// Estavariable no esta declarada y debe de mandar error
let variableNoDeclarada = 10;
console.log(variableNoDeclarada);


/**
 * No genera nada
 */
function funcionEstricta() {
  //'use strict'

    var leti = "Estricta";
    console.log(leti);
}

function funcionNoEstricta() {
    var leti = "No estricta";
    console.log(leti);
}

funcionEstricta();
funcionNoEstricta();
