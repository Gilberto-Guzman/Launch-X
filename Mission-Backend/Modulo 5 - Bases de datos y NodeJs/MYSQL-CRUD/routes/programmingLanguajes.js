const express = require('express');
const router = express.Router();
const programmingLanguajes = require('../services/programmingLanguajes');

router.get('/', async function(req, res, next){
    try {
        res.json(await programmingLanguajes.read(req.query.page));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.post('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguajes.create(req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.put('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguajes.update(req.body.id, req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.delete('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguajes.delete1(req.query.id));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

module.exports = router;