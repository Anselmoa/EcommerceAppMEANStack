var express = require('express');
var router = express.Router();

var Categorias = require('../models/categorias');

router.get('/', function(req, res, next) {
    Categorias.find(function(err, categorias) {
        if (err) {
            console.log(err);
        }
        res.json(categorias);
    });
});

router.post('/criar', function(req, res, next) {
    Categorias.create({ nome: "NOVO", subCategorias: { nome: "NVA" } }, function(err) {
        if (err) {
            console.log(err);
        }
    });
});

module.exports = router;