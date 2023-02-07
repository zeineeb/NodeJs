var express = require('express');
var router = express.Router(); // pour ajouter un route 
var os = require("os");


router.get('/', function(req, res, next) {
    res.json({
        hostanme : os.hostname(),
        type : os.type(),
        platform :os.platform(),
    });
  });


  router.get('/cpus', function(req, res, next) {
    
    res.json({
       model :  os.cpus()
    });
  });

  router.get('/cpus/:id', function(req, res, next) {
    res.json({
        model :  os.cpus()[req.params.id]
     });

  });
  module.exports = router;
  