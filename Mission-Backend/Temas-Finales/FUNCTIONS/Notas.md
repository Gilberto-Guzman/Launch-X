### Kubernetes: Es un manejador de contenedores, EJ: DOCKER. Es un servicio PASS
### Contenedor: Es un entorno de virtualización de desarrollo. Son Escalables

### Crear instancia de contenedor
### Creamos una funcion
### Instalamos la siguiente extension de vscode 🠮 Azure Functions  

# httpTrigger: Aplicación de ejemplo

# index.js
        context.log('JavaScript HTTP trigger function processed a request.');

        const name = (req.query.name || (req.body && req.body.name));
        const responseMessage = name
            ? "Hello, " + name + ". This HTTP triggered function executed successfully."
            : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }

# function.json
    {
    "bindings": [
        {
        "authLevel": "function",
        "type": "httpTrigger",
        "direction": "in",
        "name": "req",
        "methods": [
            "get",
            "post"
        ]
        },
        {
        "type": "http",
        "direction": "out",
        "name": "res"
        }
    ]
    }

### Instalamos azure functions
    npm install @azure/functions

