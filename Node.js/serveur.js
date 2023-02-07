var http  = require('http')
var url  = require("url");
var querystring = require('querystring')

var server = http.createServer(function(req,res){
    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    res.writeHead(200 , {"content-Type":" text/html"});
    console.log("params", params);
    if(page=='/'){
        res.write('vous etes dans la page d\'accuil')
    }
    else if(page=='/Contact'){
        res.write('vous etes dans la page contact')
    }
    else if(page=='/Affichage'){
        // pour tester : http://localhost:8080/Affichage?id=1&login=zeienb
      if('id' in params && 'login'  in params ){

        res.write('Votre id est ' + params['id'] + '  votre login est '+ params['login'])

      }
      else
     res.write('Veuillez saisir votre id  login')
    }
    else
    res.write('404 Not Found ')

res.end()
});

server.listen(8080);



/* var http  = require('http');
var server = http.createServer(function(req,res){
res.writeHead(200 , {"content-Type":" text/html"});
res.write('<!DOCTYPE html>'+
'<html>'+
'<head>'+
'<meta charset ="utf-8">'+
    '<title> Ma page Node</title>'+
    '</head>'+
'<body>'+
'<p>voici une paragrahe <Strong>Html !</Strong> </p>'+
'</body>'+
    '</html>');
res.end()
});
server.listen(8080); */

