const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//Objeto
const {Server} = require('socket.io');
const io = new Server(server);

app.get("/", (req, res) => {
    // res.send('<h1>Holi</h1>');
    res.sendFile(__dirname + '/templates/index.html');
});

io.on('connection', (socket) => {
    console.log("Un usuario se ha conectado al chat");

    socket.on('chat message', (msg) => {
        // console.log("El mensaje fue: " + msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log("El usuario se ha desconectado");
    });
});

server.listen(8081, () => {
    console.log("Escuchando en el puerto 8081");
});