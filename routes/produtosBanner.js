var express = require('express');
var router = express.Router();

var ProdutosBanner = require('../models/produtoBanner');


router.get('/', function(req, res, next) {
    ProdutosBanner.find(function(err, produtosBanner) {
        if (err) { console.log(err); }
        res.json(produtosBanner);
    });
});

router.post('/criar', function(req, res, next) {
    ProdutosBanner.create({
        imagem: 'http://www.ickcv.com/Portals/0/Images/BannerEQUIP.png',
    }, function(err) {
        if (err) { console.log(err); }
    });
});

module.exports = router;