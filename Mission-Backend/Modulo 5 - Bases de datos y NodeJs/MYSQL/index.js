const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.get("/", (req, res) => {
    res.json({message: "OK"});
});

app.listen(port, () => {
    console.log(`App escuchando en http://localhost:${port}`);
});