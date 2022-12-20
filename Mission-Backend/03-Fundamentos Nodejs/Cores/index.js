const cors = require('cors');
const express = require('express');
const app = express();

const whitelist = ['https://www.section.io', 'https://www.google.com']

const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1){
            callback(null, true);
        } else {
            callback(new Error());
        }
    }
}

app.use(cors({
    // origin: ['https://www.section.io', 'https://www.google.com']
    methods: ['GET', 'POST', 'DELETE', 'UPDATE']
    // origin: '*'
}));

const ingredientes = [
    {
        "id":"1",
        "item":"huevos"
    },
    {
        "id":"2",
        "item":"leche"
    },
    {
        "id":"3",
        "item":"hot-cakes"
    },
    {
        "id":"4",
        "item":"chilaquiles"
    },
];

app.get('/ingredientes',cors(), (req, res) => {
    res.send(ingredientes);
});

app.listen(3004);

