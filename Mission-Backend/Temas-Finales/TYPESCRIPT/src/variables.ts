//En TypeScript se habilita el tipado fuerte o estatico, es decir, 
//que un dato que empieza como number, no puede ser cambiado de ese tipo de dato

let edad = 18

// Esto genera un error ya que TypeScript es de tipado estatico
// edad = "dieciocho años";

const edad2 = 19;

// Genera un error ya que la variable es constante, osea que no puede cambiar su valor
// edad2 = 12;
