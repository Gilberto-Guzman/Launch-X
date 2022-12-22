http:       //localhost:    3000/   
Protocolo   Dominio         Puerto

### Solicitud De Origen Cruzada (CORS)
### Cross Origin Resource Showing

### Creamos el proyecto y le decimos a todo que si...    
    npm init --y

### Instalamos cors, express y nodemon
    npm i cors express nodemon

### Inicializamos el servidor
    nodemon index.js

### Accedemos a ingredientes
    http://localhost:3004/ingredientes

### Realizamos una peticion desde la consola
    fetch("http://localhost:3004/ingredientes").then(req => req.text().then(console.log))

### Cors 🠮 Sirve para que desde paginas externas puedan acceder a tu pagina
