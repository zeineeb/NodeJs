var express = require('express');
var router = express.Router();
var Products = require('../products.json');


router.get('/', function(req, res, next) {
    res.json(Products)
  });


  router.get('/:id', (req, res, next) => {
    res.json(Products[req.params.id])
});

router.get('/instock/:qt', (req, res, next) => {
    const foudedProducts = Object.values(Products).filter(prod => prod.stock > req.params.qt);
    res.json(foudedProducts);
});
// object.value(Product) => ta3tik i value fi fichier json
router.get('/:id/:qt', (req, res, next) => {
    res.json({
        id: Products[req.params.id],
        qt: req.params.qt,
        unit_price :Products[req.params.id].price,
        total_price :Products[req.params.id].price* req.params.qt,
        
    });
});

module.exports = router;