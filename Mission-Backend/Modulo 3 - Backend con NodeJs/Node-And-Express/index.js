let express = require('express');
let app = express();

//Permite leer json y urlencode
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Create
app.post('/', function(req, res){
    // res.send("ESTA ES UNA PETICION POST");
    // res.send(`Te llamas ${req.name}`);
    // console.log(req.body);
    res.send(`Te llamas ${req.body.name}`);
});

//Read
app.get('/', function(req, res){
    res.send("Hola Mundo");
});

//Update
app.put('/',function(req,res) {
    res.send(`Has actualizado el registro numero: ${req.body.id}`);
});

//Delete
app.delete('/users', function(req, res) {
    res.send(`Has eliminado el registro: ${req.query.user}`);
});

let server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Aplicacion escuchando en http://%s:%s", host, port);
});