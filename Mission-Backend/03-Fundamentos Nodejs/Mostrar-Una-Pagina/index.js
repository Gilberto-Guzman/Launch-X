const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});

router.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/contacto.html'));
});

router.get("/perfil", (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/perfil.html'));
    // res.sendFile(path.join(__dirname + '/templates/mml-book.pdf'));
    // res.sendFile(path.join(__dirname + '/templates/1.-Mostrar un texto en pantalla.exe'));
});


router.post("/", (req, res) => {
    res.send("El usuario "+ req.body.first_name + " ha sido registrad@")
    // console.log(req.body);
    // res.send(req.body);
});

app.use("/", router);
app.listen(process.env.port || 8081);

console.log("Activo en el puerto 8081");