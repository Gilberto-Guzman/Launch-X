### Creamos el proyecto y le decimos a todo que si...    
    npm init --y

### Ejecutamos el proyecto
    node app.js

### Debuggear nos sirve para identificar errores.

### Test Driven Development (TDD) 🠮 Desarrollo basado en testing
Ventajas:
1. Sofware creado para el usuario
2. Prevenir bugs
3. Software de mejor calidad
4. Implementar CI/CD  
CI 🠮 Integracion Continua 🠮 Por cada cambio se sube luego luego...   
CD 🠮 Despliegue Continuo 🠮 Por cada cambio se genere una bateria de test para automatizar testing, resolucion de tareas

Pasos para crear un TDD:
1. Escribimos el test
2. Ejecutamos el test 🠮 VA A FALLAR
3. Escribir codigo
4. Ejecutar el test de nuevo 🠮 TALVEZ FUNCIONE... (Si existe alguna falla, nos vamos al paso 5)
5. Refactorizar 🠮 Modificar el codigo
6. Repetir Todos los pasos

### Instalamos mocha chai
    npm install mocha chai --save-dev

### Instalamos express
    npm i express

### Instalamos request
    npm i request

### Ejecutamos el test
    npm test
    npx mocha --reporter spec

### Ejecutamos todo
    node .\app\server.js
    npm test












### https://www.codewars.com/